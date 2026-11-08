const regles = {
    nom : {
        regex: /^\p{L}[\p{L}' -]{1,49}$/u,
        message: "Nom invalide (2 à 50 lettres, espaces, apostrophes et tirets autorisés).",
    },
    email: {
        regex : /^[a-z0-9._%+-]+@[a-z0-9-]+(\.[a-z0-9-]+)*\.[a-z]{2,}$/i,
        message : "Email invalide (exemple : nom@domaine.com)",
    },
    telephone :{
        regex : /^(?:\+212|0)[5-7]\d{8}$/,
        message : "Téléphone invalide (exemple 0612345678 ou +212 612345678",
    },
    sujet : {
        regex :  /^[\p{L}\d][\p{L}\d ,.'!?-]{2,79}$/u,
        message : "Sujet invalide (3 à 80 caractères",
    },
    message : {
        regex : /^[\s\S]{10,500}$/,
        message : "Message invalide (entre 10 et 500 caractères",
    } 
    
}

export const valideChamp = (nom , valeur)=>
    regles[nom].regex.test(valeur.trim()) ? '' : regles[nom].message;


