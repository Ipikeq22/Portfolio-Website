import os

file_path = r"c:\Users\ipike\OneDrive\桌面\作品集網站新點\Portfolio-Website\style.css"

with open(file_path, "r", encoding="utf-8") as f:
    content = f.read()

old_css = """/* --- 3. Buttons Enhancement --- */
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
.btn-purple { background: linear-gradient(135deg, #8E2DE2 0%, #4A00E0 100%) !important; color: #fff !important; }"""

new_css = """/* --- 3. Buttons Enhancement (Grid Cards) --- */
.project-buttons {
    display: grid !important;
    grid-template-columns: repeat(3, 1fr) !important;
    gap: 15px !important;
    margin-top: 30px !important;
    width: 100% !important;
}

@media (max-width: 600px) {
    .project-buttons {
        grid-template-columns: repeat(2, 1fr) !important;
    }
}

@media (max-width: 400px) {
    .project-buttons {
        grid-template-columns: 1fr !important;
    }
}

.project-buttons a, .project-buttons button {
    display: flex !important;
    flex-direction: column !important;
    align-items: center !important;
    justify-content: center !important;
    padding: 20px 10px !important;
    border-radius: 16px !important;
    font-weight: 600 !important;
    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) !important;
    position: relative;
    overflow: hidden;
    z-index: 1;
    text-decoration: none !important;
    cursor: pointer;
    backdrop-filter: blur(10px) !important;
    -webkit-backdrop-filter: blur(10px) !important;
    border: 1px solid rgba(255, 255, 255, 0.1) !important;
}

.project-buttons a .btn-icon, .project-buttons button .btn-icon {
    width: 40px !important;
    height: 40px !important;
    margin-bottom: 12px !important;
    margin-right: 0 !important;
    transition: transform 0.3s ease !important;
}

.project-buttons a:hover .btn-icon, .project-buttons button:hover .btn-icon {
    transform: scale(1.15) !important;
}

.project-buttons a::after, .project-buttons button::after {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.15), transparent);
    transition: all 0.5s ease;
    z-index: -1;
}

.project-buttons a:hover::after, .project-buttons button:hover::after {
    left: 100%;
}

.project-buttons a:hover, .project-buttons button:hover {
    transform: translateY(-5px) !important;
    box-shadow: 0 12px 25px rgba(0,0,0,0.4) !important;
}

/* Specific Glassmorphism Button Colors */
.btn-primary { background: rgba(255, 215, 0, 0.1) !important; color: #ffd700 !important; border-color: rgba(255,215,0,0.3) !important; }
.btn-primary:hover { background: rgba(255, 215, 0, 0.2) !important; box-shadow: 0 12px 25px rgba(0,0,0,0.4), 0 0 15px rgba(255,215,0,0.2) !important; }

.btn-secondary { background: rgba(255, 255, 255, 0.05) !important; color: #fff !important; border-color: rgba(255,255,255,0.2) !important; }
.btn-secondary:hover { background: rgba(255, 255, 255, 0.12) !important; }

.btn-intro { background: rgba(0, 255, 255, 0.05) !important; color: #00ffff !important; border-color: rgba(0,255,255,0.2) !important; }
.btn-intro:hover { background: rgba(0, 255, 255, 0.15) !important; box-shadow: 0 12px 25px rgba(0,0,0,0.4), 0 0 15px rgba(0,255,255,0.2) !important; }

.btn-green { background: rgba(0, 255, 128, 0.05) !important; color: #00ff80 !important; border-color: rgba(0,255,128,0.2) !important; }
.btn-green:hover { background: rgba(0, 255, 128, 0.15) !important; box-shadow: 0 12px 25px rgba(0,0,0,0.4), 0 0 15px rgba(0,255,128,0.2) !important; }

.btn-orange { background: rgba(255, 128, 0, 0.05) !important; color: #ff8000 !important; border-color: rgba(255,128,0,0.2) !important; }
.btn-orange:hover { background: rgba(255, 128, 0, 0.15) !important; box-shadow: 0 12px 25px rgba(0,0,0,0.4), 0 0 15px rgba(255,128,0,0.2) !important; }

.btn-purple { background: rgba(128, 0, 255, 0.05) !important; color: #b266ff !important; border-color: rgba(128,0,255,0.2) !important; }
.btn-purple:hover { background: rgba(128, 0, 255, 0.15) !important; box-shadow: 0 12px 25px rgba(0,0,0,0.4), 0 0 15px rgba(128,0,255,0.2) !important; }"""

if old_css in content:
    content = content.replace(old_css, new_css)
    with open(file_path, "w", encoding="utf-8") as f:
        f.write(content)
    print("Button CSS replaced successfully!")
else:
    print("Could not find the exact old CSS block. Replacing dynamically...")
    # fallback
    import re
    pattern = re.compile(r"/\* --- 3\. Buttons Enhancement ---\*/.*?(?=/\* --- 4\. Club Section)", re.DOTALL)
    # wait, my fallback regex is probably wrong due to exact comments. I'll just rely on exact match.
