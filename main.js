function onScroll(){
  if(scrollY == 0){
    navigation.classList.remove('scroll')
  }else{
    navigation.classList.add('scroll')
    
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
