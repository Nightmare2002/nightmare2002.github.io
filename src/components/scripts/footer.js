const footer = document.querySelector('footer')
const closeMenu = document.querySelector('.menu-close')
const openMenu = document.querySelector('.menu-open')
const sections = document.querySelectorAll('section')
footer.addEventListener('click', footerMenu)

function footerMenu(event){
    if(event.target == openMenu){
        event.target.classList.remove('active')
        closeMenu.classList.add('active')
        footer.style.cssText = `transform: translateY(0%);`
        for(let i = 0; i < sections.length; i++){
            sections[i].style.cssText = `background-color: #ff263f5d;`
        }
    }else if(event.target == closeMenu){
        event.target.classList.remove('active')
        openMenu.classList.add('active')
        footer.style.cssText = `
        transform: translateY(100%);
        background-color: none;`
    }
}