function toggleTheme() {
    const body = document.body;
    const button = document.getElementById('themeBtn');
    const nextTheme = body.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';

    body.setAttribute('data-theme', nextTheme);
    if (button) {
        button.innerHTML = nextTheme === 'dark'
            ? '<i class="fas fa-moon"></i>'
            : '<i class="fas fa-sun"></i>';
    }
    localStorage.setItem('theme', nextTheme);
}

document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    document.body.setAttribute('data-theme', savedTheme);

    const button = document.getElementById('themeBtn');
    if (button) {
        button.innerHTML = savedTheme === 'dark'
            ? '<i class="fas fa-moon"></i>'
            : '<i class="fas fa-sun"></i>';
    }
});
