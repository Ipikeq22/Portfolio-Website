// ============================================
// 多語言支援系統 (i18n)
// ============================================

/**
 * 翻譯資料庫
 * 包含網站所有頁面的中英文對照
 */
const translations = {
  zh: {
    // Header 區塊
    header: {
      title: "Gary's Portfolio",
      contactBtn: "聯絡我",
      menuLabel: "開啟選單",
      closeLabel: "關閉選單",
    },

    // 導航選單
    nav: {
      home: "首頁",
      intro: "個人簡介",
      graphic: "平面設計",
      frontend: "前端設計",
      teaching: "教學設計",
      business: "商品設計",
      graduation: "畢業專題 Tasksnap",
      contact: "聯絡我",
      videoEdit: "影音剪輯",
    },

    // 首頁
    homepage: {
      greeting: "Hello, I am Gary",
      description: "一位快爆肝的跨領域設計師😂",
      graphicDesign: "平面設計",
      frontendDesign: "前端設計",
      teachingDesign: "教學設計",
      productDesign: "商品設計",
      graduationProject: "畢業專題",
      videoEditing: "影音剪輯",
    },

    // 個人簡介頁面
    introduction: {
      title: "Gary",
      skillsTitle: "專長領域",
      softwareTitle: "擅長軟體",
      skills: {
        graphic: "平面 / 數位設計",
        uiux: "UI / UX 設計",
        video: "影音剪輯",
        product: "產品開發設計",
        modeling: "3D建模渲染",
        modelingSub: "(列印略懂)",
        marketing: "數位行銷",
        teaching: "電腦繪圖設計教學",
        game: "遊戲開發",
        gameSub: "(企劃 / 美術)",
        frontend: "數位前端開發",
        vibeCoding: "Vibe Coding",
      },
      software: {
        photoshop: "Adobe Photoshop",
        illustrator: "Adobe Illustrator",
        powerDirector: "PowerDirector",
        python: "Python",
        web: "Web語言 (HTML + CSS + JavaScript)",
        figma: "Figma",
        office: "Office 軟體",
        sketchup: "SketchUp",
        capcut: "剪映",
      },
      introSection: {
        title: "自我介紹",
        content:
          "我是 Gary，一位跨領域設計師，我高中就讀的是廣告設計科，大學就讀的是資訊管理系，我會在這個作品集裡講述我從高中到現在的作品，參與過的專案以及工作經驗",
      },
      educationSection: {
        title: "學歷",
        highSchool: "國立北斗高級家事商業職業學校",
        highSchoolDept: "廣告設計科",
        university: "元培醫事科技大學",
        universityDept: "資訊管理系",
      },
      workSection: {
        title: "工作經驗",
        job1Title: "營隊講師 / 兼職行政美編",
        job1Time: "大三上 ~ 現今",
        job1Company: "核果資訊學苑 - 新竹校",
        job1Detail:
          "兼職行政美編 : 負責官方FB，Line圖文行銷的設計，並接待來電或現場的客人\n營隊講師 : 自行研發教案和設計教具並提案",
        job2Title: "兼職美編",
        job2Time: "大二下 ~ 現今",
        job2Company: "李奇英文 - 新竹分校(原:華興補習班)",
        job2Detail: "傳統印刷媒體的A4招生DM設計",
        job3Title: "3D列印社 - 社團老師",
        job3Time: "大二下 ~ 大三下",
        job3Company: "私立義民高級中學",
        job3Detail: "自行設計教案，並於每學期固定社課時間教書",
        job4Title: "自由接案",
        job4Time: "2021年 ~ 現今",
        job4Company: "個人",
        job4Detail:
          "提供設計諮詢、個人案件(專長領域所寫的內容)、教學或專案式合作。",
      },
      contactSection: {
        title: "聯絡方式",
        email: "✉️ ipike388@gmail.com",
      },
    },

    // 平面設計頁面
    graphicDesign: {
      title: "平面設計作品",
      company1: "單位 : 核果資訊學苑 - 新竹校",
      company2: "單位: 李奇英文-新竹分校",
      highSchoolWorks: "高中作品",
      collegeWorks: "大學接案作品",
      project1: {
        title: "核果資訊學苑 - 2025暑期夏令營招生dm設計",
        desc: "透過鮮豔的色彩搭配和活潑的版面設計，吸引家長和學生的注意力，有效傳達夏令營的豐富內容和學習樂趣。",
      },
      project2: {
        title: "核果資訊學苑 -秋季班免費體驗課招生圖文設計",
        desc: "以溫暖的秋季色調為主軸，搭配清晰的課程資訊排版，讓家長能快速了解免費體驗課的內容和報名方式。",
      },
      project3: {
        title: "核果資訊學苑 -2025十月連假招生慶祝圖文",
        desc: "配合十月連假的節慶氛圍，運用慶祝元素和優惠訊息，創造吸引人的社群媒體宣傳內容。",
      },
      project4: {
        title: "核果資訊學苑 -2026寒令營招生圖文",
        desc: "寒假開設的營隊，營隊內容和課表分開，上傳到FB或官方Line推廣招生",
      },
      project5: {
        title:
          "核果資訊學苑 -2026冬季全日課程 : Minecraft：創客設計大挑戰 招生海報",
        desc: "寒假開設的營隊，營隊內容和課表分開，上傳到FB或官方Line推廣招生",
      },
      project6: {
        title: "招生DM設計",
      },
      highSchool1: {
        title: "歷史課課堂作業海報設計-無核家園",
        desc: "高中時期為學校課堂作業設計的宣傳海報，運用鮮明的色彩和活潑的版面設計吸引學生目光。",
      },
      highSchool2: {
        title: "歐嘉烘焙坊2020中秋DM設計",
        desc: "讓客戶了解月餅的售價和優惠組合，以及訂購資訊",
      },
      highSchool3: {
        title: "丹雲早午餐 logo設計",
        desc: "這個logo展現了傳統中國書法風格，並且在店名的左邊加上紅色印泥樣式的蓋章已加強中式風格，而環繞的八條線則是代表著中式傳統喜餅，象徵著進來店裡吃飯的客人可以開心的享受美食和得到滿足",
      },
      highSchool4: {
        title: "印刷課課堂作業\n自訂主題圖文編排",
        desc: "這張海報的主題，我選用的是我喜歡的[花生漫畫]，背景使用花生漫畫早期的水墨黑白漫畫，降低他的透明度以凸顯泡泡裡的每個漫畫中要角色",
      },
      highSchool5: {
        title: "印刷課課堂作業\n介紹超現實主義",
        desc: "這張海報我運用了Ps的後製修圖技術去襯托出超現實主義的感覺，在文字和元件的編排上則是使用以拉去做排版",
      },
      college1: {
        title: "歐嘉烘焙坊2023菜單設計",
        desc: "這張菜單的介紹了店裡有哪些美食可以購買並選擇擇自己喜歡的口味",
      },
      college2: {
        title: "白平衡 - 價格收費表設計提案",
        desc: "雖然最後對方沒有採用我的提案，但畢竟我也用心設計了，就保留了下來🤣",
      },
      college3: {
        title: "大四畢業專題 - 成果展覽活動邀請單",
        desc: "結果那天只有系上老師來看😥😥😥，我設計這張時花很多心思ㄟ😭",
      },
    },

    // 前端設計頁面
    frontendDesign: {
      title: "前端設計作品",
      projectTitle: "Shuttle 輔信 P55U 購物頁面",
      projectTime: "大三暑假",
      projectSubtitle: "股票代號: 2405 | 前端設計練習專案",
      viewWebsite: "查看網站",
      sourceCode: "原始代碼",
      introTitle: "專案介紹",
      introContent:
        "本專案為 Shuttle 輔信公司 P55U 產品的購物頁面設計練習，專注於提供優質的使用者體驗和現代化的介面設計。",
      designHighlights: "設計重點",
      designPoint1: "響應式設計，支援多裝置瀏覽",
      designPoint2: "直觀的購物流程設計",
      designPoint3: "現代化的視覺風格",
      designPoint4: "優化的使用者互動體驗",
      techFeatures: "技術特色",
      techPoint1: "HTML5 語意化標籤",
      techPoint2: "CSS3 動畫效果",
      techPoint3: "JavaScript 互動功能",
      techPoint4: "跨瀏覽器相容性",
      architectureTitle: "開發架構圖",
      frontendLayer: "前端介面層",
      interactionLayer: "互動邏輯層",
      dataLayer: "資料處理層",
      html5: "HTML5",
      css3: "CSS3",
      javascript: "JavaScript",
      eventHandling: "事件處理",
      formValidation: "表單驗證",
      animation: "動畫效果",
      cartLogic: "購物車邏輯",
      productInfo: "商品資訊",
      userData: "使用者資料",
    },

    // 教學設計頁面
    teachingDesign: {
      title: "教學設計作品",
      project1Title: "Stun 史丹創藝工坊：從素描到3D的創意之旅",
      project1Time: "大三升大四暑假",
      project1Desc: "在大三這一年，我開始嘗試一些有挑戰性的工作，於是我來到核果資訊學苑應徵暑假營隊講師的工作，教材和講義都是我自己從頭到尾獨立設計，連續5天的教學，讓我得到非常多寶貴的經驗",
      handoutPdf: "教學實體講義(pdf)",
      courseContent: "課程內容",
      trialPresentation: "體驗課簡報(免費試聽)",
      clubTitle: "義民高中社團: 3D列印社",
      clubTime: "大二下~大三上",
      clubDesc: "在大二下的時候，學長來問我說有沒有興趣去竹北教高中生Sketchup，因為上一位擔任的學姊不繼續教了，當時我聽到的當下滿猶豫的，因為我從來沒當過老師，也怕自己對這套軟體不夠熟悉，但是機會來了我想把握住，於是我抱著挑戰看看和緊張的心情去教書，謝謝學長當時的介紹，讓我有機會擔任老師的角色並重新拾起我高職學的圖學技能",
      sophomore2nd: "大二下",
      junior1st: "大三上",
      junior2nd: "大三下",
      classSlides: "上課簡報",
    },

    // 商品設計頁面
    businessDesign: {
      title: "商品設計作品",
      project1Title: "創意創新通識課期末作業",
      project1Time: "大二下",
      project1Desc: "這個作品是大二時通識課的期末作業，作業目標是要設計出一項產品並製作它的創業計畫簡報，這個作業從商品設計到簡報製作幾乎都是我一手包辦\n我用Sketchup 建出了產品的模型，用Ai生城市工具的輔助去寫出這個產品的企劃案",
      proposalPpt: "企劃案簡報",
      project2Title: "遊戲專案:Protect farm 農場保衛戰",
      project2Time: "高二下",
      project2Desc: "高中的時候和線上網友們組成團隊一起開發的網頁遊戲，主題是關於農場裡的蔬菜反抗要侵害他們的種族的塔防遊戲，我在這項專案裡面主要負責的工作是,美術和企劃，而最後因為某些因素，團隊解散，算是未完成的半成品",
      viewGameObjects: "查看遊戲物件",
      watchGameplay: "觀看遊戲遊玩影片",
      project3Title: "第六屆台灣科學節 - 核果資訊學苑攤位\n現場Minecraft體驗遊戲設計",
      project3Time: "大四上",
      project3Desc: "本遊戲由核果老闆邀請我設計，融合 Minecraft 遊戲元素與科學探索精神，打造「紫水晶冒險之路」現場闖關體驗。玩家將在操控鍵盤和滑鼠中通過岩漿跑酷、怪物走廊、水池等任務，並於最後啟動機關獲得紫水晶獎勵。以遊戲化方式讓孩子在玩樂之中培養觀察力、邏輯判斷與反應能力。",
      gameIntro: "遊戲介紹",
      gameVideo: "遊戲影片",
    },

    // 畢業專題頁面
    graduationProject: {
      title: "Tasksnap",
      introTitle: "專題介紹",
      introDesc: "《Tasksnap》專題自大二的暑假開始構想實做到大四上完成，致力於打造專屬學生的接案與任務平台。作品包含以 Figma 製作的 App UI 原型、以 Streamlit 建構的官方網站，以及 HTML 製作的互動小遊戲《Sweet Cookie Bite》。從設計思考到品牌體驗，展現團隊在介面設計、系統開發與互動創意上的完整實踐與整合成果",
      resultsTitle: "專題研發的3個成果：",
      result1Title: "Figma Ui Prototype 開發",
      result1Btn: "觀看操作影片",
      result2Title: "Python Streamlit 官方網站",
      result2Btn: "查看網站",
      result3Title: "HTML 互動小遊戲",
      result3Btn: "查看網站",
      ratioTitle: "個人在專題中開發占比多少（數據圓圈）：",
      ratio1Title: "FIGMA UI Prototype",
      ratio1Desc: "我 80% 其餘組員 20%",
      ratio2Title: "官方網站和互動小遊戲",
      ratio2Desc: "我 100%",
      tab1Title: "Figma Ui Prototype 開發",
      tab2Title: "Python Streamlit 官方網站",
      tab3Title: "HTML 互動小遊戲",
      motivationTitle: "開發動機",
      howToDevelop: "如何開發",
      featuresTitle: "功能特色",
      motivation1: "觀察到學生族群在接案與任務協作平台上常面臨操作複雜、流程不清與權益保障不足的問題，因此希望打造一款以學生為核心、操作直覺且安全的任務媒合平台。",
      develop1: "使用 Figma 製作互動式 UI 原型，從流程設計、版面配置到元件互動皆模擬真實 App 體驗，並透過團隊協作完成首頁、接案區、聊天室等主要頁面。",
      feature1_1: "首頁、動態牆、接案區、聊天室四大主頁面",
      feature1_2: "清晰的接案流程導向：接案 → 回覆 → 完成 → 回饋",
      feature1_3: "真實身分驗證與法律條款確認保障用戶",
      feature1_4: "深藍主色調營造科技與信任感",
      feature1_5: "支援好友互動與小遊戲模組",
      motivation2: "為了展示 Tasksnap 品牌形象與專案理念，設計一個整合資訊、互動與行銷的官方入口網站，讓外界能快速了解平台特色與開發團隊。",
      develop2: "使用 Python 的 Streamlit 框架開發，以簡潔快速的方式建立網站雛形，結合互動元件、回饋表單與即時公告功能，作為原型展示平台。",
      feature2_1: "首頁呈現專案理念與行銷標語",
      feature2_2: "包含功能介紹、團隊介紹、人才招募、贊助我們等頁面",
      feature2_3: "設有意見回饋表單，蒐集使用者體驗",
      feature2_4: "最新消息與更新公告即時呈現",
      feature2_5: "網站風格延續 App 主題色，維持品牌一致性",
      motivation3: "希望在展場與平台上增加互動趣味性，透過小遊戲傳遞「努力、幸運、微笑」的品牌精神，讓玩家在輕鬆氛圍中體驗 Tasksnap 的理念。",
      develop3: "以 HTML、CSS、JavaScript 製作簡易互動遊戲，結合動畫、音效與隨機機制，玩家點擊餅乾即可獲得幸運祝福或任務提示。",
      feature3_1: "點擊幸運餅乾觸發隨機結果",
      feature3_2: "支援桌機與手機雙平台遊玩",
      feature3_3: "搭配音效與動畫增加沉浸感",
      feature3_4: "結合品牌主題色與世界觀設計",
      feature3_5: "展場互動：掃描 QR Code 即可遊玩並打卡分享",
    },

    // 影音剪輯頁面
    videoEditing: {
      title: "影音剪輯作品",
      project1Title: "核果資訊學苑 - 2025全國科展花絮剪輯",
      project1Desc: "這是我為核果資訊學苑製作的2025全國科展花絮影片。影片中包含了活動片段、透過精心的剪輯和音效設計，我希望能夠呈現出活動的熱情與活力，讓觀眾感受到科展的魅力。",
      watchVideo: "觀看影片",
    },

    // 聯絡我頁面

    contactPage: {
      title: "聯絡我",
      projectInquiry: "案件洽詢",
      collaboration: "合作邀約",
    },

    // Footer
    footer: {
      copyright: "© 2025 Gary's Portfolio",
      email: "Email : ipike388@gmail.com",
    },
  },

  en: {
    // Header Section
    header: {
      title: "Gary's Portfolio",
      contactBtn: "Contact Me",
      menuLabel: "Open Menu",
      closeLabel: "Close Menu",
    },

    // Navigation Menu
    nav: {
      home: "Home",
      intro: "About Me",
      graphic: "Graphic Design",
      frontend: "Frontend Development",
      teaching: "Teaching Design",
      business: "Product Design",
      graduation: "Graduation Project Tasksnap",
      contact: "Contact Me",
      videoEdit: "Video Editing",
    },

    // Homepage
    homepage: {
      greeting: "Hello, I am Gary",
      description: "A cross-disciplinary designer working overtime😂",
      graphicDesign: "Graphic Design",
      frontendDesign: "Frontend Development",
      teachingDesign: "Teaching Design",
      productDesign: "Product Design",
      graduationProject: "Graduation Project",
      videoEditing: "Video Editing",
    },

    // Introduction Page
    introduction: {
      title: "Gary",
      skillsTitle: "Expertise",
      softwareTitle: "Software Skills",
      skills: {
        graphic: "Graphic / Digital Design",
        uiux: "UI / UX Design",
        video: "Video Editing",
        product: "Product Development Design",
        modeling: "3D Modeling & Rendering",
        modelingSub: "(3D Printing basics)",
        marketing: "Digital Marketing",
        teaching: "Computer Graphics Design Teaching",
        game: "Game Development",
        gameSub: "(Planning / Art)",
        frontend: "Frontend Development",
        vibeCoding: "Vibe Coding",
      },
      software: {
        photoshop: "Adobe Photoshop",
        illustrator: "Adobe Illustrator",
        powerDirector: "PowerDirector",
        python: "Python",
        web: "Web Languages (HTML + CSS + JavaScript)",
        figma: "Figma",
        office: "Office Suite",
        sketchup: "SketchUp",
        capcut: "CapCut",
      },
      introSection: {
        title: "About Me",
        content:
          "I am Gary, a cross-disciplinary designer. I studied Advertising Design in high school and Information Management in university. In this portfolio, I will showcase my works, projects, and work experience from high school to the present.",
      },
      educationSection: {
        title: "Education",
        highSchool:
          "National Beidou Vocational High School of Home Economics & Commerce",
        highSchoolDept: "Department of Advertising Design",
        university: "Yuanpei University of Medical Technology",
        universityDept: "Department of Information Management",
      },
      workSection: {
        title: "Work Experience",
        job1Title: "Camp Instructor / Part-time Admin Designer",
        job1Time: "Junior Year ~ Present",
        job1Company: "Nuts Institute - Hsinchu Campus",
        job1Detail:
          "Part-time Admin Designer: Responsible for official Facebook and LINE graphic marketing design, and reception of phone calls and walk-in customers\nCamp Instructor: Independently develop lesson plans and design teaching materials",
        job2Title: "Part-time Graphic Designer",
        job2Time: "Sophomore ~ Present",
        job2Company:
          "Richie English - Hsinchu Branch",
        job2Detail: "Traditional print media A4 enrollment DM design",
        job3Title: "3D Printing Club - Instructor",
        job3Time: "Sophomore ~ Junior Year",
        job3Company: "Private Yimin Senior High School",
        job3Detail:
          "Design lesson plans and teach at regular club sessions each semester",
        job4Title: "Freelancer",
        job4Time: "2021 ~ Present",
        job4Company: "Self-employed",
        job4Detail:
          "Provide design consulting, personal projects (areas listed in expertise), teaching, or project-based collaboration.",
      },
      contactSection: {
        title: "Contact Information",
        email: "✉️ ipike388@gmail.com",
      },
    },

    // Graphic Design Page
    graphicDesign: {
      title: "Graphic Design Works",
      company1: "Company: Nuts Institute - Hsinchu Campus",
      company2: "Company: Lichi English - Hsinchu Branch",
      highSchoolWorks: "High School Works",
      collegeWorks: "College Freelance Works",
      project1: {
        title:
          "Nuts Institute - 2025 Summer Camp Enrollment DM Design",
        desc: "Through vibrant color combinations and lively layout design, it attracts the attention of parents and students, effectively conveying the rich content and learning fun of the summer camp.",
      },
      project2: {
        title:
          "Nuts Institute - Fall Semester Free Trial Class Enrollment Graphics Design",
        desc: "Using warm autumn tones as the main theme, paired with clear course information layout, allowing parents to quickly understand the content and registration method of the free trial class.",
      },
      project3: {
        title:
          "Nuts Institute - 2025 October Holiday Enrollment Celebration Graphics",
        desc: "Coordinating with the festive atmosphere of the October holiday, using celebration elements and promotional messages to create attractive social media promotional content.",
      },
      project4: {
        title:
          "Nuts Institute - 2026 Winter Camp Enrollment Graphics",
        desc: "Winter holiday camp, with camp content and schedule separate, uploaded to FB or official LINE for enrollment promotion",
      },
      project5: {
        title:
          "Nuts Institutemy - 2026 Winter Full-Day Course: Minecraft: Maker Design Challenge Enrollment Poster",
        desc: "Winter holiday camp, with camp content and schedule separate, uploaded to FB or official LINE for enrollment promotion",
      },
      project6: {
        title: "Richie English DM Design",
      },
      highSchool1: {
        title: "History Class Assignment Poster Design - Nuclear-Free Homeland",
        desc: "Promotional poster designed for school class assignment during high school, using bright colors and lively layout design to attract student attention.",
      },
      highSchool2: {
        title: "Ojia Bakery 2020 Mid-Autumn Festival DM Design",
        desc: "Let customers understand the price and preferential combinations of mooncakes, as well as ordering information",
      },
      highSchool3: {
        title: "Danyun Brunch Logo Design",
        desc: "This logo showcases a traditional Chinese calligraphy style, with a red seal stamp added to the left of the store name to enhance the Chinese style. The eight surrounding lines represent traditional Chinese wedding cookies, symbolizing that customers coming to dine can happily enjoy food and be satisfied",
      },
      highSchool4: {
        title: "Printing Class Assignment\nCustom Theme Graphic Layout",
        desc: "For the theme of this poster, I chose my favorite [Peanuts Comics]. The background uses early ink-wash black and white comics from Peanuts, with reduced transparency to highlight each main character in the bubbles",
      },
      highSchool5: {
        title: "Printing Class Assignment\nIntroducing Surrealism",
        desc: "For this poster, I used Photoshop's post-processing retouching techniques to bring out the feeling of surrealism. For text and element layout, I used Illustrator for typesetting",
      },
      college1: {
        title: "Ojia Bakery 2023 Menu Design",
        desc: "This menu introduces what delicacies can be purchased in the store and allows customers to choose their favorite flavors",
      },
      college2: {
        title: "White Poise - Price List Design Proposal",
        desc: "Although the client didn't adopt my proposal in the end, I still put my heart into designing it, so I kept it 🤣",
      },
      college3: {
        title: "Senior Year Graduation Project - Exhibition Event Invitation",
        desc: "In the end, only department professors came to see it 😥😥😥, I put a lot of thought into designing this 😭",
      },
    },

    // Frontend Design Page
    frontendDesign: {
      title: "Frontend Development Works",
      projectTitle: "Shuttle P55U Shopping Page",
      projectTime: "Junior Summer",
      projectSubtitle: "TW Stock Code: 2405 | Frontend Design Practice Project",
      viewWebsite: "View Website",
      sourceCode: "Source Code",
      introTitle: "Project Introduction",
      introContent:
        "This project is a shopping page design practice for Shuttle's P55U product, focusing on providing excellent user experience and modern interface design.",
      designHighlights: "Design Highlights",
      designPoint1: "Responsive design, supports multiple devices",
      designPoint2: "Intuitive shopping process design",
      designPoint3: "Modern visual style",
      designPoint4: "Optimized user interaction experience",
      techFeatures: "Technical Features",
      techPoint1: "HTML5 semantic tags",
      techPoint2: "CSS3 animation effects",
      techPoint3: "JavaScript interactive functions",
      techPoint4: "Cross-browser compatibility",
      architectureTitle: "Development Architecture",
      frontendLayer: "Frontend Interface Layer",
      interactionLayer: "Interaction Logic Layer",
      dataLayer: "Data Processing Layer",
      html5: "HTML5",
      css3: "CSS3",
      javascript: "JavaScript",
      eventHandling: "Event Handling",
      formValidation: "Form Validation",
      animation: "Animation Effects",
      cartLogic: "Shopping Cart Logic",
      productInfo: "Product Information",
      userData: "User Data",
    },

    // Teaching Design Page
    teachingDesign: {
      title: "Teaching Design Works",
      project1Title: "Stun Creative Workshop: A Creative Journey from Sketch to 3D",
      project1Time: "Junior to Senior Summer",
      project1Desc: "In my junior year, I started trying some challenging jobs. I came to Nuts Institute to apply for a summer camp instructor position. The teaching materials and handouts were all independently designed by me from start to finish. Five consecutive days of teaching gave me a lot of valuable experience.",
      handoutPdf: "Teaching Materials (PDF)",
      courseContent: "Course Content",
      trialPresentation: "Trial Class Presentation (Free Trial)",
      clubTitle: "Yimin High School Club: 3D Printing Club",
      clubTime: "Sophomore 2nd Semester ~ Junior 1st Semester",
      clubDesc: "In my sophomore second semester, a senior asked me if I was interested in teaching SketchUp to high school students in Zhubei. The previous instructor had stopped teaching. I was hesitant because I had never been a teacher and was worried I wasn't familiar enough with the software. But I wanted to seize the opportunity, so I went to teach with a challenging and nervous mindset. Thanks to my senior for the introduction, which gave me the opportunity to play the role of a teacher and pick up the technical drawing skills I learned in vocational high school.",
      sophomore2nd: "Sophomore 2nd Semester",
      junior1st: "Junior 1st Semester",
      junior2nd: "Junior 2nd Semester",
      classSlides: "Class Slides",
    },

    // Business Design Page
    businessDesign: {
      title: "Product Design Works",
      project1Title: "Creative Innovation General Education Final Project",
      project1Time: "Sophomore 2nd Semester",
      project1Desc: "This work is the final project for a general education course in my sophomore year. The goal was to design a product and create a business plan presentation. I handled almost everything from product design to presentation production.\nI used SketchUp to build the product model and used AI-generated writing tools to help write the product proposal.",
      proposalPpt: "Business Proposal Presentation",
      project2Title: "Game Project: Protect Farm - Farm Defense Battle",
      project2Time: "Sophomore 2nd Semester (High School)",
      project2Desc: "During high school, I formed a team with online friends to develop a web game. The theme is about vegetables in a farm rebelling against the race that wants to harm them - a tower defense game. My main responsibilities in this project were art and planning. Eventually, for various reasons, the team disbanded, and it became an unfinished semi-finished product.",
      viewGameObjects: "View Game Objects",
      watchGameplay: "Watch Gameplay Video",
      project3Title: "6th Taiwan Science Festival - Nuts Institute Booth\nOnsite Minecraft Experience Game Design",
      project3Time: "Senior 1st Semester",
      project3Desc: "This game was designed at the invitation of the Nuts Institute boss, integrating Minecraft game elements with the spirit of scientific exploration to create the 'Amethyst Adventure Path' on-site challenge experience. Players will navigate through lava parkour, monster corridors, water pools, and other tasks using keyboard and mouse controls, and finally activate mechanisms to obtain amethyst rewards. This gamified approach cultivates children's observation, logical judgment, and reaction abilities while playing.",
      gameIntro: "Game Introduction",
      gameVideo: "Game Video",
    },

    // Graduation Project Page
    graduationProject: {
      title: "Tasksnap",
      introTitle: "Project Introduction",
      introDesc: "The 'Tasksnap' project started from the conception in the summer of sophomore year to completion in the first semester of senior year, dedicated to creating a task platform exclusively for students. The work includes an App UI prototype made with Figma, an official website built with Streamlit, and an interactive mini-game 'Sweet Cookie Bite' made with HTML. From design thinking to brand experience, it demonstrates the team's complete practice and integration in interface design, system development, and interactive creativity.",
      resultsTitle: "Three Development Outcomes:",
      result1Title: "Figma UI Prototype Development",
      result1Btn: "Watch Demo Video",
      result2Title: "Python Streamlit Official Website",
      result2Btn: "View Website",
      result3Title: "HTML Interactive Mini-Game",
      result3Btn: "View Website",
      ratioTitle: "Personal Development Contribution (Data Circles):",
      ratio1Title: "FIGMA UI Prototype",
      ratio1Desc: "Me 80%, Other Team Members 20%",
      ratio2Title: "Official Website and Interactive Mini-Game",
      ratio2Desc: "Me 100%",
      tab1Title: "Figma UI Prototype Development",
      tab2Title: "Python Streamlit Official Website",
      tab3Title: "HTML Interactive Mini-Game",
      motivationTitle: "Development Motivation",
      howToDevelop: "How to Develop",
      featuresTitle: "Features",
      motivation1: "Observing that student groups often face complex operations, unclear processes, and insufficient rights protection on freelance and task collaboration platforms, we hope to create a student-centered, intuitive, and secure task matching platform.",
      develop1: "Create interactive UI prototype using Figma, simulating real App experience from flow design, layout to component interaction, and collaboratively complete main pages including homepage, job zone, and chat room.",
      feature1_1: "Four main pages: homepage, feed, job zone, and chat room",
      feature1_2: "Clear job process: Accept → Reply → Complete → Feedback",
      feature1_3: "Real identity verification and legal terms confirmation to protect users",
      feature1_4: "Deep blue theme creates a sense of technology and trust",
      feature1_5: "Support friend interaction and mini-game modules",
      motivation2: "To showcase the Tasksnap brand image and project concept, design an official entry website that integrates information, interaction, and marketing, allowing the outside world to quickly understand platform features and development team.",
      develop2: "Develop using Python's Streamlit framework, quickly build website prototype in a simple way, combine interactive components, feedback forms, and real-time announcement functions as a prototype display platform.",
      feature2_1: "Homepage presents project concept and marketing slogans",
      feature2_2: "Includes function introduction, team introduction, talent recruitment, sponsor us pages",
      feature2_3: "Feedback form to collect user experience",
      feature2_4: "Latest news and update announcements displayed in real-time",
      feature2_5: "Website style continues App theme colors, maintaining brand consistency",
      motivation3: "Hope to add interactive fun at exhibitions and platforms, conveying 'effort, luck, smile' brand spirit through mini-games, allowing players to experience Tasksnap's concept in a relaxed atmosphere.",
      develop3: "Create simple interactive game with HTML, CSS, JavaScript, combining animation, sound effects, and random mechanisms. Players click cookies to get lucky blessings or task tips.",
      feature3_1: "Click lucky cookie to trigger random results",
      feature3_2: "Support both desktop and mobile platforms",
      feature3_3: "Sound effects and animations enhance immersion",
      feature3_4: "Combined with brand theme colors and worldview design",
      feature3_5: "Exhibition interaction: Scan QR Code to play and check-in share",
    },

    // Video Editing Page
    videoEditing: {
      title: "Video Editing Works",
      project1Title: "Nuts Institute - 2025 National Science Fair Highlights",
      project1Desc: "This is a video I made for Nuts Institute documenting the 2025 National Science Fair. The video includes event clips. Through careful editing and sound design, I hope to present the enthusiasm and vitality of the event and let the audience feel the charm of the science fair.",
      watchVideo: "Watch Video",
    },

    // Contact Page

    contactPage: {
      title: "Contact Me",
      projectInquiry: "Project Inquiry",
      collaboration: "Collaboration Invitation",
    },

    // Footer
    footer: {
      copyright: "© 2025 Gary's Portfolio",
      email: "Email: ipike388@gmail.com",
    },
  },
};

