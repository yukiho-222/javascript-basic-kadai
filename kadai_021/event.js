const btn = document.getElementById('btn');  // ボタンの要素を取得
const text = document.getElementById('text'); // h2の要素を取得

btn.addEventListener('click', () => { // クリックイベントを追加
    setTimeout(() => { 
        text.textContent = 'ボタンをクリックしました'; // 2秒後にテキストを変更
    }, 2000);
});
