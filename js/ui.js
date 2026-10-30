import { fetchProducts } from "./api.js";

export default function afficherProducts(){
    const container = document.querySelector('.containerProducts');

fetchProducts().then((products) =>{
    const productsHtml = products.map(produit => `<article class="p-4 w-96 relative border border-[#096909] rounded-xl">
                <div class="flex flex-col items-center ">
                    <img src="${produit.image}" alt="chaussure blue nike" class="w-full rounded-xl  h-96 object-cover">
                </div>
                <div class="bg-white flex justify-between absolute bottom-4 p-2 w-88">
                    <div class="font-mono font-bold flex flex-col gap-2">
                        <h3>${produit.name}</h3>
                       <p>${produit.description}</p>
                        <p class="text-xl text-[#E36A20]">${produit.priceCents / 100}  DH</p>
                    </div>
                    <button class="bg-[#9AD996] p-2 rounded-xl  font-mono ">Ajouter</button>    
                </div>
            </article>`).join("");

            container.innerHTML = productsHtml;
}).catch((error)=>{
    console.error('Erreur lors de l affichage des produits :' , error);
    container.innerHTML = `<p class="font-mono border border-[#FF0000] text-[#FFFFFF] rounded-xl p-4 bg-[#FF0000] "> Impossible de charger les produits </p`;
});
}



/*


function createProductsCards( products , containerClassName){
    const container = document.getElementsByClassName(`${containerClassName}`);

    if (!container) {
        console.error(`Le conteneur .${containerClassName} n'a pas été trouvé.`);
        return;
    }

    container.innerHTML = products.map(produit => `
            <article class="p-4 w-96 relative border border-[#096909] rounded-xl">
                <div class="flex flex-col items-center ">
                    <img src="${produit.image}" alt="chaussure blue nike" class="w-full rounded-xl  h-96 object-cover">
                </div>
                <div class="bg-white flex justify-between absolute bottom-4 p-8  w-88">
                    <div class="font-mono font-bold flex flex-col gap-2">
                        <h3>${produit.name}</h3>
                        <p>${produit.description}</p>
                        <p class="text-xl text-[#E36A20]">${produit.priceCents}</p>
                    </div>
                    <button class="bg-[#9AD996] p-4 rounded-xl  font-mono ">Ajouter</button>    
                </div>
            </article>
        `).join('');

}

fetchProducts.then(products => {
    createProductsCards(products ,"containerProducts" );
})
.catch(error => console.error("Erreur lors de la recuperation des produits"))*/


