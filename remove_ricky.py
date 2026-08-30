import os
import re

file_path = r"c:\Users\ipike\OneDrive\桌面\作品集網站新點\Portfolio-Website\graphic_design_page.html"

with open(file_path, "r", encoding="utf-8") as f:
    content = f.read()

# Remove the button
button_pattern = r'\s*<button class="category-btn[^>]*" onclick="filterCategory\(\'category-ricky\'\)"[^>]*>[\s\S]*?</button>'
content = re.sub(button_pattern, '', content)

# Remove the section
section_pattern = r'\s*<!-- 區塊2: 李奇英文 -->[\s\S]*?<!-- 區塊3: 高中作品 -->'
content = re.sub(section_pattern, '\n\n        <!-- 區塊3: 高中作品 -->', content)

with open(file_path, "w", encoding="utf-8") as f:
    f.write(content)

print("Removed Ricky English category button and section.")
