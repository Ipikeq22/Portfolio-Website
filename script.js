// 漢堡選單開關
const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobileMenu");
const closeMenu = document.getElementById("closeMenu");

hamburger.addEventListener("click", () => {
  mobileMenu.classList.toggle("active");
});

// 關閉選單按鈕
if (closeMenu) {
  closeMenu.addEventListener("click", () => {
    mobileMenu.classList.remove("active");
  });
}



// 滿版圖片觀看功能
function openModal(imageSrc) {
  const modal = document.getElementById("imageModal");
  const modalImg = document.getElementById("modalImg");
  
  modal.style.display = "block";
  modalImg.src = imageSrc;
  
  // 防止背景滾動
  document.body.style.overflow = "hidden";
}

function closeModal() {
  const modal = document.getElementById("imageModal");
  modal.style.display = "none";
  
  // 恢復背景滾動
  document.body.style.overflow = "auto";
}

// ESC 鍵關閉 Modal
document.addEventListener("keydown", function(event) {
  if (event.key === "Escape") {
    closeModal();
  }
});
// SweetAlert 課程內容顯示
function showCourseContent() {
  Swal.fire({
    title: 'Stun 史丹創藝工坊：從素描到3D的創意之旅 課程內容介紹',
    html: `
      <div style="text-align: left; max-height: 500px; overflow-y: auto;">
        <h3 style="color: #2c3e50; margin-bottom: 15px;">課程大綱:</h3>
        <p style="margin-bottom: 10px; color: #34495e;"><strong>每天皆包含：</strong>主題教學 + 小組挑戰 + 實作時間 + 分享回饋</p>
        
        <div style="margin-bottom: 15px;">
          <h4 style="color: #4a90e2;">Day 1 — 素描魔法入門</h4>
          <p style="color: #34495e;">線條與輪廓練習、形狀分解、光影與明暗，最後完成一張 observational sketch。</p>
        </div>
        
        <div style="margin-bottom: 15px;">
          <h4 style="color: #4a90e2;">Day 2 — 色彩實驗室與視覺語言</h4>
          <p style="color: #34495e;">色彩配色基本、情緒表現、簡單的配色卡應用與海報小練習。</p>
        </div>
        
        <div style="margin-bottom: 15px;">
          <h4 style="color: #4a90e2;">Day 3 — SketchUp 3D 建模入門</h4>
          <p style="color: #34495e;">學會基本拉伸、推拉、群組與元件，完成自己的 3D 小物模型（如漢堡店模型專案）。</p>
        </div>
        
        <div style="margin-bottom: 15px;">
          <h4 style="color: #4a90e2;">Day 4 — Twinmotion 視覺渲染</h4>
          <p style="color: #34495e;">材質、光源與相機設定，將 3D 模型進行簡單渲染與動畫導出。</p>
        </div>
        
        <div style="margin-bottom: 15px;">
          <h4 style="color: #4a90e2;">Day 5 — Canva DM 與成果發表</h4>
          <p style="color: #34495e;">學習版面配置、文案簡寫與視覺重點呈現，製作產品 DM 並進行小型發表。</p>
        </div>
        
        <h3 style="color: #2c3e50; margin: 20px 0 15px 0;">課程亮點:</h3>
        <p style="margin-bottom: 15px; color: #34495e;">創意挑戰 x 手作 x 數位設計，讓孩子在遊戲中學會設計工具與思考流程，完成自己的設計作品。</p>
        
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 15px; margin: 20px 0;">
          <div style="background: #ecf0f1; padding: 15px; border-radius: 8px; border-left: 4px solid #27ae60;">
            <h4 style="color: #27ae60; margin-bottom: 8px;">🎨 玩中學素描</h4>
            <p style="font-size: 14px; color: #34495e; margin: 0;">線條與明暗練習，觀察力訓練遊戲式教學。</p>
          </div>
          <div style="background: #ecf0f1; padding: 15px; border-radius: 8px; border-left: 4px solid #e67e22;">
            <h4 style="color: #e67e22; margin-bottom: 8px;">🧩 創意設計挑戰</h4>
            <p style="font-size: 14px; color: #34495e; margin: 0;">UNO 與糖豆人靈感任務，團隊合作與快速發想。</p>
          </div>
          <div style="background: #ecf0f1; padding: 15px; border-radius: 8px; border-left: 4px solid #8e44ad;">
            <h4 style="color: #8e44ad; margin-bottom: 8px;">🖥️ 數位實作</h4>
            <p style="font-size: 14px; color: #34495e; margin: 0;">SketchUp 與 Twinmotion，從建模到視覺呈現。</p>
          </div>
        </div>
        
        <h3 style="color: #2c3e50; margin: 20px 0 15px 0;">上課照片:</h3>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 15px;">
          <img src="https://ik.imagekit.io/iiiiioopkpoo/protoflio%20website/1-1.jpg?updatedAt=1761150786816" alt="上課照片" style="width: 100%; height: 150px; object-fit: cover; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
          <img src="https://ik.imagekit.io/iiiiioopkpoo/protoflio%20website/1-2.jpg?updatedAt=1761150786286" alt="上課照片" style="width: 100%; height: 150px; object-fit: cover; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
          <img src="https://ik.imagekit.io/iiiiioopkpoo/protoflio%20website/1-3.jpg?updatedAt=1761150786372" alt="上課照片" style="width: 100%; height: 150px; object-fit: cover; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
          <img src="https://ik.imagekit.io/iiiiioopkpoo/protoflio%20website/1-4.jpg?updatedAt=1761150786219" alt="上課照片" style="width: 100%; height: 150px; object-fit: cover; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
          <img src="https://ik.imagekit.io/iiiiioopkpoo/protoflio%20website/1-5.jpg?updatedAt=1761150786342" alt="上課照片" style="width: 100%; height: 150px; object-fit: cover; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
          <img src="https://ik.imagekit.io/iiiiioopkpoo/protoflio%20website/1-6.jpg?updatedAt=1761150786524" alt="上課照片" style="width: 100%; height: 150px; object-fit: cover; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
          <img src="https://ik.imagekit.io/iiiiioopkpoo/protoflio%20website/1-7.jpg?updatedAt=1761150785139" alt="上課照片" style="width: 100%; height: 150px; object-fit: cover; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
          <img src="https://ik.imagekit.io/iiiiioopkpoo/protoflio%20website/1-8.jpg?updatedAt=1761150785918" alt="上課照片" style="width: 100%; height: 150px; object-fit: cover; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
          <img src="https://ik.imagekit.io/iiiiioopkpoo/protoflio%20website/1-9.jpg?updatedAt=1761150786569" alt="上課照片" style="width: 100%; height: 150px; object-fit: cover; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
          <img src="https://ik.imagekit.io/iiiiioopkpoo/protoflio%20website/1-10.jpg?updatedAt=1761150786545" alt="上課照片" style="width: 100%; height: 150px; object-fit: cover; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
          <img src="https://ik.imagekit.io/iiiiioopkpoo/protoflio%20website/1-11.jpg?updatedAt=1761150786554" alt="上課照片" style="width: 100%; height: 150px; object-fit: cover; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
          <img src="https://ik.imagekit.io/iiiiioopkpoo/protoflio%20website/1-12.jpg?updatedAt=1761150786474" alt="上課照片" style="width: 100%; height: 150px; object-fit: cover; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
          <img src="https://ik.imagekit.io/iiiiioopkpoo/protoflio%20website/1-13.jpg?updatedAt=1761150786827" alt="上課照片" style="width: 100%; height: 150px; object-fit: cover; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
        </div>
      </div>
    `,
    width: '85%',
    maxWidth: '900px',
    showCloseButton: true,
    showConfirmButton: false,
    background: '#ffffff',
    color: '#2c3e50'
  });
}
// 選項卡功能
function showTab(tabName) {
  // 隱藏所有選項卡內容
  const panels = document.querySelectorAll('.tab-panel');
  panels.forEach(panel => panel.classList.remove('active'));
  
  // 移除所有按鈕的 active 狀態
  const buttons = document.querySelectorAll('.tab-btn');
  buttons.forEach(btn => btn.classList.remove('active'));
  
  // 顯示選中的選項卡
  document.getElementById(tabName).classList.add('active');
  
  // 添加按鈕的 active 狀態
  event.target.classList.add('active');
}
// 初始化圓圈圖
function initCircleCharts() {
  const charts = document.querySelectorAll('.circle-chart');
  charts.forEach(chart => {
    const percent = chart.getAttribute('data-percent');
    const degree = (percent / 100) * 360;
    chart.style.setProperty('--percent', degree + 'deg');
  });
}

// 頁面載入時初始化圓圈圖
document.addEventListener('DOMContentLoaded', initCircleCharts);
// 顯示遊戲物件圖片
function showGameObjects() {
  Swal.fire({
    title: '遊戲物件設計',
    html: `
      <div style="text-align: center;">
        <img src="https://ik.imagekit.io/iiiiioopkpoo/protoflio%20website/%E9%AB%98%E4%B8%AD%E9%81%8A%E6%88%B2%E5%9C%96.png?updatedAt=1761152888050" alt="遊戲物件" style="width: 100%; max-width: 600px; height: auto; border-radius: 10px; box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);">
      </div>
    `,
    width: '80%',
    maxWidth: '700px',
    showCloseButton: true,
    showConfirmButton: false,
    background: '#ffffff',
    color: '#2c3e50'
  });
}