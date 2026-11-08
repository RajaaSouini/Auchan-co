import { EnregistrerProducts } from "./storage.js";
import { fetchProducts } from "./api.js";


const form = document.querySelector('#productForm');
const tbody = document.querySelector('#productsBody');
const erreur = document.querySelector('#erreur');
const btnSubmit = document.querySelector('#btnSubmit');

let products = [];

const render = () =>{
    tbody.innerHTML = products.map(p => `
        <tr data-id="${p.id}">
            <td class="p-2">
                <img src="${p.image}" class="size-12 object-cover rounded-xl" >
            </td>
            <td class="p-2">
                ${p.name}
            </td>
            <td class="p-2">
                ${p.category}
            </td>
            <td class="p-2">
                ${p.priceCents}
            </td>
            <td class="p-2 flex gap-2">
                <button class="modifier border border-[#096909] p-2 rounded-xl">Modifier</button>
                <button class="supprimer bg-red-600 text-white p-2 rounded-xl">Supprimer</button>
            </td>
        </tr>
        `).join('');
};

const sauver = () => {
    EnregistrerProducts(products);
    render();
}

const resetForm = () =>{
    form.reset();
    form.elements.id.value = '';
    erreur.textContent = '';
    btnSubmit.textContent = 'Ajouter le produit';
}

form.addEventListener('submit' , (e) => {
    e.preventDefault();

    const f = form.elements ;
    if(!f.name.value || !f.category.value || !(f.priceCents.value > 0)){
        erreur.textContent = 'Nom prix et categ sont obligatoire ';
        return;
    }

    if(f.id.value){
        const p = products.find(p => p.id == f.id.value);
        p.name = f.name.value ;
        p.category = f.category.value ;
        p.priceCents = Number(f.priceCents.value);
        p.description = f.description.value;
    }else{
        products.push({

        id : Date.now(),
        name : f.name.value,
        category : f.category.value,
        priceCents :Number(f.priceCents.value),
        description : f.description.value ,
        image :'./assets/images/casqueBluetott.jpg'
    });
    }

    sauver();
    resetForm();
});

tbody.addEventListener('click' , (e) => {
    const id = e.target.closest('tr')?.dataset.id ;

    if(e.target.closest('.supprimer') && confirm('supprimé ce produit')){
        products = products.filter(p => p.id != id);
        sauver();
    }

    if(e.target.closest('.modifier')){
        const p = products.find(p => p.id == id);
        const f = form.elements ;
        f.id.value = p.id;
        f.name.value = p.name ;
        f.category.value = p.category;
        f.priceCents.value = p.priceCents;     
        f.description.value = p.description;
    }
})

document.querySelector('#btnAnnuler').addEventListener('click' , resetForm);

fetchProducts().then(data => {
    products = data ;
    render();
})