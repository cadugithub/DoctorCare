window.addEventListener('scroll', onScroll)
onScroll()
function onScroll(){
  showNavOnScroll()
  showBackToTopOnScroll()
}
function showNavOnScroll(){
  if(scrollY == 0){
    navigation.classList.remove('scroll')
  }else{
    navigation.classList.add('scroll')
  }
}
function showBackToTopOnScroll(){
  if(scrollY > 550){
    backToTopButton.classList.add('show')
  }else{
    backToTopButton.classList.remove('show')
  }
}
function openMenu(){
  document.body.classList.add('menu-expanded')
}
function closeMenu(){
  document.body.classList.remove('menu-expanded')
}

ScrollReveal({ 
  origin: 'top',
  distance: '30px',
  duration: 900,
}).reveal(
  `#home, 
  #home img, 
  #home .stats, 
  #services,
  #services header,
  #services .card, 
  #about, 
  #about header,
  #about content`);
