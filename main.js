const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// Check for saved theme in localStorage
const currentTheme = localStorage.getItem('theme');
if (currentTheme === 'dark') {
  body.classList.add('dark-mode');
  themeToggle.textContent = 'Light Mode';
}

themeToggle.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  
  let theme = 'light';
  if (body.classList.contains('dark-mode')) {
    theme = 'dark';
    themeToggle.textContent = 'Light Mode';
  } else {
    themeToggle.textContent = 'Dark Mode';
  }
  
  localStorage.setItem('theme', theme);
});
