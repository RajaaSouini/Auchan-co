import { ajouterPanier } from "./cart.js";

export function dragDrop(products){
    const container = document.querySelector('.containerProducts')
    const zoneDepotPanier = document.querySelector('.voir-panier');
    if(!container || !zoneDepotPanier) return ;

    let elementEnCours = null ;

    container.addEventListener('dragstart' , (e)=>{
        const card = e.target.closest('.card');
        
        if(card) elementEnCours = card.id ;
    });

    zoneDepotPanier.addEventListener('dragover', (e)=>{
        e.preventDefault();
    });

    zoneDepotPanier.addEventListener('drop' , (e)=>{
        e.preventDefault();

        const prod = products.find(p => p.id == elementEnCours);
        if(prod) ajouterPanier(prod);

        elementEnCours = null ;
    })
}