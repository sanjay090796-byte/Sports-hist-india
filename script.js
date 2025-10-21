// Mobile nav toggle + current year
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

  const yearSpan = document.getElementById('year');
  yearSpan.textContent = new Date().getFullYear();
});
<script>
const videoWrappers = document.querySelectorAll('.thumb-wrapper');

videoWrappers.forEach(wrapper => {
  const thumb = wrapper.querySelector('img');
  const playBtn = wrapper.querySelector('.play-button');
  const video = wrapper.querySelector('.hidden-video');

  // Click on thumbnail
  thumb.addEventListener('click', () => {
    thumb.style.display = 'none';
    playBtn.style.display = 'none';
    video.style.display = 'block';
    video.play();
  });

  // Click on play button
  playBtn.addEventListener('click', () => {
    thumb.style.display = 'none';
    playBtn.style.display = 'none';
    video.style.display = 'block';
    video.play();
  });
});
</script>