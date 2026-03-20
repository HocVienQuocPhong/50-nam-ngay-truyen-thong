// Mobile Menu
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const navMenu = document.getElementById('navMenu');

if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
}

// Close menu when clicking on a link
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// Active menu on scroll
window.addEventListener('scroll', () => {
    let sections = document.querySelectorAll('section');
    let navLinks = document.querySelectorAll('.nav-menu a');
    
    sections.forEach(section => {
        let top = window.scrollY;
        let offset = section.offsetTop - 150;
        let height = section.offsetHeight;
        let id = section.getAttribute('id');
        
        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${id}`) {
                    link.classList.add('active');
                }
            });
        }
    });
});

// Countdown Timer
function updateCountdown() {
    const targetDate = new Date('April 1, 2026 00:00:00').getTime();
    const now = new Date().getTime();
    const difference = targetDate - now;
    
    if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);
        
        document.getElementById('days').innerHTML = days.toString().padStart(2, '0');
        document.getElementById('hours').innerHTML = hours.toString().padStart(2, '0');
        document.getElementById('minutes').innerHTML = minutes.toString().padStart(2, '0');
        document.getElementById('seconds').innerHTML = seconds.toString().padStart(2, '0');
    }
}

setInterval(updateCountdown, 1000);
updateCountdown();

// Show/Hide Contest Form
const showSubmitBtn = document.getElementById('showSubmitForm');
const contestForm = document.getElementById('contestForm');

if (showSubmitBtn) {
    showSubmitBtn.addEventListener('click', (e) => {
        e.preventDefault();
        if (contestForm.style.display === 'none') {
            contestForm.style.display = 'block';
            contestForm.scrollIntoView({ behavior: 'smooth' });
        } else {
            contestForm.style.display = 'none';
        }
    });
}

// Submit Contest Form
const submitForm = document.getElementById('submitContestForm');
if (submitForm) {
    submitForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const name = document.getElementById('authorName').value;
        const unit = document.getElementById('authorUnit').value;
        const title = document.getElementById('articleTitle').value;
        
        if (name && unit && title) {
            alert(`Cảm ơn ${name} đã gửi bài dự thi "${title}". Bài viết của bạn sẽ được xét duyệt và đăng tải trong thời gian sớm nhất!`);
            submitForm.reset();
            contestForm.style.display = 'none';
        } else {
            alert('Vui lòng điền đầy đủ thông tin bắt buộc!');
        }
    });
}

// Contact Form
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Cảm ơn bạn đã liên hệ. Chúng tôi sẽ phản hồi trong thời gian sớm nhất!');
        contactForm.reset();
    });
}

// Quiz Game
const quizData = [
    {
        question: "Học viện Quốc phòng được thành lập vào năm nào?",
        options: ["1975", "1976", "1977", "1978"],
        correct: 1
    },
    {
        question: "Phụ nữ Việt Nam được phong tặng danh hiệu gì?",
        options: ["Anh hùng Lao động", "Bà mẹ Việt Nam anh hùng", "Anh hùng Lực lượng vũ trang", "Anh hùng Phụ nữ"],
        correct: 1
    },
    {
        question: "Chủ đề kỷ niệm 50 năm Học viện Quốc phòng là gì?",
        options: ["50 năm vững bước", "Tự hào truyền thống", "Vững bước tương lai", "Tự hào 50 năm"],
        correct: 2
    },
    {
        question: "Học viện Quốc phòng đóng tại tỉnh/thành phố nào?",
        options: ["Hà Nội", "Hải Phòng", "Đà Nẵng", "TP Hồ Chí Minh"],
        correct: 0
    },
    {
        question: "Phẩm chất cao quý của phụ nữ Việt Nam là gì?",
        options: ["Trung hậu, đảm đang", "Mạnh mẽ, quyết đoán", "Thông minh, sáng tạo", "Năng động, nhiệt tình"],
        correct: 0
    }
];

let currentQuiz = 0;
let quizScore = 0;
let selectedOption = null;

function loadQuiz() {
    if (currentQuiz < quizData.length) {
        const quiz = quizData[currentQuiz];
        document.getElementById('quizQuestion').innerHTML = quiz.question;
        document.getElementById('currentQuestion').innerHTML = currentQuiz + 1;
        document.getElementById('totalQuestions').innerHTML = quizData.length;
        
        const optionsHtml = quiz.options.map((option, index) => {
            return `<div class="quiz-option" data-index="${index}">${option}</div>`;
        }).join('');
        
        document.getElementById('quizOptions').innerHTML = optionsHtml;
        
        // Add click event to options
        document.querySelectorAll('.quiz-option').forEach(option => {
            option.addEventListener('click', () => {
                document.querySelectorAll('.quiz-option').forEach(opt => opt.classList.remove('selected'));
                option.classList.add('selected');
                selectedOption = parseInt(option.dataset.index);
            });
        });
        
        document.getElementById('quizResult').style.display = 'none';
        document.getElementById('nextQuestion').style.display = 'block';
    } else {
        showQuizResult();
    }
}

function showQuizResult() {
    document.getElementById('quizQuestion').innerHTML = '';
    document.getElementById('quizOptions').innerHTML = '';
    document.getElementById('nextQuestion').style.display = 'none';
    document.getElementById('quizResult').style.display = 'block';
    document.getElementById('quizResult').innerHTML = `
        <h3>Kết quả của bạn</h3>
        <p>Bạn trả lời đúng ${quizScore}/${quizData.length} câu hỏi</p>
        <p>Điểm số: ${quizScore * 20} điểm</p>
        <button class="btn-primary" onclick="resetQuiz()">Chơi lại</button>
    `;
}

function resetQuiz() {
    currentQuiz = 0;
    quizScore = 0;
    selectedOption = null;
    loadQuiz();
}

document.getElementById('nextQuestion').addEventListener('click', () => {
    if (selectedOption !== null) {
        if (selectedOption === quizData[currentQuiz].correct) {
            quizScore++;
        }
        currentQuiz++;
        selectedOption = null;
        loadQuiz();
    } else {
        alert('Vui lòng chọn đáp án!');
    }
});

// Initialize quiz
loadQuiz();

// Game Tabs
const gameTabs = document.querySelectorAll('.game-tab');
const gameContents = document.querySelectorAll('.game-content');

gameTabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const gameId = tab.dataset.game;
        
        gameTabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        
        gameContents.forEach(content => content.classList.remove('active'));
        document.getElementById(`${gameId}Game`).classList.add('active');
        
        if (gameId === 'puzzle') {
            initPuzzle();
        } else if (gameId === 'crossword') {
            initCrossword();
        }
    });
});

// Crossword Game
function initCrossword() {
    const grid = document.getElementById('crosswordGrid');
    if (grid && grid.children.length === 0) {
        const crosswordData = [
            ['', '1', '', '2', ''],
            ['', '', '', '', ''],
            ['3', '', '4', '', ''],
            ['', '', '', '', ''],
            ['', '', '', '', '']
        ];
        
        grid.innerHTML = '';
        for (let i = 0; i < 5; i++) {
            for (let j = 0; j < 5; j++) {
                const cell = document.createElement('div');
                cell.className = 'crossword-cell';
                if (crosswordData[i][j] && typeof crosswordData[i][j] === 'string' && !isNaN(crosswordData[i][j])) {
                    const number = document.createElement('span');
                    number.style.position = 'absolute';
                    number.style.top = '2px';
                    number.style.left = '2px';
                    number.style.fontSize = '10px';
                    number.textContent = crosswordData[i][j];
                    cell.appendChild(number);
                }
                const input = document.createElement('input');
                input.type = 'text';
                input.maxLength = 1;
                cell.appendChild(input);
                grid.appendChild(cell);
            }
        }
    }
}

document.getElementById('checkCrossword')?.addEventListener('click', () => {
    alert('Chức năng kiểm tra ô chữ đang được phát triển. Hãy thử thách bạn bè nhé!');
});

// Puzzle Game
let puzzlePieces = [];
let puzzleSolved = false;

function initPuzzle() {
    const puzzleGrid = document.getElementById('puzzleGrid');
    if (puzzleGrid && puzzleGrid.children.length === 0) {
        const puzzleImage = document.getElementById('puzzleImage');
        if (puzzleImage) {
            puzzlePieces = Array.from({ length: 9 }, (_, i) => i);
            shuffleArray(puzzlePieces);
            renderPuzzle();
        }
    }
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function renderPuzzle() {
    const puzzleGrid = document.getElementById('puzzleGrid');
    if (puzzleGrid) {
        puzzleGrid.innerHTML = '';
        puzzlePieces.forEach((piece, index) => {
            const pieceDiv = document.createElement('div');
            pieceDiv.className = 'puzzle-piece';
            const row = Math.floor(piece / 3);
            const col = piece % 3;
            pieceDiv.style.backgroundImage = `url('images/anh1.jpg')`;
            pieceDiv.style.backgroundPosition = `${-col * 100}% ${-row * 100}%`;
            pieceDiv.style.backgroundSize = '300% 300%';
            pieceDiv.addEventListener('click', () => movePiece(index));
            puzzleGrid.appendChild(pieceDiv);
        });
    }
}

function movePiece(index) {
    if (puzzleSolved) return;
    
    const emptyIndex = puzzlePieces.indexOf(8);
    const validMoves = [emptyIndex - 1, emptyIndex + 1, emptyIndex - 3, emptyIndex + 3];
    
    if (validMoves.includes(index) && 
        !(Math.floor(emptyIndex / 3) !== Math.floor(index / 3) && Math.abs(emptyIndex - index) !== 3)) {
        [puzzlePieces[emptyIndex], puzzlePieces[index]] = [puzzlePieces[index], puzzlePieces[emptyIndex]];
        renderPuzzle();
        
        // Check if solved
        if (puzzlePieces.every((piece, i) => piece === i)) {
            puzzleSolved = true;
            setTimeout(() => alert('Chúc mừng! Bạn đã ghép hình thành công!'), 100);
        }
    }
}

document.getElementById('shufflePuzzle')?.addEventListener('click', () => {
    shuffleArray(puzzlePieces);
    renderPuzzle();
    puzzleSolved = false;
});

document.getElementById('checkPuzzle')?.addEventListener('click', () => {
    if (puzzlePieces.every((piece, i) => piece === i)) {
        alert('Chúc mừng! Bạn đã hoàn thành trò chơi!');
    } else {
        alert('Hình chưa đúng. Hãy tiếp tục ghép nhé!');
    }
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Gallery lightbox
document.querySelectorAll('.gallery-item').forEach(item => {
    item.addEventListener('click', () => {
        const img = item.querySelector('img');
        if (img) {
            const modal = document.createElement('div');
            modal.style.position = 'fixed';
            modal.style.top = '0';
            modal.style.left = '0';
            modal.style.width = '100%';
            modal.style.height = '100%';
            modal.style.backgroundColor = 'rgba(0,0,0,0.9)';
            modal.style.zIndex = '9999';
            modal.style.display = 'flex';
            modal.style.alignItems = 'center';
            modal.style.justifyContent = 'center';
            modal.style.cursor = 'pointer';
            
            const modalImg = document.createElement('img');
            modalImg.src = img.src;
            modalImg.style.maxWidth = '90%';
            modalImg.style.maxHeight = '90%';
            modalImg.style.objectFit = 'contain';
            
            modal.appendChild(modalImg);
            document.body.appendChild(modal);
            
            modal.addEventListener('click', () => {
                document.body.removeChild(modal);
            });
        }
    });
});

// Initialize on load
window.addEventListener('load', () => {
    initPuzzle();
    initCrossword();
});
