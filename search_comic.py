import os
import glob

html_files = glob.glob(r"c:\Users\ipike\OneDrive\桌面\作品集網站新點\Portfolio-Website\*.html")

found = False
for f in html_files:
    with open(f, "r", encoding="utf-8", errors="ignore") as file:
        content = file.read()
        if "comic2.png" in content or "接蛋正式版" in content or "comic2" in content:
            print(f"Found in {os.path.basename(f)}")
            found = True

if not found:
    print("Not found in any HTML file in the Portfolio-Website folder.")
