const data = [
    {
        img: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1587&q=80",
        name: "Air",
        brand: "Nike",
        price: "120.00 $",
        sizes: ["37", "38", "39"],
    },
    {
        img: "https://images.unsplash.com/photo-1584735174965-48c48d7edfde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1587&q=80",
        name: "Dunk High Pro",
        brand: "Nike",
        price: "150.00 $",
        sizes: ["37", "38", "39", "40", "42"],
    },
    {
        img: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1598&q=80",
        name: "Old Skool",
        brand: "Vans",
        price: "50.00 $",
        sizes: ["37"],
    },
    {
        img: "https://images.unsplash.com/photo-1606890658317-7d14490b76fd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1664&q=80",
        name: "Summer Party",
        brand: "Nike",
        price: "100.00 $",
        sizes: ["42", "43", "44", "45", "46"],
    },
    {
        img: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
        name: "Retro",
        brand: "Adidas",
        price: "149.00 $",
        sizes: ["39", "40"],
    },
    {
        img: "https://images.unsplash.com/photo-1528701800487-ba01fea498c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
        name: "Fancy Doc",
        brand: "Crocs",
        price: "79.00 $",
        sizes: ["37", "38", "39", "40", "41", "42"],
    },
    {
        img: "https://images.unsplash.com/photo-1541597455068-49e3562bdfa4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
        name: "Classic",
        brand: "Reebok",
        price: "99.00 $",
        sizes: ["43", "44", "45", "46"],
    },
    {
        img: "https://images.unsplash.com/photo-1628429437853-40ec8ebe3386?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
        name: "Jungle",
        brand: "New Balance",
        price: "110.00 $",
        sizes: ["39", "40", "41", "42"],
    },
    {
        img: "https://images.unsplash.com/photo-1604163546180-039a1781c0d2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
        name: "Essentials",
        brand: "Errant",
        price: "120.00 $",
        sizes: ["41", "42", "43", "44", "45", "46"],
    },
    {
        img: "https://images.unsplash.com/photo-1571216332002-282dce467b32?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
        name: "Très chic",
        brand: "Nike",
        price: "150.00 $",
        sizes: ["45", "46"],
    },
    {
        img: "https://images.unsplash.com/photo-1542601600647-3a722a90a76b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=706&q=80",
        name: "Plastic Revolution",
        brand: "Adidas",
        price: "180.00 $",
        sizes: ["37", "38", "39", "40"],
    },
    {
        img: "https://images.unsplash.com/photo-1644001992668-3b9ed080533a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
        name: "Sporty",
        brand: "Asics",
        price: "90.00 $",
        sizes: ["41", "42", "43", "44"],
    }
]

// SANDWICH 
let sandwich = document.querySelector('#sandwich')
let sandwichMenu = document.querySelector('#sandwichMenu')

sandwichMenu.classList.add('sandwichToogle1')
// function for SANDWICH
sandwich.addEventListener('click', () => {
    sandwichMenu.classList.toggle('sandwichToggle2')
})

// ========================================================================
//For COOCKIE
let containerCoockie = document.querySelector('#containerCoockie')
let coockieDiv = document.querySelector('#coockieDiv')
let btnForCoockie1 = document.querySelector('#btnForCoockie1')
let btnForCoockie2 = document.querySelector('#btnForCoockie2')

btnForCoockie1.addEventListener('click', () => {
    containerCoockie.style.display = 'none'
    coockieDiv.style.display = 'none'
    console.log('Accept');
})

btnForCoockie2.addEventListener('click', () => {
    containerCoockie.style.display = 'none'
    coockieDiv.style.display = 'none'
    console.log('Reject all');
})

function coockies() {
    containerCoockie.style.display = 'block'
}

// ========================================================================

//Sections Display Block and None (Thank You)
let sectionForNone = document.querySelector('#sectionForNone')
let sectionForBlock = document.querySelector('#sectionForBlock')
let btn = document.querySelector('#btn')
let inputFeld = document.querySelector('#inputFeld')

// ========================================================================

// KorbOverlay MAIN COntainer
let korbOverlay = document.querySelector('#korbOverlay')


// H2 Korb 
let bestellungen = document.createElement('h2')
bestellungen.textContent = 'Ihre Bestellungen'
bestellungen.classList.add('h2ofKorbOverlay')
korbOverlay.appendChild(bestellungen)


