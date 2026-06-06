import os

file_path = r"c:\Users\ipike\OneDrive\桌面\作品集網站新點\Portfolio-Website\style.css"

css_fix = """
/* --- Fix Button Alignment --- */
.project-buttons a, .project-buttons button {
    text-align: center !important;
}

.project-buttons a span, .project-buttons button span {
    display: block !important;
    width: auto !important;
    text-align: center !important;
    margin: 0 auto !important;
    white-space: nowrap !important;
}

.project-buttons a .btn-icon, .project-buttons button .btn-icon {
    display: block !important;
    margin: 0 auto 12px auto !important;
}
"""

with open(file_path, "a", encoding="utf-8") as f:
    f.write(css_fix)

print("Button alignment CSS appended successfully!")
