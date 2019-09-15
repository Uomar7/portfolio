
$(document).ready(function(){
  $('[data-toggle="tooltip"]').hover(); 
});

const parallax = document.getElementById('introd');
window.addEventListener("scroll", function(){
  let offset = window.pageYOffset;
  console.log(offset);
  
  parallax.style.backgroundPositionY = offset * 0.7 + 'px';
})