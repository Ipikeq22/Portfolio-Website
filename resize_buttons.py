import os
import re

files_to_update = [
    r"c:\Users\ipike\OneDrive\桌面\作品集網站新點\Portfolio-Website\front_end_project.html",
    r"c:\Users\ipike\OneDrive\桌面\作品集網站新點\Portfolio-Website\teach_project.html"
]

new_style_block = """
    <!-- 強制按鈕置中修復 -->
    <style>
        .project-buttons {
            display: flex !important;
            flex-wrap: wrap !important;
            justify-content: center !important;
            gap: 20px !important;
            margin-top: 30px !important;
            width: 100% !important;
        }

        .project-buttons a, .project-buttons button {
            display: flex !important;
            flex-direction: column !important;
            align-items: center !important;
            justify-content: center !important;
            text-align: center !important;
            padding: 15px !important;
            width: 120px !important;
            height: 120px !important;
            box-sizing: border-box !important;
            margin: 0 !important;
            border-radius: 16px !important;
        }

        .project-buttons a > span, .project-buttons button > span {
            display: block !important;
            width: 100% !important;
            text-align: center !important;
            margin: 0 auto !important;
            padding: 0 !important;
            font-size: 0.95rem !important;
            line-height: 1.3 !important;
        }

        .project-buttons a > img.btn-icon, .project-buttons button > img.btn-icon {
            display: block !important;
            width: 36px !important;
            height: 36px !important;
            margin: 0 auto 10px auto !important;
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
        
        # Replace the old style block
        if "<!-- 強制按鈕置中修復 -->" in content:
            content = re.sub(r"<!-- 強制按鈕置中修復 -->.*?</style>\s*</head>", new_style_block.strip(), content, flags=re.DOTALL)
            
            with open(file_path, "w", encoding="utf-8") as f:
                f.write(content)
            print(f"Updated {os.path.basename(file_path)}")
        else:
            print(f"Style block not found in {os.path.basename(file_path)}")
    else:
        print(f"{os.path.basename(file_path)} not found")