/**
 * 當前語言設定
 * 優先從 localStorage 讀取,若無則預設為中文
 */
let currentLang = localStorage.getItem("preferredLanguage") || "zh";

/**
 * 切換語言函數
 * @param {string} lang - 語言代碼 ('zh' 或 'en')
 */
function switchLanguage(lang) {
  if (lang !== "zh" && lang !== "en") {
    console.error("Invalid language code:", lang);
    return;
  }

  currentLang = lang;
  localStorage.setItem("preferredLanguage", lang);
  updatePageContent();
  updateLanguageButtons();

  // 更新 HTML lang 屬性
  document.documentElement.lang = lang === "zh" ? "zh-Hant" : "en";
}

/**
 * 更新頁面內容
 * 根據當前語言更新所有帶有 data-i18n 屬性的元素
 */
function updatePageContent() {
  // 處理一般的 data-i18n 元素
  const elements = document.querySelectorAll("[data-i18n]");

  elements.forEach((element) => {
    const key = element.getAttribute("data-i18n");
    const translation = getTranslation(key);

    if (translation) {
      // 檢查是否為特殊屬性 (如 placeholder, aria-label 等)
      const attr = element.getAttribute("data-i18n-attr");

      if (attr) {
        // 只更新指定的屬性，不要更動元素內容
        element.setAttribute(attr, translation);
      } else {
        // 只有在沒有 data-i18n-attr 時才更新 textContent
        // 這樣可以避免清空有子元素的元素（如漢堡按鈕）
        element.textContent = translation;
      }
    } else {
      console.warn(`Translation not found for key: ${key}`);
    }
  });

  // 處理只有 data-i18n-key 的元素（只更新屬性，不更新內容）
  const attrOnlyElements = document.querySelectorAll("[data-i18n-key][data-i18n-attr]:not([data-i18n])");
  
  attrOnlyElements.forEach((element) => {
    const key = element.getAttribute("data-i18n-key");
    const attr = element.getAttribute("data-i18n-attr");
    const translation = getTranslation(key);

    if (translation && attr) {
      element.setAttribute(attr, translation);
    } else if (!translation) {
      console.warn(`Translation not found for key: ${key}`);
    }
  });
}

