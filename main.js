window.addEventListener('scroll', onScroll)
onScroll()
function onScroll(){
  showNavOnScroll()
  showBackToTopOnScroll()

  activateMenuAtCurrentSection(home)
  activateMenuAtCurrentSection(services)
  activateMenuAtCurrentSection(about)
  activateMenuAtCurrentSection(contact)


}
function activateMenuAtCurrentSection(section){
  const targetLine = scrollY + innerHeight / 2 

  //varificar se a seção passou da linha
  //quais dados vou precisar?

  //topo da seção
  const sectionTop = section.offsetTop

  //altura da seção
  const sectionHeight = section.offsetHeight
 

  // O topo da seção chegou ou ultrapassou a linha alvo
  const sectionTopReachOrPassedTargetLine = targetLine >= sectionTop

  //Informações dos dados
  console.log(
    "o topo da seção chegou ou passou da linha?",sectionTopReachOrPassedTargetLine
  )

  //Verificar se a base está abaixo da linha
  //quais dados vou precisar?

  const sectionEndsAt = sectionTop + sectionHeight

  //O final da seção passou da linha alvo
  const sectionEndPassedTargetLine = sectionEndsAt <= targetLine

  console.log("O final da seção passou da linha?", sectionEndPassedTargetLine)


  //limites da seção

  const sectionBaudaries = 
  sectionTopReachOrPassedTargetLine && !sectionEndPassedTargetLine

  const sectionId = section.getAttribute('id')
  const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`)

  menuElement.classList.remove('active')
  if (sectionBaudaries){
    menuElement.classList.add('active')
  }
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



