//генерация персон
const names = ['Anna' ,'Sara', 'Mila','Eva', 'Jennie']
const ages = ['28', '25', '22', '26', '30']
const miles = ['13', '7', '1,5', '9', '3']
const interests = [86, 91, 91, 95, 87]
const capabilitys = [92, 89, 80, 86, 93]
const id = [1, 2, 3, 4, 5]


function shuffle(array) {
    for(var j, x, i = array.length; i; j = parseInt(Math.random() * i), x = array[--i], array[i] = array[j], array[j] = x);
        return array;
}

function getArrOfBoj(){
    let local = []

    for(let i = 0; i < names.length; i++){
        local.push({
            name: names[i],
            age: ages[i],
            miles: miles[i],
            interests: interests[i],
            capability: capabilitys[i],
            id: id[i]
        })
    }
    return local
}



const persons = {
    sliderContainer: null,
    matchContainer: null,
    regContainer: null,
    items: [],
    init(){
        this.sliderContainer = document.querySelector('#profile')
        this.matchContainer = document.querySelector('#match')
        this.regContainer = document.querySelector('#registration')
        this._fillCatalog()
        this._getRandomSlides()
        this._render()
    },
    _fillCatalog(){
        this.items = shuffle(getArrOfBoj())
    },
    _getRandomSlides(){

    },
    _render(){
        let htmlStrPerson = ''
        let htmlStrMatch = ''
        let htmlStrReg = ''
        this.items.forEach(item =>{
            return htmlStrPerson += personList(item)
        })
        this.items.forEach(item=>{
            return htmlStrMatch += matchList(item)
        })
        this.items.forEach(item=>{
            return htmlStrReg += regList(item)
        })
        this.sliderContainer.innerHTML = htmlStrPerson
        this.matchContainer.innerHTML = htmlStrMatch
        this.regContainer.innerHTML = htmlStrReg
    }
}

function personList(item){
    if(window.innerWidth <= 1024){
        return `
        <div class="container">
            <div class="bgImg">
                <img src="/src/assets/imgs/Rectangle${item.id}mobile.png">
            </div>

            <div class="personInfo">
                <div class="info">
                    <div class="name"><h6>${item.name}, ${item.age}</h6></div>
                    <div class="online"><div class="point"></div><h6>Online</h6></div>
                    <div class="distance"><img src="/src/assets/imgs/location.png" alt=""><h6>${item.miles} millies away</h6></div>
                </div>
            </div>

            <div class="characterization">
                    <div class="info">
                        <h6 id="interests">Interests ${item.interests}%</h6>
                        <div class="line">
                            <div class="procent"></div>
                        </div>
                    </div>
                    <div class="info">
                        <h6 id="compatibility">Сompatibility ${item.capability}%</h6>
                        <div class="line">
                            <div class="procent"></div>
                        </div>
                    </div>
            </div>

            <div class="btns">
                <button class="no"><img src="/src/assets/imgs/no.png" alt="">NO</button>
                <button class="flirt"><img src="/src/assets/imgs/logo2.png" alt="">FLIRT</button>
            </div>
        </div>
        `
    // }else if(window.innerWidth <= 1024){
    //     return `
    //     <div class="container">
    //         <div class="bgImg">
    //             <img src="/src/assets/imgs/Rectangle${item.id}planshet.png">
    //         </div>

    //         <div class="personInfo">
    //             <div class="info">
    //                 <div class="name"><h6>${item.name}, ${item.age}</h6></div>
    //                 <div class="online"><div class="point"></div><h6>Online</h6></div>
    //                 <div class="distance"><img src="/src/assets/imgs/location.png" alt=""><h6>${item.miles} millies away</h6></div>
    //             </div>
    //         </div>

    //         <div class="characterization">
    //                 <div class="info">
    //                     <h6 id="interests">Interests ${item.interests}%</h6>
    //                     <div class="line">
    //                         <div class="procent"></div>
    //                     </div>
    //                 </div>
    //                 <div class="info">
    //                     <h6 id="compatibility">Сompatibility ${item.capability}%</h6>
    //                     <div class="line">
    //                         <div class="procent"></div>
    //                     </div>
    //                 </div>
    //         </div>

    //         <div class="btns">
    //             <button class="no"><img src="/src/assets/imgs/no.png" alt="">NO</button>
    //             <button class="flirt"><img src="/src/assets/imgs/logo2.png" alt="">FLIRT</button>
    //         </div>
    //     </div>
    //     `
    }else{
        return `
        <div class="container">
            <div class="bgImg">
                <img src="/src/assets/imgs/Rectangle${item.id}.png">
            </div>

            <div class="personInfo">
                <div class="info">
                    <div class="name"><h6>${item.name}, ${item.age}</h6></div>
                    <div class="online"><div class="point"></div><h6>Online</h6></div>
                    <div class="distance"><img src="/src/assets/imgs/location.png" alt=""><h6>${item.miles} millies away</h6></div>
                </div>
            </div>

            <div class="characterization">
                    <div class="info">
                        <h6 id="interests">Interests ${item.interests}%</h6>
                        <div class="line">
                            <div class="procent"></div>
                        </div>
                    </div>
                    <div class="info">
                        <h6 id="compatibility">Сompatibility ${item.capability}%</h6>
                        <div class="line">
                            <div class="procent"></div>
                        </div>
                    </div>
            </div>

            <div class="btns">
                <button class="no"><img src="/src/assets/imgs/no.png" alt="">NO</button>
                <button class="flirt"><img src="/src/assets/imgs/logo2.png" alt="">FLIRT</button>
            </div>
        </div>
        `
    }
    
}

