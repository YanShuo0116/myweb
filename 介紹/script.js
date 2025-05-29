// script.js

// 目前此文件為空，您可以根據需要添加JavaScript來增強介紹網站的互動性。
// 例如：
// 1. 平滑滾動到錨點
// 2. 代碼塊的複製按鈕
// 3. 主題切換（明亮/黑暗模式）

document.addEventListener('DOMContentLoaded', () => {
    console.log("介紹網站 DOM 已載入並解析。");

    // 示例：平滑滾動 (如果需要)
    // const links = document.querySelectorAll('a[href^="#"]');
    // links.forEach(link => {
    //     link.addEventListener('click', function(e) {
    //         e.preventDefault();
    //         let targetId = this.getAttribute('href');
    //         if (targetId.length > 1) { //確保不是 href="#"
    //             let targetElement = document.querySelector(targetId);
    //             if (targetElement) {
    //                 targetElement.scrollIntoView({
    //                     behavior: 'smooth'
    //                 });
    //             }
    //         }
    //     });
    // });

    // 如果您使用了代碼高亮庫如 Prism.js 或 highlight.js，
    // 可能需要在這裡初始化它們，例如：
    // if (typeof Prism !== 'undefined') {
    //     Prism.highlightAll();
    // }
    // else if (typeof hljs !== 'undefined') {
    //    hljs.highlightAll();
    // }
});