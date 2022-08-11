const menuEl = document.querySelector('.menu')
const menuText = document.querySelector('p')
const listEl = document.querySelector('.social-list')
const liEls =  document.querySelectorAll('li')

menuEl.addEventListener('click', () => {
    menuEl.classList.toggle('rotate')
    listEl.classList.toggle('hide')
})

liEls.forEach(liEl => {
    liEl.addEventListener('click', ()=>{
        menuText.innerHTML = liEl.innerHTML
        listEl.classList.add('hide')
        menuEl.classList.toggle('rotate')
    })
})