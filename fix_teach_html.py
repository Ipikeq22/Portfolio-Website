import os

file_path = r"c:\Users\ipike\OneDrive\桌面\作品集網站新點\Portfolio-Website\teach_project.html"

with open(file_path, "r", encoding="utf-8") as f:
    content = f.read()

# The current teach_project.html has:
#         <div class="project-container">
#             <!-- 專案展示區域 -->
#             <section class="project-showcase">
# ...
#             </section>
#         </div>    
#             
#             
#              <section class="project-showcase">
# ...
#             </section>

# We want it to be:
#         <div class="project-container">
#             <article class="project-card">
#                 <section class="project-showcase">
# ...
#                 </section>
#             </article>
#
#             <article class="project-card">
#                 <section class="project-showcase">
# ...
#                 </section>
#             </article>
#         </div>

# First, remove the early closing </div>
content = content.replace("        </div>    \n            \n            \n             <section class=\"project-showcase\">", "             <section class=\"project-showcase\">")

# Now wrap each <section class="project-showcase"> ... </section> in <article class="project-card"> ... </article>
# Since there are two, we can just replace them.

content = content.replace("            <!-- 專案展示區域 -->\n            <section class=\"project-showcase\">", "            <!-- 專案展示區域 -->\n            <article class=\"project-card\">\n            <section class=\"project-showcase\">")
# Close the first article
content = content.replace("                </div>\n            </section>\n             <section class=\"project-showcase\">", "                </div>\n            </section>\n            </article>\n\n            <article class=\"project-card\">\n            <section class=\"project-showcase\">")
# Close the second article and then close the project-container
content = content.replace("                </div>\n            </section>\n            \n\n        \n        \n        <!-- 高中社團區域 -->", "                </div>\n            </section>\n            </article>\n        </div>\n            \n\n        \n        \n        <!-- 高中社團區域 -->")

with open(file_path, "w", encoding="utf-8") as f:
    f.write(content)

print("Updated teach_project.html successfully!")
