// ======================================================
// THAY LINK APP SCRIPT CỦA BẠN VÀO DƯỚI ĐÂY
const API_URL = "https://script.google.com/macros/s/AKfycbxV4zh4uLnJF8KTKj6HGnEG1icgM15f67syYqfF0Q_t6kBWw2bGMl0gDASPnnUZ-a3UGg/exec"; 
// ======================================================

// THÊM: Mã lớp bảo mật (Viết thường để so sánh dễ dàng)
const CLASS_CODE_SECRET = "hoahoc"; 

const questions = [
    { 
        q: "Kí hiệu cặp oxi hoá - khử ứng với quá trình khử: Fe3+ + 1e → Fe2+ là?", 
        a: "Fe3+/Fe2+", 
        options: ["Fe3+/Fe2+", "Fe2+/Fe", "Fe3+/Fe", "Fe2+/Fe3+"], 
        correct: 0 
    },
    { 
        q: "Nếu thế khử chuẩn của điện cực dương là 0,80 V và thế khử chuẩn của điện cực âm là –0,76 V thì sức điện động chuẩn của pin Galvani là bao nhiêu?", 
        a: "1,56 V", 
        options: ["1,56 V", "-1,56 V", "0,04 V", "-0,04 V"], 
        correct: 0 
    },
    { 
        q: "Cho bột Fe vào dung dịch gồm AgNO3 và Cu(NO3)2. Sau phản ứng thu được dung dịch X (2 muối) và chất rắn Y (2 kim loại). Thành phần của X và Y là:", 
        a: "Cu(NO3)2; Fe(NO3)2 và Ag; Cu", 
        options: [
            "Fe(NO3)2; Fe(NO3)3 và Cu; Ag", 
            "Cu(NO3)2; AgNO3 và Cu; Ag", 
            "Cu(NO3)2; Fe(NO3)2 và Cu; Fe", 
            "Cu(NO3)2; Fe(NO3)2 và Ag; Cu"
        ], 
        correct: 3 
    },
    { 
        q: "Cho thế điện cực chuẩn: Li+/Li (-3,040V), Mg2+/Mg (-2,356V), Zn2+/Zn (-0,762V), Ag+/Ag (+0,799V). Ion kim loại có tính oxi hóa yếu nhất là:", 
        a: "Li+", 
        options: ["Mg2+", "Zn2+", "Ag+", "Li+"], 
        correct: 3 
    },
    { 
        q: "Cho các cặp oxi hoá - khử: Fe2+/Fe; Cu2+/Cu; Fe3+/Fe2+. Cặp chất nào KHÔNG phản ứng với nhau?", 
        a: "Dung dịch FeCl2 và dung dịch CuCl2", 
        options: [
            "Fe và dung dịch CuCl2", 
            "Fe và dung dịch FeCl3", 
            "Dung dịch FeCl2 và dung dịch CuCl2", 
            "Cu và dung dịch FeCl3"
        ], 
        correct: 2 
    },
    { 
        q: "Cho hỗn hợp Cu và Fe2O3 vào dung dịch HCl dư. Thu được dung dịch X và chất rắn không tan. Muối trong dung dịch X là:", 
        a: "CuCl2, FeCl2", 
        options: ["FeCl3", "FeCl2", "CuCl2, FeCl2", "FeCl2, FeCl3"], 
        correct: 2 
    },
    { 
        q: "Cho thế điện cực chuẩn: Mg2+/Mg (-2,356V), Zn2+/Zn (-0,762V), Fe2+/Fe (-0,44V), Ag+/Ag (+0,799V). Ở điều kiện chuẩn, Fe khử được ion kim loại nào?", 
        a: "Ag+", 
        options: ["Mg2+", "Zn2+", "Li+", "Ag+"], 
        correct: 3 
    },
    { 
        q: "Phản ứng nào sau đây chứng tỏ Fe2+ có tính khử yếu hơn so với Cu?", 
        a: "2Fe3+ + Cu → 2Fe2+ + Cu2+", 
        options: [
            "Fe + Cu2+ → Fe2+ + Cu", 
            "2Fe3+ + Cu → 2Fe2+ + Cu2+", 
            "Fe2+ + Cu → Cu2+ + Fe", 
            "Cu2+ + 2Fe2+ → 2Fe3+ + Cu"
        ], 
        correct: 1 
    },
    { 
        q: "Cho hỗn hợp Fe và Zn vào dung dịch AgNO3 đến phản ứng hoàn toàn, thu được dung dịch X (2 muối) và chất rắn Y (2 kim loại). Hai muối trong X là:", 
        a: "Zn(NO3)2 và Fe(NO3)2", 
        options: [
            "Fe(NO3)3 và Zn(NO3)2", 
            "Zn(NO3)2 và Fe(NO3)2", 
            "AgNO3 và Zn(NO3)2", 
            "Fe(NO3)2 và AgNO3"
        ], 
        correct: 1 
    },
    { 
        q: "Trong quá trình hoạt động của pin điện Ni - Cu, quá trình xảy ra ở anode là:", 
        a: "Ni → Ni2+ + 2e", 
        options: [
            "Ni → Ni2+ + 2e", 
            "Cu → Cu2+ + 2e", 
            "Cu2+ + 2e → Cu", 
            "Ni2+ + 2e → Ni"
        ], 
        correct: 0 
    },
    { 
        q: "Cho phản ứng: Cu + 2Ag+ → Cu2+ + 2Ag. Phát biểu nào đúng?", 
        a: "Cu là chất khử, Ag+ là chất oxi hoá", 
        options: [
            "Ag+ khử Cu thành Cu2+", 
            "Cu2+ có tính oxi hoá mạnh hơn Ag+", 
            "Cu có tính khử yếu hơn Ag", 
            "Cu là chất khử, Ag+ là chất oxi hoá"
        ], 
        correct: 3 
    },
    { 
        q: "Cho Al và Zn vào dung dịch AgNO3. Thu được dung dịch X (chỉ chứa 1 muối) và phần không tan Y (2 kim loại). Hai kim loại trong Y và muối trong X là:", 
        a: "Zn, Ag và Al(NO3)3", 
        options: [
            "Zn, Ag và Zn(NO3)2", 
            "Al, Ag và Al(NO3)3", 
            "Al, Ag và Zn(NO3)2", 
            "Zn, Ag và Al(NO3)3"
        ], 
        correct: 3 
    }
];

