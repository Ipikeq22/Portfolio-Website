import os

i18n_path = r"c:\Users\ipike\OneDrive\桌面\作品集網站新點\Portfolio-Website\i18n-fix.css"

img_fix = """
/* =========================================
   PROJECT THUMBNAIL SIZING FIX
   ========================================= */
body .project-showcase .project-image {
    display: flex !important;
    justify-content: center !important;
    align-items: center !important;
    background: transparent !important;
    box-shadow: none !important;
}

body .project-showcase .project-image img {
    width: auto !important;
    max-width: 100% !important;
    max-height: 380px !important; /* Constrain tall portrait images like Stun */
    object-fit: contain !important;
    border-radius: 16px !important;
    box-shadow: 0 8px 30px rgba(0,0,0,0.3) !important;
    margin: 0 auto !important;
}

@media (max-width: 768px) {
    body .project-showcase .project-image img {
        max-height: 280px !important; /* Smaller on mobile */
    }
}
"""

with open(i18n_path, "a", encoding="utf-8") as f:
    f.write("\n" + img_fix + "\n")

print("Image height constraints injected successfully!")
