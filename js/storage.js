const productsL = "products";

const card = "cards";

export function EnregistrerProducts(products){
    localStorage.setItem(productsL , JSON.stringify(products));
}

export function ReadProducts (){
    const data = localStorage.getItem(productsL);
    return data ? JSON.parse(data) : null ;
}

export function EnregistrerCard (cards){
    localStorage.setItem(card , JSON.stringify(cards));
}

export function ReadCards(){
    const data = localStorage.getItem(card);
    return data ? JSON.parse(data) : null ;
}


