import { fetchProducts } from "./api.js";
import { AjouterProducts , Count} from "./cart.js";       
export let productsAll = [];

export function renderProduct(list){
    const container = document.querySelector('.containerProducts');
    container.innerHTML = list.map(produit =>            
        
         {
            return `<article id="${produit.id}" class="p-4 w-96  border border-[#096909] rounded-xl card">
                <div class="flex flex-col items-center ">
                    <img src="${produit.image}" alt="chaussure blue nike" class="w-full rounded-xl  h-96 object-cover">
                </div>
                <div class="bg-white  justify-between  p-2">
                    <div class="font-mono  flex flex-col gap-2">
                        <h3 class="font-bold">${produit.name}</h3>
                       <p>${produit.description}</p>
                        <div class="flex justify-between">
                            <p class="text-xl text-[#E36A20] ">${produit.priceCents}  dh</p>
                        </div>
                    </div>
                    <button class="bg-[#9AD996] p-2 rounded-xl  font-mono ajouter w-full">Acheter</button>    
                </div>
            </article>`
        }).join("");
}



export default function afficherProducts(){
    const container = document.querySelector('.containerProducts');

    return fetchProducts().then((products) =>{ 
        productsAll = products;
        renderProduct(productsAll);
        AjouterProducts(productsAll);
        Count();
    }).catch((error)=>{
        console.error('Erreur lors de l affichage des produits :' , error);
        container.innerHTML = `<p class="font-mono border border-[#FF0000] text-[#FFFFFF] rounded-xl p-4 bg-[#FF0000] "> Impossible de charger les produits </p>`;
    });
}














