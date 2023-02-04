let shop = document.getElementById('shop')
 let products=[
    {
        name: "Zółw czarownica",
        tag: "img/img-1.png",
        price: 90,
        link: "items/zolwczarownica.html",
        inCart: 0
    },
    {
        name: "Zółw ogrodnik",
        tag: "img/img-2.png",
        price: 45,
        link: "items/zolwogrodnik.html",
        inCart: 0
    },{
        name: "Święty żółw",
        tag: "img/img-3.png",
        price: 200,
        link: "items/zolwswiety.html",
        inCart: 0
    },{
        name: "Zółw pirat",
        tag: "img/img-4.png",
        price: 150,
        link: "items/zolwpirat.html",
        inCart: 0
    },{
        name: "Zółw mechanik",
        tag: "img/img-5.png",
        price: 70,
        link: "items/zolwmechanik.html",
        inCart: 0
    },{
        name: "Zółw gamer",
        tag: "img/img-6.png",
        price: 30,
        link: "items/zolwgamer.html",
        inCart: 0
    },{
        name: "Zółw przewodnik",
        tag: "img/img-7.png",
        price: 60,
        link: "items/zolwprzewodnik.html",
        inCart: 0
    },{
        name: "Zółw pierogarz",
        tag: "img/img-8.png",
        price: 25,
        link: "items/zolwpierogarz.html",
        inCart: 0
    },{
        name: "Zółw gazeciarz",
        tag: "img/img-9.png",
        price: 15,
        link: "items/zolwgazeciarz.html",
        inCart: 0
    },{
        name: "Zółw Tatuowany",
        tag: "img/img-10.png",
        price: 90,
        link: "items/zolwtatuowany.html",
        inCart: 0
    },{
        name: "Zółw doktor",
        tag: "img/img-11.png",
        price: 65,
        link: "items/zolwdoktor.html",
        inCart: 0
    },{
        name: "Zółw stylista",
        tag: "img/img-12.png",
        price: 50,
        link: "items/zolwstylista.html",
        inCart: 0
    },{
        name: "Zółw owca",
        tag: "img/img-13.png",
        price: 20,
        link: "items/zolwowca.html",
        inCart: 0
    },{
        name: "Zółw kucharz",
        tag: "img/img-14.png",
        price: 40,
        link: "items/zolwkucharz.html",
        inCart: 0
    },{
        name: "Zółw protestujący",
        tag: "img/img-15.png",
        price: 15,
        link: "items/zolwprostestujacy.html",
        inCart: 0
    },{
        name: "Zółw sprzątacz",
        tag: "img/img-16.png",
        price: 70,
        link: "items/zolwsprzatacz.html",
        inCart: 0
    },{
        name: "Poké-żółw",
        tag: "img/img-17.png",
        price: 100,
        link: "items/zolwpokemon.html",
        inCart: 0
    },{
        name: "Zółw czosnkowy",
        tag: "img/img-18.png",
        price: 90,
        link: "items/zolwczoskowy.html",
        inCart: 0
    },{
        name: "Zółw herbaciarz",
        tag: "img/img-19.png",
        price: 25,
        link: "items/zolwherbaciarz.html",
        inCart: 0
    },{
        name: "Zółw piekarz",
        tag: "img/img-20.png",
        price: 35,
        link: "items/zolwpiekarz.html",
        inCart: 0
    },
 ];

 let generateShop = () => {
    return (shop.innerHTML = products
        .map((x) => {
            let {name, tag, price, link} = x
            return `<div class="item">
            <a href=${link}>
            <img class="product" width="215" src=${tag} alt="rzuf">
            </a>
            <div class="description">
                <p>${name}</p>
                <h3>${price} PLN</h3>
            </div>
        </div>
        `
        }).join(""));
 };
 generateShop();