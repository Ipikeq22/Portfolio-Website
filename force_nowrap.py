import os

i18n_path = r"c:\Users\ipike\OneDrive\桌面\作品集網站新點\Portfolio-Website\i18n-fix.css"

with open(i18n_path, "r", encoding="utf-8") as f:
    content = f.read()

# Replace flex-wrap: wrap with flex-wrap: nowrap
content = content.replace("flex-wrap: wrap !important;", "flex-wrap: nowrap !important;")
# Reduce gap from 20px to 10px to ensure they fit in the column
content = content.replace("gap: 20px !important;", "gap: 10px !important;")

with open(i18n_path, "w", encoding="utf-8") as f:
    f.write(content)

print("Forced nowrap and reduced gap successfully!")
