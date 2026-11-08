import { fetchProducts } from "./api.js";
import { AjouterProducts , Count} from "./cart.js";       
export let productsAll = [];

export function renderProduct(list){
    const container = document.querySelector('.containerProducts');
    container.innerHTML = list.map(produit =>            
        
         {
            return `<article id="${produit.id}" class="p-4 w-96  border border-[#096909] rounded-xl card" draggable="true">
                <div class="flex flex-col items-center ">
                    <img src="${produit.image}" alt="chaussure blue nike" class="w-full rounded-xl  h-96 object-cover img-card" draggable="false">
                </div>
                <div class="bg-white  justify-between  p-2 cont">
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


export function VueList(vue){
    const container = document.querySelector('.containerProducts');
    const cards = document.querySelectorAll('.card');
    const imgCard = document.querySelectorAll('.img-card');
    const cont = document.querySelectorAll('.cont');
    const boutton = document.querySelectorAll('.ajouter');
    console.log(container , cards.length);
    if(vue === 'liste'){
        container.className = 'containerProducts flex flex-col flex-1 min-w-0  gap-4';
        cards.forEach(card => card.className = 'w-full flex  gap-4 p-4 border border-[#096909] rounded-xl card');
        imgCard.forEach(img => img.className = 'w-20 rounded-xl  h-20 object-cover img-card');
        cont.forEach(con => con.className ='flex bg-white  justify-between  p-2 cont');
        boutton.forEach(btn => btn.className = 'bg-[#9AD996] p-2 rounded-xl h-10 font-mono ajouter w-20');
    }else{
        container.className = 'flex flex-1 min-w-0 flex-col gap-8 md:flex-row md:flex-wrap md:justify-around md:items-start   containerProducts';
        cards.forEach(card => card.className = 'p-4 w-96  border border-[#096909] rounded-xl card');
        imgCard.forEach(img => img.className = 'w-full rounded-xl  h-96 object-cover img-card');
        cont.forEach(con => con.className ='bg-white  justify-between  p-2 cont');
        boutton.forEach(btn => btn.className = 'bg-[#9AD996] p-2 rounded-xl  font-mono ajouter w-full');
    }
}











