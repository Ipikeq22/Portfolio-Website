import os

i18n_path = r"c:\Users\ipike\OneDrive\桌面\作品集網站新點\Portfolio-Website\i18n-fix.css"

club_css = """
/* =========================================
   PREMIUM CLUB CARDS & BUTTONS
   ========================================= */
body .club-item {
    background: rgba(255, 255, 255, 0.03) !important;
    border: 1px solid rgba(255, 255, 255, 0.08) !important;
    border-radius: 20px !important;
    padding: 24px 20px !important;
    display: flex !important;
    flex-direction: column !important;
    align-items: center !important;
    box-shadow: 0 8px 24px rgba(0,0,0,0.2) !important;
    transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease !important;
    height: 100% !important;
    box-sizing: border-box !important;
}

body .club-item:hover {
    transform: translateY(-5px) !important;
    box-shadow: 0 12px 30px rgba(0,0,0,0.3) !important;
    border-color: rgba(255, 215, 0, 0.3) !important;
}

body .club-item img.club-img {
    border-radius: 12px !important;
    margin-bottom: 20px !important;
    width: 100% !important;
    max-height: 180px !important;
    object-fit: cover !important;
    box-shadow: 0 4px 15px rgba(0,0,0,0.2) !important;
}

body .club-item h4 {
    display: inline-block !important;
    background: rgba(255, 215, 0, 0.1) !important;
    color: #ffd700 !important;
    padding: 6px 18px !important;
    border-radius: 20px !important;
    font-size: 0.9rem !important;
    font-weight: 700 !important;
    margin: 0 0 20px 0 !important;
    border: 1px solid rgba(255, 215, 0, 0.25) !important;
    letter-spacing: 1px !important;
    box-sizing: border-box !important;
    text-align: center !important;
}

body .club-item .club-btn {
    display: inline-flex !important;
    align-items: center !important;
    justify-content: center !important;
    background: linear-gradient(135deg, #ffd700 0%, #ffa500 100%) !important;
    color: #1a1a1a !important;
    padding: 12px 28px !important;
    border-radius: 30px !important;
    font-weight: 800 !important;
    font-size: 0.95rem !important;
    text-decoration: none !important;
    border: none !important;
    width: auto !important;
    margin: auto auto 0 auto !important; /* Center horizontally, push to bottom */
    box-shadow: 0 6px 15px rgba(255, 165, 0, 0.3) !important;
    transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275) !important;
    letter-spacing: 0.5px !important;
}

body .club-item .club-btn:hover {
    transform: translateY(-4px) scale(1.05) !important;
    box-shadow: 0 10px 25px rgba(255, 165, 0, 0.5) !important;
    background: linear-gradient(135deg, #ffe033 0%, #ffb732 100%) !important;
    color: #000 !important;
}
"""

with open(i18n_path, "a", encoding="utf-8") as f:
    f.write("\n" + club_css + "\n")

print("Club buttons and cards optimized successfully!")
