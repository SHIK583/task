hamburger= document.querySelector(.hamburger)
navbar= document.querySelector(.navbar)
rigth-nav= document.querySelector(.rigth-nav)

hamburger.addEventListener("click",()=>
{
  navbar.classList.toggle('h-nav-resp');
  nav-list classList.toggle('n-nav-resp');
  rigth-nav.classList.toggle('n-nav-resp');
})