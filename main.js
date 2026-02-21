const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// Check for saved theme in localStorage
const currentTheme = localStorage.getItem('theme');
if (currentTheme === 'dark') {
  body.classList.add('dark-mode');
  themeToggle.textContent = '라이트 모드로 전환';
}

themeToggle.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  
  let theme = 'light';
  if (body.classList.contains('dark-mode')) {
    theme = 'dark';
    themeToggle.textContent = '라이트 모드로 전환';
  } else {
    themeToggle.textContent = '다크 모드로 전환';
  }
  
  localStorage.setItem('theme', theme);
});
