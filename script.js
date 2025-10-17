// Mobile nav toggle + year fill
document.addEventListener('DOMContentLoaded', function(){
  const navToggle = document.getElementById('navToggle');
  const mainNav = document.getElementById('mainNav');

  navToggle.addEventListener('click', () => {
    if(mainNav.style.display === 'flex'){
      mainNav.style.display = 'none';
    } else {
      mainNav.style.display = 'flex';
      mainNav.style.flexDirection = 'column';
    }
  });

  // Fill current year
  const yearSpan = document.getElementById('year');
  yearSpan.textContent = new Date().getFullYear();
});