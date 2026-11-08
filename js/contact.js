import { valideChamp } from "./validation.js";

const form = document.querySelector('#contactForm');
const feedback = document.querySelector('#feedback');

const verifier = (champ) =>{
    const erreur = valideChamp(champ.name , champ.value);

    champ.parentElement.querySelector('.erreur').textContent = erreur;
    return erreur === '';
};

const afficherFeedback = (texte , succes) =>{
    feedback.textContent = texte ;
    feedback.className = `p-3 rounded-xl mb-4 ${succes ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`
};

form.addEventListener('input' , (e) =>{
    if(e.target.name) verifier(e.target);
});

form.addEventListener('submit' , (e)=>{
    e.preventDefault();

    const champs = [...form.elements].filter(el => el.name);

    const resultats = champs.map(verifier) ;

    if(resultats.includes(false)){
        afficherFeedback('Veuillez corriger les erreurs du form ' , false);
        return;
    }
    afficherFeedback('Merci votre message a été envoyer' ,true);
    form.reset();

})

document.querySelector('#btnTest').addEventListener('click' , ()=>{
    fetch('https://randomuser.me/api/')
    .then(res => res.json())
    .then(data => {
        const user = data.results[0];
        form.nom.value = user.name.first + ' ' + user.name.last ;
        form.email.value = user.email ;
        form.telephone.value = '0612345678';
        form.sujet.value = 'Question sur commande ';
        form.message.value = 'Je souhaite avoir des informations';
    })
})


