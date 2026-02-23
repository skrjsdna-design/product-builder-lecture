document.addEventListener('DOMContentLoaded', () => {
    const generateBtn = document.getElementById('generate-btn');
    const lottoNumbersContainer = document.getElementById('lotto-numbers');
    const themeBtn = document.getElementById('theme-btn');
    const body = document.body;

    // 초기 상태 설정
    let currentTheme = 'light';

    // 테마 변경 기능
    themeBtn.addEventListener('click', () => {
        if (currentTheme === 'light') {
            body.setAttribute('data-theme', 'dark');
            themeBtn.textContent = '라이트 모드';
            currentTheme = 'dark';
        } else {
            body.removeAttribute('data-theme');
            themeBtn.textContent = '다크 모드';
            currentTheme = 'light';
        }
    });

    // 번호 생성 버튼 이벤트
    generateBtn.addEventListener('click', () => {
        const numbers = generateLottoNumbers();
        displayNumbers(numbers);
    });

    // 로또 번호 생성 로직
    function generateLottoNumbers() {
        const numbers = new Set();
        while (numbers.size < 6) {
            const randomNumber = Math.floor(Math.random() * 45) + 1;
            numbers.add(randomNumber);
        }
        return Array.from(numbers).sort((a, b) => a - b);
    }

    // 화면에 번호 표시
    function displayNumbers(numbers) {
        lottoNumbersContainer.innerHTML = ''; // 기존 번호 초기화
        numbers.forEach((num, index) => {
            const numDiv = document.createElement('div');
            numDiv.classList.add('number');
            numDiv.textContent = num;
            numDiv.style.animationDelay = `${index * 0.1}s`; // 순차적 애니메이션
            lottoNumbersContainer.appendChild(numDiv);
        });
    }

    // 페이지 로드 시 첫 번호 생성 (선택 사항)
    // generateBtn.click();
});
