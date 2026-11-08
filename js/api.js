import { EnregistrerProducts , ReadProducts } from "./storage.js";       


const data_products = "./data/data.json"; 
             
export  function fetchProducts() {
    try{
        const saved = ReadProducts();
        if(saved && saved.length > 0){
            console.log("charge depuis localstorage");
            return Promise.resolve(saved);
        }

        return  fetch(data_products)
        
        .then(response => {
            if(!response.ok){
            throw new Error(`Erreur HTTP : ${response.status}` );
        }
        return response.json();
        }) 
        .then(products => {
            console.log(products);
            EnregistrerProducts(products);
            return products;
        })
    }catch (error){
        console.log("Echec de la récupération des produits" , error);
        throw error;
    }finally{
        console.log("fetxh products done")
    }
}

//fetchProducts();