let currentIdx = 0;
let score = 0;
let streak = 0;
let startTime, timerInterval;
let userAnswers = [];
let userData = { name: "", class: "" };
let leaderboardCache = [];

function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById(screenId).classList.add('active');
}

// === CÁC HÀM XỬ LÝ MODAL LUẬT CHƠI ===
function openRules() {
    document.getElementById('rules-modal').classList.add('active');
}

function closeRules() {
    document.getElementById('rules-modal').classList.remove('active');
}
// ======================================

function startQuiz() {
    const nameInput = document.getElementById('input-name');
    const classInput = document.getElementById('input-class');
    const codeInput = document.getElementById('input-code'); // Lấy ô nhập mã

    userData.name = nameInput.value.trim();
    userData.class = classInput.value.trim();
    const enteredCode = codeInput.value.trim();
    
    // 1. Kiểm tra điền đủ thông tin
    if (!userData.name || !userData.class || !enteredCode) {
        shakeInput();
        alert("Vui lòng nhập đầy đủ Tên, Lớp và Mã vào thi!");
        return;
    }

    // 2. Kiểm tra Mã lớp (Không phân biệt hoa thường)
    if (enteredCode.toLowerCase() !== CLASS_CODE_SECRET.toLowerCase()) {
        shakeInput();
        alert("Mã lớp không chính xác! Vui lòng xin mã từ giáo viên.");
        codeInput.value = ""; // Xóa mã sai
        codeInput.focus();
        return;
    }

    startTime = Date.now();
    startTimer();
    showScreen('screen-quiz');
    loadQuestion();
}

function shakeInput() {
    const inputs = document.querySelector('.input-group');
    inputs.style.animation = "shake 0.4s";
    setTimeout(() => inputs.style.animation = "", 400);
}

function startTimer() {
    timerInterval = setInterval(() => {
        const elapsed = Math.floor((Date.now() - startTime) / 1000);
        const minutes = Math.floor(elapsed/60);
        const seconds = (elapsed%60).toString().padStart(2,'0');
        document.getElementById('timer').innerHTML = `${minutes}:${seconds}`;
    }, 1000);
}

function loadQuestion() {
    const q = questions[currentIdx];
    document.getElementById('question-text').innerText = `Câu ${currentIdx + 1}: ${q.q}`;
    const optionsDiv = document.getElementById('answer-options');
    optionsDiv.innerHTML = '';
    
    const progress = ((currentIdx) / questions.length) * 100;
    document.getElementById('progress-bar').style.width = `${progress}%`;

    q.options.forEach((opt, i) => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.innerHTML = `<span>${opt}</span>`;
        btn.onclick = () => checkAnswer(i);
        optionsDiv.appendChild(btn);
    });
}

