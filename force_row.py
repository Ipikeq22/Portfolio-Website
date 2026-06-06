import os

i18n_path = r"c:\Users\ipike\OneDrive\桌面\作品集網站新點\Portfolio-Website\i18n-fix.css"

with open(i18n_path, "r", encoding="utf-8") as f:
    i18n_content = f.read()

# Add flex-direction: row !important; to body .project-buttons
if "flex-direction: row !important;" not in i18n_content:
    i18n_content = i18n_content.replace(
        "body .project-buttons {\n    display: flex !important;", 
        "body .project-buttons {\n    display: flex !important;\n    flex-direction: row !important;"
    )
    with open(i18n_path, "w", encoding="utf-8") as f:
        f.write(i18n_content)
    print("Forced row direction successfully!")
else:
    print("Already forced row direction.")
