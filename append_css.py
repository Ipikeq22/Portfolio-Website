import os

file_path = r"c:\Users\ipike\OneDrive\桌面\作品集網站新點\Portfolio-Website\style.css"

css_to_append = """
/* =========================================================
   NEW ENHANCED LAYOUT STYLES (Appended by Gary's Assistant)
   ========================================================= */

/* --- 1. Project Card Glassmorphism & Hover --- */
.project-card {
    background: linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.01) 100%) !important;
    backdrop-filter: blur(16px) !important;
    -webkit-backdrop-filter: blur(16px) !important;
    border: 1px solid rgba(255, 215, 0, 0.15) !important;
    border-radius: 24px !important;
    padding: 40px !important;
    margin-bottom: 60px !important;
    box-shadow: 0 10px 30px rgba(0,0,0,0.3) !important;
    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) !important;
    overflow: hidden;
    position: relative;
}

.project-card::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(circle, rgba(255,215,0,0.05) 0%, transparent 60%);
    opacity: 0;
    transition: opacity 0.5s ease;
    pointer-events: none;
    z-index: 0;
}

.project-card:hover {
    transform: translateY(-12px) !important;
    box-shadow: 0 20px 40px rgba(0,0,0,0.5), 0 0 20px rgba(255, 215, 0, 0.2) !important;
    border-color: rgba(255, 215, 0, 0.4) !important;
}

.project-card:hover::before {
    opacity: 1;
}

.project-showcase {
    position: relative;
    z-index: 1;
}

.project-image img {
    border-radius: 16px !important;
    transition: transform 0.5s ease, box-shadow 0.5s ease !important;
    box-shadow: 0 8px 25px rgba(0,0,0,0.4) !important;
}

.project-card:hover .project-image img {
    transform: scale(1.03) !important;
    box-shadow: 0 15px 35px rgba(0,0,0,0.6) !important;
}

/* --- 2. Typography & Gradient Text --- */
.project-info h2 {
    background: linear-gradient(135deg, #ffd700 0%, #ffaa00 100%) !important;
    -webkit-background-clip: text !important;
    -webkit-text-fill-color: transparent !important;
    background-clip: text !important;
    color: transparent !important; /* fallback */
    font-size: 2.8rem !important;
    font-weight: 800 !important;
    margin-bottom: 20px !important;
    text-shadow: 0px 4px 15px rgba(255, 215, 0, 0.2) !important;
}

.project-info h4 {
    font-size: 1.2rem !important;
    color: #ffed4e !important;
    letter-spacing: 2px !important;
    margin-bottom: 15px !important;
    display: inline-block;
    padding: 4px 12px;
    background: rgba(255, 215, 0, 0.1) !important;
    border-radius: 20px;
    border: 1px solid rgba(255, 215, 0, 0.2);
}

.project-subtitle, .project-info p {
    font-size: 1.05rem !important;
    line-height: 1.7 !important;
    color: #e0e0e0 !important;
    margin-bottom: 25px !important;
}

/* --- 3. Buttons Enhancement --- */
.project-buttons {
    display: flex !important;
    flex-wrap: wrap !important;
    gap: 15px !important;
    margin-top: 30px !important;
}

.project-buttons a, .project-buttons button {
    display: inline-flex !important;
    align-items: center !important;
    justify-content: center !important;
    padding: 12px 24px !important;
    border-radius: 12px !important;
    font-weight: 600 !important;
    transition: all 0.3s ease !important;
    position: relative;
    overflow: hidden;
    z-index: 1;
    border: none !important;
    text-decoration: none !important;
    cursor: pointer;
}

.project-buttons a::after, .project-buttons button::after {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
    transition: all 0.4s ease;
    z-index: -1;
}

.project-buttons a:hover::after, .project-buttons button:hover::after {
    left: 100%;
}

.project-buttons a:hover, .project-buttons button:hover {
    transform: translateY(-3px) !important;
    box-shadow: 0 8px 20px rgba(0,0,0,0.3) !important;
}

/* Specific Button Colors */
.btn-primary { background: linear-gradient(135deg, #ffd700 0%, #ff9900 100%) !important; color: #1a1a1a !important; }
.btn-secondary { background: rgba(255,255,255,0.1) !important; color: #fff !important; border: 1px solid rgba(255,255,255,0.2) !important; }
.btn-intro { background: rgba(255, 215, 0, 0.1) !important; color: #ffd700 !important; border: 1px solid rgba(255,215,0,0.3) !important; }
.btn-green { background: linear-gradient(135deg, #00b09b 0%, #96c93d 100%) !important; color: #fff !important; }
.btn-orange { background: linear-gradient(135deg, #f12711 0%, #f5af19 100%) !important; color: #fff !important; }
.btn-purple { background: linear-gradient(135deg, #8E2DE2 0%, #4A00E0 100%) !important; color: #fff !important; }

/* --- 4. Club Section (Teaching Page) --- */
.club-section {
    background: linear-gradient(135deg, rgba(26,26,26,0.6) 0%, rgba(45,45,45,0.6) 100%) !important;
    border: 1px solid rgba(255,215,0,0.1) !important;
    border-radius: 24px !important;
    padding: 60px 40px !important;
    margin-top: 60px !important;
    box-shadow: inset 0 0 20px rgba(0,0,0,0.5) !important;
}

.club-section h2 {
    background: linear-gradient(135deg, #ffd700 0%, #ffaa00 100%) !important;
    -webkit-background-clip: text !important;
    -webkit-text-fill-color: transparent !important;
    font-size: 2.5rem !important;
    margin-bottom: 20px !important;
    text-align: center;
}

.club-intro {
    font-size: 1.1rem !important;
    line-height: 1.8 !important;
    color: #ccc !important;
    max-width: 800px !important;
    margin: 0 auto 40px auto !important;
    text-align: center;
}

.club-gallery {
    display: grid !important;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)) !important;
    gap: 30px !important;
    align-items: stretch !important;
}

.club-item {
    background: rgba(255, 255, 255, 0.05) !important;
    border-radius: 16px !important;
    padding: 20px !important;
    border: 1px solid rgba(255,255,255,0.1) !important;
    transition: transform 0.4s ease, box-shadow 0.4s ease !important;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.club-item:hover {
    transform: translateY(-8px) scale(1.02) !important;
    box-shadow: 0 15px 30px rgba(0,0,0,0.4), 0 0 15px rgba(255,215,0,0.2) !important;
    border-color: rgba(255,215,0,0.3) !important;
    background: rgba(255, 255, 255, 0.08) !important;
}

.club-img {
    border-radius: 12px !important;
    margin-bottom: 20px !important;
    box-shadow: 0 5px 15px rgba(0,0,0,0.3) !important;
    width: 100% !important;
    height: 200px !important;
    object-fit: cover !important;
}

.club-item h4 {
    font-size: 1.3rem !important;
    color: #ffd700 !important;
    margin-bottom: 15px !important;
    background: none !important;
}

.club-btn {
    margin-top: auto;
    width: 100%;
    padding: 10px !important;
    background: rgba(255, 215, 0, 0.1) !important;
    color: #ffd700 !important;
    border: 1px solid rgba(255,215,0,0.3) !important;
    border-radius: 8px !important;
    text-align: center !important;
    transition: all 0.3s ease !important;
}

.club-btn:hover {
    background: #ffd700 !important;
    color: #1a1a1a !important;
}

/* --- 5. Architecture Diagram (Frontend Page) --- */
.architecture-diagram {
    background: rgba(0, 0, 0, 0.2) !important;
    border-radius: 20px !important;
    padding: 40px !important;
    border: 1px solid rgba(0, 255, 255, 0.1) !important;
    box-shadow: inset 0 0 30px rgba(0,0,0,0.5) !important;
}

.arch-layer-inner {
    background: linear-gradient(135deg, rgba(255,255,255,0.05), rgba(255,255,255,0.01)) !important;
    border: 1px solid rgba(255,255,255,0.1) !important;
    border-radius: 16px !important;
    transition: all 0.3s ease !important;
}

.arch-layer-inner:hover {
    transform: translateY(-5px) !important;
    border-color: rgba(0, 255, 255, 0.4) !important;
    box-shadow: 0 10px 25px rgba(0, 255, 255, 0.1) !important;
}

.arch-box {
    background: rgba(0, 255, 255, 0.1) !important;
    color: #00ffff !important;
    border-bottom: 1px solid rgba(0, 255, 255, 0.2) !important;
    font-weight: 700 !important;
}

.arch-components .component {
    background: rgba(255, 255, 255, 0.05) !important;
    border: 1px solid rgba(255, 255, 255, 0.1) !important;
    transition: all 0.3s ease !important;
}

.arch-components .component:hover {
    background: rgba(0, 255, 255, 0.15) !important;
    border-color: rgba(0, 255, 255, 0.4) !important;
    transform: scale(1.05) !important;
}

.arch-arrow {
    color: rgba(0, 255, 255, 0.5) !important;
    text-shadow: 0 0 10px rgba(0, 255, 255, 0.3) !important;
    animation: arrowPulse 2s infinite !important;
}

@keyframes arrowPulse {
    0% { opacity: 0.3; transform: translateY(-3px); }
    50% { opacity: 1; transform: translateY(3px); }
    100% { opacity: 0.3; transform: translateY(-3px); }
}

/* Responsive Tweaks for new layout */
@media (max-width: 768px) {
    .project-card {
        padding: 25px !important;
    }
    .project-info h2 {
        font-size: 2rem !important;
    }
    .club-section {
        padding: 30px 20px !important;
    }
    .club-section h2 {
        font-size: 2rem !important;
    }
}
"""

with open(file_path, "a", encoding="utf-8") as f:
    f.write(css_to_append)

print("CSS enhancements appended successfully!")
