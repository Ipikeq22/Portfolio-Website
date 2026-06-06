import os

file_path = r"c:\Users\ipike\OneDrive\桌面\作品集網站新點\Portfolio-Website\i18n-fix.css"

if os.path.exists(file_path):
    css_fix = """

/* =========================================
   ULTIMATE BUTTON ALIGNMENT FIX (Overrides everything above)
   ========================================= */
.project-buttons a, .project-buttons button {
    display: flex !important;
    flex-direction: column !important;
    align-items: center !important;
    justify-content: center !important;
    text-align: center !important;
    padding: 20px 10px !important;
}

.project-buttons a span, .project-buttons button span {
    display: block !important;
    width: 100% !important;
    text-align: center !important;
    margin: 0 auto !important;
    white-space: normal !important;
    line-height: 1.4 !important;
}

.project-buttons a img.btn-icon, .project-buttons button img.btn-icon {
    display: block !important;
    margin: 0 auto 12px auto !important;
    align-self: center !important;
    width: 40px !important;
    height: 40px !important;
    position: static !important;
    transform: none !important;
}

.project-buttons a:hover img.btn-icon, .project-buttons button:hover img.btn-icon {
    transform: scale(1.15) !important;
}
"""

    with open(file_path, "a", encoding="utf-8") as f:
        f.write(css_fix)
    print("Appended fix to i18n-fix.css successfully!")
else:
    print("i18n-fix.css not found!")
