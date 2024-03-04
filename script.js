// script.js

// ボタンを取得
const buttons = document.querySelectorAll('.service button');

// アニメーションクラスを追加する関数を定義
function addAnimation(button) {
    button.classList.add('animated');
    setTimeout(() => {
        button.classList.remove('animated');
    }, 500); // アニメーション時間（ミリ秒）
}

// ボタンがクリックされたときの処理を設定
buttons.forEach(button => {
    button.addEventListener('click', () => {
        addAnimation(button);
    });
});

const emailButton = document.getElementById('emailButton');

// メールボタンがクリックされたときの処理を設定
emailButton.addEventListener('click', () => {
    // 指定のURLに遷移
    window.location.href = 'https://mail.google.com/';
});