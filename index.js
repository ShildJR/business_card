const themeButton = document.querySelector('.theme-toggle');
const body = document.querySelector('body');
const themes = ['light-theme', 'red-theme', 'dark-theme'];
const themeNames = ['Светлая', 'Красная', 'Тёмная'];
let currentIndex = 0;

// Устанавливаем начальную тему
updateTheme();

themeButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % themes.length;
    updateTheme();
});

function updateTheme() {
    // Удаляем все классы тем
    body.classList.remove(...themes);

    // Добавляем текущую тему
    body.classList.add(themes[currentIndex]);

    // Обновляем текст кнопки
    themeButton.textContent = `Тема: ${themeNames[currentIndex]}`;
}

// Обработка формы
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Сообщение отправлено! (Это демонстрация, форма не отправляет данные)');
    this.reset();
});