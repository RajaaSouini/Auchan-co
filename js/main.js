import afficherProducts from "./ui.js";
import { SearchProduct, category } from "./products.js";
//import { modal } from "./cart.js";


await afficherProducts();
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


//modal();





