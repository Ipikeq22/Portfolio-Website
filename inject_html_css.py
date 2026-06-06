import os

files_to_update = [
    r"c:\Users\ipike\OneDrive\桌面\作品集網站新點\Portfolio-Website\front_end_project.html",
    r"c:\Users\ipike\OneDrive\桌面\作品集網站新點\Portfolio-Website\teach_project.html"
]

style_block = """
    <!-- 強制按鈕置中修復 -->
    <style>
        .project-buttons {
            display: grid !important;
            grid-template-columns: repeat(3, 1fr) !important;
            gap: 15px !important;
            margin-top: 30px !important;
            width: 100% !important;
        }
        @media (max-width: 600px) {
            .project-buttons { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 400px) {
            .project-buttons { grid-template-columns: 1fr !important; }
        }

        .project-buttons a, .project-buttons button {
            display: flex !important;
            flex-direction: column !important;
            align-items: center !important;
            justify-content: center !important;
            text-align: center !important;
            padding: 20px 10px !important;
            width: 100% !important;
            box-sizing: border-box !important;
            margin: 0 !important;
        }

        .project-buttons a > span, .project-buttons button > span {
            display: block !important;
            width: 100% !important;
            text-align: center !important;
            margin: 0 auto !important;
            padding: 0 !important;
        }

        .project-buttons a > img.btn-icon, .project-buttons button > img.btn-icon {
            display: block !important;
            margin: 0 auto 12px auto !important;
            float: none !important;
            position: static !important;
            transform: none !important;
        }
        
        .project-buttons a:hover > img.btn-icon, .project-buttons button:hover > img.btn-icon {
            transform: scale(1.15) !important;
        }
    </style>
</head>"""

for file_path in files_to_update:
    if os.path.exists(file_path):
        with open(file_path, "r", encoding="utf-8") as f:
            content = f.read()
        
        # Remove old injected style if exists
        if "<!-- 強制按鈕置中修復 -->" in content:
            import re
            content = re.sub(r"<!-- 強制按鈕置中修復 -->.*?</style>\s*</head>", "</head>", content, flags=re.DOTALL)

        content = content.replace("</head>", style_block)
        
        with open(file_path, "w", encoding="utf-8") as f:
            f.write(content)
        print(f"Updated {os.path.basename(file_path)}")
    else:
        print(f"{os.path.basename(file_path)} not found")