/**
 * 根據 key 路徑取得翻譯內容
 * @param {string} key - 翻譯 key (例如: "header.title")
 * @returns {string|null} 翻譯內容或 null
 */
function getTranslation(key) {
  const keys = key.split(".");
  let translation = translations[currentLang];

  for (const k of keys) {
    if (translation && translation[k] !== undefined) {
      translation = translation[k];
    } else {
      return null;
    }
  }

  return translation;
}

/**
 * 更新語言切換按鈕/選單狀態
 */
function updateLanguageButtons() {
  // 更新下拉選單的選中狀態
  const selector = document.getElementById('languageSelector');
  if (selector) {
    selector.value = currentLang;
  }
  
  // 為了向後兼容，也更新按鈕狀態（如果存在）
  const buttons = document.querySelectorAll(".lang-flag");
  buttons.forEach((button) => {
    const lang = button.getAttribute("data-lang");
    if (lang === currentLang) {
      button.classList.add("active");
    } else {
      button.classList.remove("active");
    }
  });
}

/**
 * 初始化語言系統
 * 在 DOM 載入完成後自動執行
 */
function initLanguageSystem() {
  // 設定初始語言
  updatePageContent();
  updateLanguageButtons();

  // 綁定下拉選單事件
  const languageSelector = document.getElementById('languageSelector');
  if (languageSelector) {
    languageSelector.addEventListener('change', (e) => {
      switchLanguage(e.target.value);
    });
  }

  // 為了向後兼容，也綁定按鈕事件（如果存在）
  const languageButtons = document.querySelectorAll(".lang-flag");
  languageButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const lang = button.getAttribute("data-lang");
      switchLanguage(lang);
    });
  });
}

// DOM 載入完成後初始化
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initLanguageSystem);
} else {
  initLanguageSystem();
}