function checkAnswer(selectedIdx) {
    const q = questions[currentIdx];
    const btns = document.querySelectorAll('.option-btn');
    const timeTaken = (Date.now() - (startTime + currentIdx * 2000)) / 1000; 

    userAnswers.push({ question: q.q, selected: selectedIdx, correct: q.correct });

    if (selectedIdx === q.correct) {
        btns[selectedIdx].classList.add('correct');
        btns[selectedIdx].innerHTML += ` <i class="fas fa-check-circle" style="float:right"></i>`;
        streak++;
        const timeBonus = Math.max(0, Math.floor(5 - timeTaken / 2));
        const streakBonus = streak * 2;
        score += (10 + timeBonus + streakBonus);
        document.getElementById('feedback').innerHTML = `<span style="color:var(--success)">Chính xác! +${10 + timeBonus + streakBonus}đ</span>`;
    } else {
        btns[selectedIdx].classList.add('wrong');
        btns[selectedIdx].innerHTML += ` <i class="fas fa-times-circle" style="float:right"></i>`;
        btns[q.correct].classList.add('correct');
        streak = 0;
        document.getElementById('feedback').innerHTML = `<span style="color:var(--danger)">Sai rồi!</span>`;
    }

    document.getElementById('streak-display').innerText = `${streak}`;
    Array.from(btns).forEach(b => b.style.pointerEvents = 'none');

    setTimeout(() => {
        currentIdx++;
        document.getElementById('feedback').innerText = "";
        if (currentIdx < questions.length) {
            loadQuestion();
        } else {
            finishQuiz();
        }
    }, 1500);
}

async function finishQuiz() {
    clearInterval(timerInterval);
    const totalTime = Math.floor((Date.now() - startTime) / 1000);
    document.getElementById('progress-bar').style.width = '100%';
    
    showScreen('screen-result');
    animateValue(document.getElementById('final-score'), 0, score, 1500);
    document.getElementById('total-time').innerText = `${totalTime}s`;
    document.getElementById('rank-text').innerText = "Đang lưu...";

    if (API_URL.includes("script.google.com")) {
        try {
            await fetch(API_URL, {
                method: "POST",
                mode: "no-cors",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ 
                    name: userData.name, 
                    class: userData.class, 
                    score: score, 
                    time: totalTime 
                })
            });
            document.getElementById('rank-text').innerText = "Đã lưu!";
        } catch (error) {
            console.error("Lỗi lưu điểm:", error);
            document.getElementById('rank-text').innerText = "Lỗi lưu!";
        }
    } else {
        document.getElementById('rank-text').innerText = "Chưa setup API";
    }

    startConfetti();
}

function animateValue(obj, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        obj.innerHTML = Math.floor(progress * (end - start) + start);
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
}

async function showLeaderboard() {
    showScreen('screen-leaderboard');
    const body = document.getElementById('leaderboard-body');
    body.innerHTML = `<tr><td colspan="4">Đang tải dữ liệu từ server...</td></tr>`;

    if (API_URL.includes("script.google.com")) {
        try {
            const response = await fetch(API_URL);
            const data = await response.json();
            
            if (data && data.length > 0) {
                renderLeaderboard(data);
            } else {
                body.innerHTML = `<tr><td colspan="4">Chưa có dữ liệu nào!</td></tr>`;
            }
        } catch (error) {
            console.error(error);
            body.innerHTML = `<tr><td colspan="4" style="color:red">Lỗi tải dữ liệu. Vui lòng thử lại.</td></tr>`;
        }
    } else {
        body.innerHTML = `<tr><td colspan="4">Vui lòng cập nhật API_URL trong script.js</td></tr>`;
    }
}

function renderLeaderboard(data) {
    const body = document.getElementById('leaderboard-body');
    body.innerHTML = data.map((item, idx) => `
        <tr>
            <td>
                ${idx === 0 ? '<i class="fas fa-crown text-warning"></i>' : idx + 1}
            </td>
            <td><strong>${item.name}</strong><br><small>${item.class}</small></td>
            <td style="font-weight:bold; color:var(--primary)">${item.score}</td>
            <td>${item.time}s</td>
        </tr>
    `).join('');
}

function reviewQuiz() {
    showScreen('screen-review');
    const reviewList = document.getElementById('review-list');
    reviewList.innerHTML = userAnswers.map((ans, i) => `
        <div class="review-item ${ans.selected === ans.correct ? 'correct' : 'wrong'}">
            <p class="review-q">Câu ${i+1}: ${ans.question}</p>
            <p>Bạn chọn: <span style="color: ${ans.selected === ans.correct ? 'green' : 'red'}">${questions[i].options[ans.selected]}</span></p>
            ${ans.selected !== ans.correct ? `<p style="color: var(--success)">Đáp án đúng: ${questions[i].options[ans.correct]}</p>` : ''}
        </div>
    `).join('');
}

function startConfetti() {
    const canvas = document.getElementById('confetti-canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = [];
    const particleCount = 150;

    for (let i = 0; i < particleCount; i++) {
        particles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height - canvas.height,
            color: `hsl(${Math.random() * 360}, 100%, 50%)`,
            size: Math.random() * 10 + 5,
            speedY: Math.random() * 3 + 2,
            speedX: Math.random() * 2 - 1
        });
    }

    function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        particles.forEach(p => {
            ctx.fillStyle = p.color;
            ctx.fillRect(p.x, p.y, p.size, p.size);
            p.y += p.speedY;
            p.x += p.speedX;
            if (p.y > canvas.height) p.y = -10;
        });
        requestAnimationFrame(draw);
    }
    draw();
    setTimeout(() => ctx.clearRect(0, 0, canvas.width, canvas.height), 5000); 
}
