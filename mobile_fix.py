import os

i18n_path = r"c:\Users\ipike\OneDrive\桌面\作品集網站新點\Portfolio-Website\i18n-fix.css"

with open(i18n_path, "r", encoding="utf-8") as f:
    content = f.read()

mobile_fix = """
/* =========================================
   MOBILE LAYOUT FIXES
   ========================================= */
@media (max-width: 768px) {
    body .project-buttons {
        flex-wrap: wrap !important;
        justify-content: center !important;
        gap: 15px !important;
    }
    
    body .project-buttons a[class], 
    body .project-buttons button[class] {
        width: 100px !important; /* Slightly smaller on mobile to fit 3 if possible, or wrap cleanly */
        height: 100px !important;
        padding: 10px 5px !important;
    }
    
    body .club-gallery {
        grid-template-columns: 1fr !important; /* Force single column on mobile */
        gap: 20px !important;
        width: 100% !important;
        box-sizing: border-box !important;
        padding: 0 10px !important;
    }
    
    body .club-item {
        width: 100% !important;
        max-width: 100% !important;
        box-sizing: border-box !important;
    }
    
    html, body {
        overflow-x: hidden !important; /* Prevent horizontal scrolling */
        max-width: 100vw !important;
    }
}
"""

with open(i18n_path, "a", encoding="utf-8") as f:
    f.write("\n" + mobile_fix + "\n")

print("Mobile layout fixes injected successfully!")
