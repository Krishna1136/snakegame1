function toss() {
    const result = Math.random() < 0.5 ? "🪙 Heads" : "🪙 Tails";
    const resultDiv = document.getElementById('result');
    resultDiv.innerText = result;
    resultDiv.style.animation = 'none';
    void resultDiv.offsetWidth; 
    resultDiv.style.animation = 'pop 0.5s ease';
}