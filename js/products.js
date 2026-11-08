import { productsAll } from "./ui.js";
import { renderProduct } from "./ui.js";

let currentCategory = "all"; 

let currentPage = 1 ;
const pagination = document.querySelector('#pagination') ;  
const itemsperPage = document.querySelector('#combien');

function getItemsperPage(){
    return Number(itemsperPage.value) || 8 ;
}

function filtredProducts(){
    const search = document.querySelector('#search');
    const searchValue = search.value.toLocaleLowerCase();

    const min = document.querySelector("#priceSearchMin").value;
    const max = document.querySelector("#priceSearchMax").value;

    return productsAll.filter((product) => {
        const searchbyName =  product.name.toLocaleLowerCase().startsWith(searchValue); //includes 
        const searchByCateg = currentCategory === "all" || product.category === currentCategory;
        const price = product.priceCents ;

        const searchByMin = min === "" || price >= Number(min);
        const searchByMax = max === "" || price <= Number(max);
        return searchByCateg && searchbyName && searchByMax && searchByMin;
    });
}

function render(filtred){
    const perPage = getItemsperPage();
    const pages = Math.max(1 , Math.ceil(filtred.length / perPage));

    if(currentPage > pages) currentPage =pages ;

    const start = (currentPage - 1) * perPage;
    const pageItems = filtred.slice(start , start + perPage);

    renderProduct(pageItems);

    buttons(pages);
    
}

function buttons(pages){
    pagination.innerHTML = "";

    for(let i = 1 ; i<= pages ; i++){
        const btn = document.createElement('button');
        btn.textContent = i ;
        btn.disabled = i === currentPage ;
        btn.addEventListener('click' , ()=>{
            currentPage = i ;
            render(filtredProducts());
        });
        pagination.appendChild(btn);
    }

}

export function SearchProduct(){

    currentPage = 1 ;
    render(filtredProducts());
}

export function category(category){
    currentCategory = category;
    SearchProduct();
} 

itemsperPage.addEventListener('change' , SearchProduct);


/*

let currentCategory = "all"; 
export function SearchProduct(){

    const search = document.querySelector('#search');
    const searchValue = search.value.toLocaleLowerCase();

    const min = document.querySelector("#priceSearchMin").value;
    const max = document.querySelector("#priceSearchMax").value;

    const searchProducts = productsAll.filter((product) => {
        const searchbyName =  product.name.toLocaleLowerCase().startsWith(searchValue); //includes 
        const searchByCateg = currentCategory === "all" || product.category === currentCategory;
        const price = product.priceCents ;

        const searchByMin = min === "" || price >= Number(min);
        const searchByMax = max === "" || price <= Number(max);
        return searchByCateg && searchbyName && searchByMax && searchByMin;
    });
    renderProduct(searchProducts);
}
           
export function category(category){
    currentCategory = category;
    SearchProduct();
} */

//pagination 



