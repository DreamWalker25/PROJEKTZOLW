 let shop = document.getElementById('shop')
 let products=[ 
    {
        name: "Zółw czarownica",
        img: "img/img-1.png",
        price: 90,
        link: "items/zolwczarownica.html",
        inCart: 0,
        id: 1,
        tag: "Zółw czarownica"
    },
    {
        name: "Zółw ogrodnik",
        img: "img/img-2.png",
        price: 45,
        link: "items/zolwogrodnik.html",
        inCart: 0,
        id: 2,
        tag: "Zółw ogrodnik"
    },{
        name: "Święty żółw",
        img: "img/img-3.png",
        price: 200,
        link: "items/zolwswiety.html",
        inCart: 0,
        id: 3,
        tag: "Święty żółw"
    },{
        name: "Zółw pirat",
        img: "img/img-4.png",
        price: 150,
        link: "items/zolwpirat.html",
        inCart: 0,
        id: 4,
        tag: "Zółw pirat"
    },{
        name: "Zółw mechanik",
        img: "img/img-5.png",
        price: 70,
        link: "items/zolwmechanik.html",
        inCart: 0,
        id: 5,
        tag: "Zółw mechanik"
    },{
        name: "Zółw gamer",
        img: "img/img-6.png",
        price: 30,
        link: "items/zolwgamer.html",
        inCart: 0,
        id: 6,
        tag: "Zółw gamer"
    },{
        name: "Zółw przewodnik",
        img: "img/img-7.png",
        price: 60,
        link: "items/zolwprzewodnik.html",
        inCart: 0,
        id: 7,
        tag: "Zółw przewodnik"
    },{
        name: "Zółw pierogarz",
        img: "img/img-8.png",
        price: 25,
        link: "items/zolwpierogarz.html",
        inCart: 0,
        id: 8,
        tag: "Zółw pierogarz" 
    },{
        name: "Zółw gazeciarz",
        img: "img/img-9.png",
        price: 15,
        link: "items/zolwgazeciarz.html",
        inCart: 0,
        id: 9,
        tag: "Zółw gazeciarz"
    },{
        name: "Zółw Tatuowany",
        img: "img/img-10.png",
        price: 90,
        link: "items/zolwtatuowany.html",
        inCart: 0,
        id: 1,
        tag: "Zółw Tatuowany"
    },{
        name: "Zółw doktor",
        img: "img/img-11.png",
        price: 65,
        link: "items/zolwdoktor.html",
        inCart: 0,
        id: 11,
        tag: "Zółw doktor"
    },{
        name: "Zółw stylista",
        img: "img/img-12.png",
        price: 50,
        link: "items/zolwstylista.html",
        inCart: 0,
        id: 12,
        tag: "Zółw stylista"
    },{
        name: "Zółw owca",
        img: "img/img-13.png",
        price: 20,
        link: "items/zolwowca.html",
        inCart: 0,
        id: 13,
        tag: "Zółw owca"
    },{
        name: "Zółw kucharz",
        img: "img/img-14.png",
        price: 40,
        link: "items/zolwkucharz.html",
        inCart: 0,
        id: 14,
        tag: "Zółw kucharz"
    },{
        name: "Zółw protestujący",
        img: "img/img-15.png",
        price: 15,
        link: "items/zolwprostestujacy.html",
        inCart: 0,
        id: 15,
        tag: "Zółw protestujący"
    },{
        name: "Zółw sprzątacz",
        img: "img/img-16.png",
        price: 70,
        link: "items/zolwsprzatacz.html",
        inCart: 0,
        id: 16,
        tag: "Zółw sprzątacz"
    },{
        name: "Poké-żółw",
        img: "img/img-17.png",
        price: 100,
        link: "items/zolwpokemon.html",
        inCart: 0,
        id: 17,
        tag: "Poké-żółw"
    },{
        name: "Zółw czosnkowy",
        img: "img/img-18.png",
        price: 90,
        link: "items/zolwczoskowy.html",
        inCart: 0,
        id: 18,
        tag: "Zółw czosnkowy"
    },{
        name: "Zółw herbaciarz",
        img: "img/img-19.png",
        price: 25,
        link: "items/zolwherbaciarz.html",
        inCart: 0,
        id: 19,
        tag: "Zółw herbaciarz"
    },{
        name: "Zółw piekarz",
        img: "img/img-20.png",
        price: 35,
        link: "items/zolwpiekarz.html",
        inCart: 0,
        id: 20,
        tag: "Zółw piekarz"
    },
 ];

 let generateShop = () => {
    return (shop.innerHTML = products
        .map((x) => {
            let {name, img, price, link,id} = x
            return `<div class="item">
            <a href=${link}>
            <img class="product" width="215" src=${img} alt="rzuf">
            </a>
            <div class="description">
                <p>${name}</p>
                <h3>${price} PLN</h3>
                <button class="add-cart cart${id}">Dodaj do koszyka</button>
            </div>
        </div>
        `
        }).join(""));
 };
 generateShop();


 //Generowanie produktów /\         dodawanie do koszyka etc. ||
 //                      ||                                   \/


let carts = document.querySelectorAll('.add-cart');


for (let i=0; i<carts.length;i++){
    carts[i].addEventListener('click', ()=>{
        cartNumbers(products[i]);
    })
}


function onLoadCartNumbers() {
    let productNumbers = localStorage.getItem('cartNumbers');
    if(productNumbers){
        document.querySelector('.cart span').textContent = productNumbers;
    }
}


function cartNumbers(product){
    let productNumbers = localStorage.getItem('cartNumbers');


    productNumbers = parseInt(productNumbers);

    if(productNumbers){
        localStorage.setItem('cartNumbers',productNumbers + 1);
        document.querySelector('.cart span').textContent = productNumbers +1;

    }else{
        localStorage.setItem('cartNumbers',1);
        document.querySelector('.cart span').textContent = 1;
    }
    setItems(product);
}

function setItems(product){
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);
     
    if(cartItems != null){
            if(cartItems[product.tag] == undefined){
                cartItems = {
                    ...cartItems,
                    [product.tag]: product
                }
            }

        cartItems[product.tag].inCart += 1;
    }else{
        product.inCart = 1;
        cartItems = {
            [product.tag]: product
         }
    }

    
  
    localStorage.setItem("productsInCart", JSON.stringify(cartItems)); 
}

onLoadCartNumbers();
