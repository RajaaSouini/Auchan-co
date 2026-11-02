import { EnregistrerProducts , ReadProducts } from "./storage.js";       


const data_products = "./data/data.json"; 
             
export async function fetchProducts() {
    try{
        const saved = ReadProducts();
        if(saved){
            console.log("charge depuis localstorage");
        }

        const response = await fetch(data_products);
        
        if(!response.ok){
            throw new Error(`Erreur HTTP : ${response.status}` );
        }

        const products = await response.json();
        
        console.log(products);
        EnregistrerProducts(products);
        return products;
    }catch (error){
        console.log("Echec de la récupération des produits" , error);
        throw error;
    }finally{
        console.log("fetxh products done")
    }
}

//fetchProducts();
