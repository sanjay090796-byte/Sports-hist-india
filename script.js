// Mobile nav toggle + year fill
document.addEventListener('DOMContentLoaded', function(){
  const toggles = document.querySelectorAll('.nav-toggle');
  toggles.forEach(btn=>{
    const id = btn.getAttribute('id');
    const nav = btn.nextElementSibling || document.querySelector('#mainNav');
    btn.addEventListener('click', ()=>{
      // find nearest nav sibling
      let menu = btn.parentElement.querySelector('.nav');
      if(menu) menu.style.display = (menu.style.display === 'flex')? 'none' : 'flex';
    });
  });

  // fill year in all pages
  const years = document.querySelectorAll('[id^="year"]');
  years.forEach(el => el.textContent = new Date().getFullYear());
});