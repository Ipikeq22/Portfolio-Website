import os
import re

i18n_path = r"c:\Users\ipike\OneDrive\桌面\作品集網站新點\Portfolio-Website\i18n-fix.css"

with open(i18n_path, "r", encoding="utf-8") as f:
    i18n_content = f.read()

# We need to replace the glassmorphism dark block with a bright block.
old_css_pattern = r"/\* =========================================\s*PREMIUM UNIFORM PROJECT BUTTONS\s*========================================= \*/.*"

bright_css = """
/* =========================================
   PREMIUM UNIFORM PROJECT BUTTONS (BRIGHT)
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
    
    /* Bright Glassmorphism */
    background: rgba(255, 255, 255, 0.85) !important;
    backdrop-filter: blur(20px) !important;
    -webkit-backdrop-filter: blur(20px) !important;
    border: 1px solid rgba(255, 255, 255, 1) !important;
    box-shadow: 0 10px 30px rgba(0,0,0,0.15) !important;
}

body .project-buttons a:hover, 
body .project-buttons button:hover {
    transform: translateY(-8px) scale(1.03) !important;
    background: rgba(255, 255, 255, 1) !important;
    border-color: #ffd700 !important;
    box-shadow: 0 15px 35px rgba(0,0,0,0.2), 0 0 20px rgba(255, 215, 0, 0.4) !important;
    z-index: 10;
}

body .project-buttons a span, 
body .project-buttons button span {
    display: block !important;
    width: 100% !important;
    text-align: center !important;
    margin: 0 auto !important;
    font-size: 0.95rem !important;
    font-weight: 700 !important;
    color: #1a1a1a !important; /* Dark text for bright background */
    line-height: 1.2 !important;
    white-space: normal !important;
    word-break: keep-all !important;
}

body .project-buttons a img.btn-icon, 
body .project-buttons button img.btn-icon {
    display: block !important;
    width: 40px !important;
    height: 40px !important;
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

/* Specific Accent Colors for Text Hover (since bg is white) */
body .project-buttons .btn-primary:hover span { color: #d4a000 !important; }
body .project-buttons .btn-intro:hover span { color: #008b8b !important; }
body .project-buttons .btn-green:hover span { color: #00994d !important; }
body .project-buttons .btn-orange:hover span { color: #cc7a00 !important; }
body .project-buttons .btn-purple:hover span { color: #8a2be2 !important; }
"""

new_content = re.sub(old_css_pattern, bright_css, i18n_content, flags=re.DOTALL)

with open(i18n_path, "w", encoding="utf-8") as f:
    f.write(new_content)

print("Changed buttons to bright theme successfully!")
