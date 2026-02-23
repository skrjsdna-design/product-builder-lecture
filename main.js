document.addEventListener('DOMContentLoaded', () => {
    const generateBtn = document.getElementById('generate-btn');
    const numberSpans = document.querySelectorAll('.number');

    generateBtn.addEventListener('click', () => {
        const lottoNumbers = generateLottoNumbers();
        displayNumbers(lottoNumbers);
    });

    function generateLottoNumbers() {
        const numbers = new Set();
        while (numbers.size < 6) {
            const randomNumber = Math.floor(Math.random() * 45) + 1;
            numbers.add(randomNumber);
        }
        return Array.from(numbers).sort((a, b) => a - b);
    }

    function displayNumbers(numbers) {
        numberSpans.forEach((span, index) => {
            span.textContent = numbers[index];
        });
    }
});