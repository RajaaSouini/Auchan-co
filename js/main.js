import afficherProducts, { productsAll, VueList } from "./ui.js";
import { SearchProduct, category } from "./products.js";
import { modal } from "./cart.js";
import { renderPanier , Count } from "./cart.js";
import { SupprimerDuPanier } from "./cart.js";
import { QuantityBouttons } from "./cart.js";
import { dragDrop } from "./dragDrop.js";


afficherProducts();
SearchProduct();
document.querySelector('#search').addEventListener('input', SearchProduct);

//Burger menu 

/*
const burger = document.querySelector('#burger-btn');
const navbar = document.querySelector('#mobile-nav');
burger.addEventListener('click' , function(){
    navbar.classList.remove('hidden');
})
 */
document.querySelectorAll('.categ').forEach((btn)=>{
    btn.addEventListener('click', () =>{
        console.log("catg clique" , btn.dataset.category);
        category(btn.dataset.category); 
    })
})

document.querySelector("#priceSearchMin").addEventListener('input' , SearchProduct);
document.querySelector("#priceSearchMax").addEventListener('input' , SearchProduct);


modal();
renderPanier();
Count();
SupprimerDuPanier();

QuantityBouttons();
dragDrop(productsAll);


document.querySelector('.vueList').addEventListener('click', () => VueList('liste'));
document.querySelector('.vueGri').addEventListener('click', () => VueList('grille'));


