import { EnregistrerCard , ReadCards } from "./storage.js";
//popup panier

/*
export function modal(){

const panier = document.querySelector('.panier');

const voirpanier = document.querySelector('.voirpanier');
const suppanier = document.querySelector('.suppanier');

    voirpanier.addEventListener('click' , function(){
    panier.classList.remove('hidden');
});

suppanier.addEventListener('click' , function(){
    panier.classList.add('hidden');
})
} */
export function Count(){
    const somme = document.querySelector('.cartCount');
    if(!somme) return ;
    const cards = ReadCards() || [];
    somme.textContent = cards.reduce((somme ,item) =>  somme + item.quantity , 0 );
}


//render 
export function renderPanier(){
    const liste = document.querySelector('.panierItems');
    const total = document.querySelector('.panierTotal');
    if(!liste) return;
    const cards = ReadCards() || [];
    if(cards.length === 0 ){
        liste.innerHTML = '<p class="font-mono">Panier vide </p>';
        if(total) total.textContent = '0';
        return;
    }
    liste.innerHTML =cards.map(produit => 
        
         {
            return `<article data-id="${produit.id}" class="p-4 w-96 relative border border-[#096909] rounded-xl card">
                <div class="flex flex-col items-center ">
                    <img src="${produit.image}" alt="chaussure blue nike" class="w-full rounded-xl  h-96 object-cover">
                </div>
                <div class="bg-white  justify-between absolute bottom-4 p-2 w-88">
                    <div class="font-mono  flex flex-col gap-2">
                        <h3 class="font-bold">${produit.name}</h3>
                       <p>${produit.description}</p>
                        <div class="flex justify-between">
                            <p class="text-xl text-[#E36A20] ">${produit.priceCents}  dh</p>
                        </div>
                    </div>
                    <button class="moins">-</button>
                    <span>${produit.quantity}</span>
                    <button class="plus">+</button>
                    <button class="bg-[#9AD996] p-2 rounded-xl  font-mono ajouter w-full">Acheter</button>    
                </div>
            </article>`
         }).join("");

         if(total){
            total.textContent = cards.reduce((s ,i) => s+ i.priceCents * i.quantity , 0);
         }
}


//ajouter au panier 
export function ajouterPanier(produit){
    const cards = ReadCards() || [];
    const ElemExistant = cards.find((item) => item.id == produit.id);

    if(ElemExistant){
        ElemExistant.quantity += 1 ;
    }else{
        cards.push({
            id : produit.id ,
            name : produit.name ,
            image : produit.image ,
            priceCents : produit.priceCents ,
            quantity : 1
        });
    }
    EnregistrerCard(cards);
    Count();
    
}


export function AjouterProducts(products){
    const container = document.querySelector('.containerProducts');

    container.addEventListener('click' , (e) => {
        const boutton = e.target.closest('.ajouter');
        if(!boutton) return ;
        const id = boutton.closest('article').id ;

        const produit = products.find((p) => p.id == id);
        if(produit) ajouterPanier(produit);
    })
}


 
