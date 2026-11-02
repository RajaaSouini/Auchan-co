import afficherProducts, { SearchProduct } from "./ui.js";

afficherProducts();

document.querySelector('#search').addEventListener('input', SearchProduct);

//Burger menu 

const burger = document.querySelector('#burger-btn');
const navbar = document.querySelector('#mobile-nav');
burger.addEventListener('click' , function(){
    navbar.classList.remove('hidden');
})



