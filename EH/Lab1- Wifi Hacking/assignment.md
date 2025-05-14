
## **Lab Exercises**
 
### **Exercise 1: Analyzing Wireless Traffic Using Wireshark**
 
#### **Objective**:
Learn how to open and analyze pre-captured wireless network traffic.
 
#### **Steps**:
1. **Open Wireshark**:
   - Launch Wireshark on your computer.
   - Load a pre-captured file (e.g., WPA handshake):
     - Go to `File` > `Open` > Select the `.pcap` file.
 
2. **Filter Wireless Traffic**:
   - Use filters to isolate wireless packets:
     - For WPA handshake: `eapol`.
  ![image](https://github.com/user-attachments/assets/e3676c92-d599-48f4-b292-290aaa4588e2)


3. **Analyze Packets**:
   - Identify the following components in the capture:
     - **SSID**: The network name.
     ![image](https://github.com/user-attachments/assets/b8faa963-e24a-4d20-9977-d325e290f786)

     - **BSSID**: The MAC address of the access point.
 ![image](https://github.com/user-attachments/assets/ad97aff8-b752-4e0e-b882-2cb183095b75)

     - **Handshake Packets**: Look for EAPOL packets.
  ![image](https://github.com/user-attachments/assets/e3ed6543-8b18-4644-aa94-3e8252b8dae1)

4. **Document Observations**:
   - Note the time, source, destination, and protocol of key packets.
  ![image](https://github.com/user-attachments/assets/31e6f306-f7c5-4a8e-926b-0ddc57ef47ab)

---
 
### **Exercise 2: Cracking WEP Encryption Using Pre-Captured Files**
 
#### **Objective**:
Simulate cracking a WEP-encrypted network using Aircrack-ng.
 
#### **Steps**:
1. **Download a WEP Capture File**:
   - Obtain a `.cap` file containing WEP packets (e.g., from GitHub).
Found .cap file from: https://www.aircrack-ng.org/downloads.html?utm_source=chatgpt.com
 
2. **Analyze the Capture**:
   - Open the file in Wireshark to ensure it contains WEP-encrypted traffic.
This filters encrypted wireless traffic
wlan.fc.protected == 1
•  Check Encryption Type:
•	Look at the Protocol column for 802.11 frames.
•	Click on a captured packet and expand the IEEE 802.11 section.
•	Look for "WEP" under "Security" or "Protected Data".
•	If present, the traffic is WEP-encrypted.
•  Verify IVs (Initialization Vectors):
•	Look for a field named IV (Initialization Vector) in WEP-encrypted packets.
•	WEP uses IVs for encryption, and repeated IVs indicate vulnerability.

 
 ![image](https://github.com/user-attachments/assets/c8328f59-de5f-4f44-a6ba-0a0e022e6a12)

3. **Use Aircrack-ng**:
   - Launch Kali Linux.
   - Run Aircrack-ng on the capture file:
     ```bash
     aircrack-ng -b [BSSID] -w /usr/share/wordlists/rockyou.txt wep_capture.cap
     ```
4. **Crack the Key**:
   - If successful, Aircrack-ng will display the WEP key in plaintext.

 ![image](https://github.com/user-attachments/assets/445514dc-82b1-4ea0-9c30-f2879ef48093)

 Result: KEY FOUND! [ 1F:1F:1F:1F:1F ]
#### **Expected Outcome**:
Understand how WEP encryption is vulnerable and why it is deprecated.
 
---
 
### **Exercise 3: Cracking WPA/WPA2 Encryption Using a Pre-Captured Handshake**
 
#### **Objective**:
Simulate cracking a WPA/WPA2-encrypted network using a captured handshake and dictionary attack.
 
#### **Steps**:
1. **Download a WPA Handshake File**:
   - Obtain a `.cap` file with a valid handshake (e.g., from GitHub).
Obtained .cap file from: https://github.com/aircrack-ng/aircrack-ng/tree/master/test
2. **Verify the Handshake**:
   - Open the file in Wireshark.
   - Use the filter `eapol` to ensure handshake packets are present.
If 4 EAPOL packets are present, the handshake is complete and ready for cracking.
 ![image](https://github.com/user-attachments/assets/32e5c717-03d5-46a6-b461-625dc5705737)

 
3. **Convert the Capture File**:
   - Use `aircrack-ng` to convert the `.cap` file to `.hccapx` format for Hashcat (optional):
     ```bash
     aircrack-ng handshake.cap -J handshake
     ```
 ![image](https://github.com/user-attachments/assets/139a4f1d-40a4-45b4-a74f-1524c3cd1b5d)





 
4. **Run Aircrack-ng**:
   - Attempt to crack the handshake using a dictionary file:
     ```bash
     aircrack-ng -w /usr/share/wordlists/rockyou.txt handshake.cap
     ```
 
  ![image](https://github.com/user-attachments/assets/c173cda7-7118-453e-a16b-301955850732)
