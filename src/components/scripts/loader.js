const menuBtn = document.querySelector('#main button')
const preloader = document.querySelector('#loading')
const main = document.querySelector('#main')
const mainChildren = main.children
const loader = document.querySelector('#loading .loader span')
const profile = document.querySelector('#profile')

menuBtn.addEventListener('click', loaderWork)

function loaderWork(event){
    preloader.style.cssText = `z-index: 2;`
    for(let i = 0; i < mainChildren.length; i++){
        mainChildren[i].remove()
    }
    let count = 0
    setInterval(() => {
        if(count != 100){
            count++
            loader.innerHTML = count + '%'
        }
        if(count == 99){
            setTimeout(()=>{
                profile.style.cssText = `transform: translateX(0);
                z-index: 3`
            }, 1000)
            
    }
    }, 50);

    
}