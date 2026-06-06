import os

i18n_path = r"c:\Users\ipike\OneDrive\桌面\作品集網站新點\Portfolio-Website\i18n-fix.css"

with open(i18n_path, "r", encoding="utf-8") as f:
    content = f.read()

# Increase specificity to override `.project-buttons button.btn-orange`
content = content.replace("body .project-buttons a, \nbody .project-buttons button", "body .project-buttons a[class], \nbody .project-buttons button[class]")
content = content.replace("body .project-buttons a:hover, \nbody .project-buttons button:hover", "body .project-buttons a[class]:hover, \nbody .project-buttons button[class]:hover")
content = content.replace("body .project-buttons a span, \nbody .project-buttons button span", "body .project-buttons a[class] span, \nbody .project-buttons button[class] span")
content = content.replace("body .project-buttons a img.btn-icon, \nbody .project-buttons button img.btn-icon", "body .project-buttons a[class] img.btn-icon, \nbody .project-buttons button[class] img.btn-icon")
content = content.replace("body .project-buttons a:hover img.btn-icon, \nbody .project-buttons button:hover img.btn-icon", "body .project-buttons a[class]:hover img.btn-icon, \nbody .project-buttons button[class]:hover img.btn-icon")

with open(i18n_path, "w", encoding="utf-8") as f:
    f.write(content)

print("Specificity increased successfully!")
