document.addEventListener('DOMContentLoaded', () => {
    const textElement = document.getElementById('text');
    const texts = [
        "Ishku, Upset, Mera Munna hai tu ❤️",
        "Hai shaam tu, taareef main 💓 Tu chain hai, taqleef main 💔"
    ];
    let index = 0;

    function changeText() {
        index = (index + 1) % texts.length;
        textElement.textContent = texts[index];
    }

    setInterval(changeText, 3000); // Change text every 3 seconds
});
