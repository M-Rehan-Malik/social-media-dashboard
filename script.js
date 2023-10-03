
const toggleBtn = document.getElementById('toggle-btn');

toggleBtn.onclick = toggleThemeFunction

function toggleThemeFunction() {
    document.querySelector('.container').classList.toggle('dark-theme')
    document.querySelector('.container').classList.toggle('light-theme')
}