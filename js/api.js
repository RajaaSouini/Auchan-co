const data_products = "./data/data.json";



/*
fetch(data_products)
    .then(response => response.json())
    .then(users => console.log(users))
    .catch(error => console.log(error)); */

export async function fetchProducts() {
    try{
        const response = await fetch(data_products);

        if(!response.ok){
            throw new Error(`Erreur HTTP : ${response.status}` );
        }

        const products = await response.json();
        console.log(products);
        return products;
    }catch (error){
        console.log("Echec de la récupération des produits" , error);
    }finally{
        console.log("fetxh products done")
    }
}

//fetchProducts();