function matchList(item){
    return `
            <div class="container">
                <div class="info">
                    <h4>MATCH!</h4>
                    <h5>${item.name} wants to talk with you</h5>
                    <button><h6>SEND A MESSAGE</h6></button>
                </div>
            </div>
            `
}

function regList(item){
    return `
            <div class="container">
                <div class="info">
                    <h4>${item.name} receives messages only from registered users!</h4>
                    <form action="">
                        <input type="text" placeholder="Email">
                        <input type="password" placeholder="Create password">
                    </form>
                    <button>COUNTINUE</button>
                </div>
            </div>
            `
}

persons.init()


// нажатие кнопок no/flirt
const buttonsNo = document.querySelector('#profile').querySelectorAll(' .btns .no')
const buttonsFlirt = document.querySelector('#profile').querySelectorAll(' .btns .flirt')
let sliderCount = 0
const sliderPersons = document.querySelector('#profile').querySelectorAll('.container')
const match = document.querySelector('#match').querySelectorAll(' .container')
const matchButton = document.querySelector('#match').querySelectorAll(' .container button')
const personReg = document.querySelector('#registration').querySelectorAll('.container')
const personRegButton = document.querySelector('#registration').querySelectorAll('.container button')
const personRegEmailInput = document.querySelector('#registration').querySelectorAll('.container input[type="text"]')
const secondReg = document.querySelector('#secondReg')

for(let i = 0; i < buttonsFlirt.length; i++){
    buttonsFlirt[i].addEventListener('click', flirtWork)
}

for(let i = 0; i < buttonsNo.length; i++){
    buttonsNo[i].addEventListener('click', sliderWork)
}

for(let i = 0; i < matchButton.length; i++){
    matchButton[i].addEventListener('click', regWork)
}

for(let i = 0; i < personRegButton.length; i++){
    personRegButton[i].addEventListener('click', personRegButtonWork)
}

function sliderWork(event){
    sliderCount++
    if(sliderCount == 5){
        for(let i = 0; i < buttonsNo.length; i++){
            buttonsNo[i].removeEventListener('click', sliderWork)
        }
        secondReg.style.cssText = `transform: translateY(0%);`
        return
    }
    for(let i = 0; i < sliderPersons.length; i++){
        sliderPersons[i].style.cssText = `transform: translateX(-${100 * sliderCount}%);`
    }
    for(let i = 0; i < match.length; i++){
        match[i].style.cssText = `
        transform: translateX(-${100 * sliderCount}%) translateY(0);
        `
    }

    for(let i = 0; i < personReg.length; i++){
        personReg[i].style.cssText = `
                transform: translateX(-${100 * sliderCount}%) translateY(0%);
        `
    }
    
}

function flirtWork(event){
    for(let i = 0; i < match.length; i++){
        match[i].style.cssText = `
                transform: translateX(-${100 * sliderCount}%) translateY(100%);
                background-color: rgba(7, 7, 7, 0.705);
        `
        
    }
}

function regWork(){
    for(let i = 0; i < personReg.length; i++){
        personReg[i].style.cssText = `
                transform: translateX(-${100 * sliderCount}%) translateY(-100%);
                background-color: rgba(7, 7, 7, 0.705);
        `
    }

    for(let i = 0; i < match.length; i++){
        match[i].style.cssText = `
                transform: translateX(-${100 * sliderCount}%) translateY(-100%);
                background-color: rgba(7, 7, 7, 0.705);
        `
        
    }
}

function personRegButtonWork(event){
    for(let i = 0; i < personRegEmailInput.length; i++){
        personRegEmailInput[i].insertAdjacentHTML('beforebegin', `<h6>Error</h6>`)
        let error = document.querySelector('#registration').querySelectorAll('.container h6')
        personRegEmailInput[i].style.cssText = `
            border: solid 1px #FF2640;
            color: #FF2640;
        `
        setTimeout(()=>{
            if(event){
                personRegEmailInput[i].style.cssText = `
                    border: solid 1px #fff;
                    color: #fff;
                `
                error[i].style.cssText = `
                    color: #fff;
                `
            }
        }, 1000)
        
        
    }
}