// Empty Cart korb
let emptyCart = document.createElement('p')
emptyCart.textContent = 'The cart is empty'
korbOverlay.appendChild(emptyCart)

//div for Korb der Namen und Brand enthält
let korbDiv = document.createElement('div')
korbDiv.id = 'forKorbDiv'
korbOverlay.appendChild(korbDiv)


//button delet Einzehl for korboverlay
let buttonDeletEinzelnKorb = document.createElement('button')
buttonDeletEinzelnKorb.textContent = 'Delet <'
buttonDeletEinzelnKorb.classList.add('korbDeletAll')
korbOverlay.appendChild(buttonDeletEinzelnKorb)


//button Delet All for korboverlay
let buttonDeletAllKorb = document.createElement('button')
buttonDeletAllKorb.textContent = 'Delet All'
buttonDeletAllKorb.classList.add('korbDeletAll')
korbOverlay.appendChild(buttonDeletAllKorb)

// for click function KorbOverlay block none
let korbSpan = document.querySelector('#korbSpan')
let korbSvg = document.querySelector('#korbSvg')

korbSpan.addEventListener('click', () => {
    korbOverlay.style.display = 'none'
})
korbSvg.addEventListener('click', () => {
    korbOverlay.style.display = 'block'
})

// ========================================================================

//for Counter
let korbIdforCounter = document.querySelector('#korbId')
let counter = 0

// ========================================================================

//Container Div for Fotos // Liegt in SECTION 1 
let articleForBild = document.querySelector('#articleForBild');
articleForBild.classList.add('forArticleForBild')


