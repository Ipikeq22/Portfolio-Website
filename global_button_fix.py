import os
import re
import glob

html_files = glob.glob(r"c:\Users\ipike\OneDrive\桌面\作品集網站新點\Portfolio-Website\*.html")

# 1. Clean HTML files (remove injected styles)
for file_path in html_files:
    with open(file_path, "r", encoding="utf-8") as f:
        content = f.read()
    
    if "<!-- 強制按鈕置中修復 -->" in content:
        content = re.sub(r"<!-- 強制按鈕置中修復 -->.*?</style>\s*</head>", "</head>", content, flags=re.DOTALL)
        with open(file_path, "w", encoding="utf-8") as f:
            f.write(content)
        print(f"Cleaned {os.path.basename(file_path)}")

# 2. Clean i18n-fix.css
i18n_path = r"c:\Users\ipike\OneDrive\桌面\作品集網站新點\Portfolio-Website\i18n-fix.css"
if os.path.exists(i18n_path):
    with open(i18n_path, "r", encoding="utf-8") as f:
        i18n_content = f.read()
    
    if "ULTIMATE BUTTON ALIGNMENT FIX" in i18n_content:
        i18n_content = re.sub(r"/\* =========================================\s*ULTIMATE BUTTON ALIGNMENT FIX.*", "", i18n_content, flags=re.DOTALL)
        with open(i18n_path, "w", encoding="utf-8") as f:
            f.write(i18n_content.strip() + "\n")
        print("Cleaned i18n-fix.css")

# 3. Clean style.css and Append the final perfect CSS
style_path = r"c:\Users\ipike\OneDrive\桌面\作品集網站新點\Portfolio-Website\style.css"
with open(style_path, "r", encoding="utf-8") as f:
    style_content = f.read()

# Try to remove old appended button css if it exists
style_content = re.sub(r"/\* --- 3\. Buttons Enhancement \(Grid Cards\) ---\*/.*?(?=(/\* --- 4\. Club Section --- \*/)|$)", "", style_content, flags=re.DOTALL)
style_content = re.sub(r"/\* --- Fix Button Alignment --- \*/.*", "", style_content, flags=re.DOTALL)

perfect_css = """
/* =========================================
   PREMIUM UNIFORM PROJECT BUTTONS
   ========================================= */
body .project-buttons {
    display: flex !important;
    flex-wrap: wrap !important;
    justify-content: flex-start !important;
    gap: 20px !important;
    margin-top: 30px !important;
    width: 100% !important;
}

@media (max-width: 768px) {
    body .project-buttons {
        justify-content: center !important;
    }
}

body .project-buttons a, 
body .project-buttons button {
    display: flex !important;
    flex-direction: column !important;
    align-items: center !important;
    justify-content: center !important;
    text-align: center !important;
    width: 110px !important;
    height: 110px !important;
    padding: 12px 8px !important;
    margin: 0 !important;
    box-sizing: border-box !important;
    border-radius: 18px !important;
    text-decoration: none !important;
    cursor: pointer !important;
    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) !important;
    
    /* Glassmorphism */
    background: rgba(255, 255, 255, 0.04) !important;
    backdrop-filter: blur(15px) !important;
    -webkit-backdrop-filter: blur(15px) !important;
    border: 1px solid rgba(255, 255, 255, 0.08) !important;
    box-shadow: 0 8px 25px rgba(0,0,0,0.2) !important;
}

body .project-buttons a:hover, 
body .project-buttons button:hover {
    transform: translateY(-8px) scale(1.03) !important;
    background: rgba(255, 255, 255, 0.08) !important;
    border-color: rgba(255, 215, 0, 0.4) !important;
    box-shadow: 0 15px 35px rgba(0,0,0,0.4), 0 0 20px rgba(255, 215, 0, 0.15) !important;
    z-index: 10;
}

body .project-buttons a span, 
body .project-buttons button span {
    display: block !important;
    width: 100% !important;
    text-align: center !important;
    margin: 0 auto !important;
    font-size: 0.95rem !important;
    font-weight: 600 !important;
    color: #e0e0e0 !important;
    line-height: 1.2 !important;
    white-space: normal !important;
    word-break: keep-all !important;
}

body .project-buttons a img.btn-icon, 
body .project-buttons button img.btn-icon {
    display: block !important;
    width: 38px !important;
    height: 38px !important;
    margin: 0 auto 10px auto !important;
    transition: transform 0.3s ease !important;
    float: none !important;
    position: static !important;
    object-fit: contain !important;
}

body .project-buttons a:hover img.btn-icon, 
body .project-buttons button:hover img.btn-icon {
    transform: scale(1.15) !important;
}

/* Specific Accent Colors */
body .project-buttons .btn-primary span { color: #ffd700 !important; }
body .project-buttons .btn-primary { border-color: rgba(255, 215, 0, 0.15) !important; }
body .project-buttons .btn-primary:hover { border-color: rgba(255, 215, 0, 0.5) !important; background: rgba(255, 215, 0, 0.05) !important; }

body .project-buttons .btn-intro span { color: #00ffff !important; }
body .project-buttons .btn-intro { border-color: rgba(0, 255, 255, 0.15) !important; }
body .project-buttons .btn-intro:hover { border-color: rgba(0, 255, 255, 0.5) !important; background: rgba(0, 255, 255, 0.05) !important; }

body .project-buttons .btn-green span { color: #00ff80 !important; }
body .project-buttons .btn-green { border-color: rgba(0, 255, 128, 0.15) !important; }
body .project-buttons .btn-green:hover { border-color: rgba(0, 255, 128, 0.5) !important; background: rgba(0, 255, 128, 0.05) !important; }

body .project-buttons .btn-orange span { color: #ff9900 !important; }
body .project-buttons .btn-orange { border-color: rgba(255, 153, 0, 0.15) !important; }
body .project-buttons .btn-orange:hover { border-color: rgba(255, 153, 0, 0.5) !important; background: rgba(255, 153, 0, 0.05) !important; }

body .project-buttons .btn-purple span { color: #b266ff !important; }
body .project-buttons .btn-purple { border-color: rgba(178, 102, 255, 0.15) !important; }
body .project-buttons .btn-purple:hover { border-color: rgba(178, 102, 255, 0.5) !important; background: rgba(178, 102, 255, 0.05) !important; }
"""

# Now write to i18n-fix.css to ensure it overrides EVERYTHING absolutely globally.
# Because i18n-fix.css is loaded LAST in the HTML.
with open(i18n_path, "a", encoding="utf-8") as f:
    f.write("\n" + perfect_css + "\n")

print("Globally injected perfect CSS into i18n-fix.css!")
