let clickCount = 0;
let isCounting = false;
let countdownTime = 10;

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function startCountdown(seconds) {
    clickCount = 0;
    countdownTime = seconds;
    document.getElementById("clickCount").innerText = clickCount;
    document.getElementById("clickPerSecond").innerText = 0;
    document.getElementById("countdown").innerText = countdownTime;
    isCounting = true;

    const countdownInterval = setInterval(() => {
        countdownTime--;
        document.getElementById("countdown").innerText = countdownTime;

        if (countdownTime <= 0) {
            clearInterval(countdownInterval);
            isCounting = false;
            const clicksPerSecond = clickCount / seconds;
            document.getElementById("clickPerSecond").innerText = clicksPerSecond.toFixed(2);
            alert(seconds + "초가 경과했습니다!");
        }
    }, 1000); // 1초마다 호출
}

document.getElementById("clickButton").addEventListener("click", function() {
    if (isCounting) {
        clickCount++;
        document.getElementById("clickCount").innerText = clickCount;

        // 버튼 색상 변경
        this.style.backgroundColor = getRandomColor();
    }
});

document.getElementById("startButton5").addEventListener("click", function() {
    startCountdown(5);
});

document.getElementById("startButton10").addEventListener("click", function() {
    startCountdown(10);
});

document.getElementById("startButton15").addEventListener("click", function() {
    startCountdown(15);
});