// forEACH FOR ELEMENT OF DATA
data.forEach(el => {

    // Divs for every single elements 
    let div = document.createElement('div')
    div.classList.toggle('forDivheight')

    // ====================================================================

    //forIMG
    let photos = document.createElement('img')
    photos.src = el.img
    photos.classList.add('forImg')
    div.appendChild(photos)
    articleForBild.appendChild(div)

    //CHANGE COLORS of PHOTOS
    photos.addEventListener('mouseover', () => {
        let r = Math.floor(Math.random() * 255)
        let g = Math.floor(Math.random() * 255)
        let b = Math.floor(Math.random() * 255)

        let color = `rgb(${r}, ${g}, ${b})`
        photos.style.transition = 'all 0.2s ease'
        photos.style.boxShadow = `${color} 0 0 10px,${color} 0 0 20px,
        ${color} 0 0 30px,${color} 0 0 40px,${color} 0 0 50px`

        setTimeout(() => {
            photos.style.boxShadow = ''
            photos.style.transition = 'all 0.4s ease'
        }, 400)

    })

    // ====================================================================
    // div For Name and Icon+
    let divForName = document.createElement('div')
    divForName.classList.add('plusIcon_NameDiv')
    div.appendChild(divForName)

    let forNamen = document.createElement('p')
    forNamen.textContent = el.name
    forNamen.classList.add('forNameParag1')
    divForName.appendChild(forNamen)

    //  create Svg and Path (Icon Plus+)
    let iconSvgPlus = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
    let iconPathPlus = document.createElementNS('http://www.w3.org/2000/svg', 'path')
    //SVG setAttribute
    iconSvgPlus.setAttribute('viewBox', '0 0 24 24')
    iconSvgPlus.setAttribute('width', '24')
    iconSvgPlus.setAttribute('height', '24')
    iconSvgPlus.classList.add('plus-icon')
    //PathsetAttribute
    iconPathPlus.setAttribute('d', 'M24 10h-10v-10h-4v10h-10v4h10v10h4v-10h10z')
    // appendChaild in div
    iconSvgPlus.appendChild(iconPathPlus)
    divForName.appendChild(iconSvgPlus)


    // ====================================================================
    // div For PREIS and Icon (Arrow)
    let divForPreisAroow = document.createElement('div')
    divForPreisAroow.classList.add('arrow_PresiDiv')
    div.appendChild(divForPreisAroow)

    //forPreis
    let forPreis = document.createElement('span')
    forPreis.textContent = el.price
    forPreis.classList.add('forPreisBrandSize')
    divForPreisAroow.appendChild(forPreis)

    //  Svg path creat (Arrow icon)
    let iconSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
    let iconPath = document.createElementNS('http://www.w3.org/2000/svg', 'path')
    // SVG setAttribute
    iconSvg.setAttribute('fill', 'none')
    iconSvg.setAttribute('viewBox', '0 0 26 15')
    iconSvg.setAttribute('width', '26')
    iconSvg.setAttribute('height', '15')
    iconSvg.classList.add('svgClass')
    //PATH setAttribute
    iconPath.setAttribute(
        'd', 'M24.3334 2.31371L14.4339 12.2132C13.6528 12.9943 12.3865 12.9943 11.6054 12.2132L1.70595 2.31371'
    )
    iconPath.setAttribute('stroke', '#797979')
    iconPath.setAttribute('stroke-width', '3')
    iconPath.setAttribute('stroke-linecap', 'round')
    iconPath.setAttribute('stroke-linejoin', 'round')
    // appendChaild in div
    iconSvg.appendChild(iconPath)
    divForPreisAroow.appendChild(iconSvg)

    // ====================================================================
    // Div, for Size, for (einzelnes Textelement/single text element)
    let mainDivForBrandSize = document.createElement('div')
    div.appendChild(mainDivForBrandSize)

    //forBrand
    let forBrand = document.createElement('span')
    forBrand.textContent = el.brand
    forBrand.classList.add('forPreisBrandSize')

    mainDivForBrandSize.appendChild(forBrand)
    mainDivForBrandSize.classList.toggle('iconsNone')
    //forSize (einzelnes Textelement/single text element)
    let forSize;
    let divForBrandSize = document.createElement('div')
    divForBrandSize.classList.add('divForBrandSize')

    el.sizes.forEach(el => {
        forSize = document.createElement('span')
        forSize.innerHTML = el
        forSize.classList.add('forPreisBrandSize')
        divForBrandSize.appendChild(forSize)
        mainDivForBrandSize.appendChild(divForBrandSize)
    })

    //Function for Arrow
    iconSvg.addEventListener('click', () => {
        forBrand.classList.toggle('iconsBlok')
        mainDivForBrandSize.classList.toggle('iconsBlok')
        iconSvg.classList.toggle('rotateForArrow')
        div.classList.toggle('forDiv')
    })

    //Function count and Korb add name/brand



    iconSvgPlus.addEventListener('click', () => {

        counter++
        korbIdforCounter.innerHTML = counter

        //add KorbOverlay
        emptyCart.textContent = ''
        let selectedShoes = document.createElement('p')
        selectedShoes.textContent = `${el.name} / ${el.brand}`
        korbDiv.appendChild(selectedShoes)

        selectedShoes.addEventListener('dblclick', () => {
            korbDiv.removeChild(selectedShoes)
            counter--
            korbIdforCounter.innerHTML = counter


            if (korbDiv.innerHTML === '') {
                emptyCart.textContent = 'The cart is empty'
            }
        })





    })



    // let randomKreis = () => {
    //     let r = Math.floor(Math.random() * 255)
    //     let g = Math.floor(Math.random() * 255)
    //     let b = Math.floor(Math.random() * 255)

    //     let color = `rgb(${r}, ${g}, ${b})`

    //     console.log(color);
    // }

    // randomKreis()



    //function  Delet All for korb
    buttonDeletAllKorb.addEventListener('click', () => {
        korbDiv.innerHTML = ''
        emptyCart.textContent = 'The cart is empty'
        counter = 0
        korbIdforCounter.innerHTML = '0'
    })

})


//function  einzelndelet for korb
buttonDeletEinzelnKorb.addEventListener('click', () => {

    if (korbDiv.innerHTML === '') {
        counter = 0
    } else {
        counter--
        korbIdforCounter.innerHTML = counter
        let korbDivArea = document.querySelectorAll('#forKorbDiv p')
        korbDiv.removeChild(korbDivArea[korbDivArea.length - 1])
    }

    if (korbDiv.innerHTML === '') {
        emptyCart.textContent = 'The cart is empty'
    }

})


//function for Add Email (Thank you)
btn.addEventListener('click', () => {
    if (inputFeld.value === '') {
        alert('Schreiben Sie bitte Ihre Adresse')
    } else {
        sectionForNone.style.opacity = '0'
        sectionForBlock.style.opacity = '10'
    }
})


