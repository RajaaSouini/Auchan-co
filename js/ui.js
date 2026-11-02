import { fetchProducts } from "./api.js";

export let productsAll = [];

function renderProduct(list){
    const container = document.querySelector('.containerProducts');
    container.innerHTML = list.map(produit => `<article class="p-4 w-96 relative border border-[#096909] rounded-xl ">
                <div class="flex flex-col items-center ">
                    <img src="${produit.image}" alt="chaussure blue nike" class="w-full rounded-xl  h-96 object-cover">
                </div>
                <div class="bg-white flex justify-between absolute bottom-4 p-2 w-88">
                    <div class="font-mono font-bold flex flex-col gap-2">
                        <h3>${produit.name}</h3>
                       <p>${produit.description}</p>
                        <p class="text-xl text-[#E36A20] ">${produit.priceCents}  dh</p>
                    </div>
                    <button class="bg-[#9AD996] p-2 rounded-xl  font-mono ">Ajouter</button>    
                </div>
            </article>`).join("");
}


export default function afficherProducts(){
    const container = document.querySelector('.containerProducts');

    fetchProducts().then((products) =>{ 
        productsAll = products;
        renderProduct(productsAll);
    }).catch((error)=>{
        console.error('Erreur lors de l affichage des produits :' , error);
        container.innerHTML = `<p class="font-mono border border-[#FF0000] text-[#FFFFFF] rounded-xl p-4 bg-[#FF0000] "> Impossible de charger les produits </p>`;
    });
}



let currentCategory = "all";

export function SearchProduct(){
    const search = document.querySelector('#search');
    const searchValue = search.value.toLocaleLowerCase();

    const min = document.querySelector("#priceSearchMin").value;
    const max = document.querySelector("#priceSearchMax").value;

    const searchProducts = productsAll.filter((product) => {
        const searchbyName =  product.name.toLocaleLowerCase().includes(searchValue);
        const searchByCateg = currentCategory === "all" || product.category === currentCategory;
        const price = product.priceCents ;
        const searchByPrice = (price >= Number(min)) && (price <= Number(max));
        return searchbyName && searchByCateg && searchByPrice;
    });
    renderProduct(searchProducts);
}

export function category(category){
    currentCategory = category;
    SearchProduct();
}










