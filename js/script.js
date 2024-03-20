// Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
// Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.
// MILESTONE 0:
// Creare l’array di oggetti con le informazioni fornite.
// MILESTONE 1:
// Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto
// MILESTONE 2:
// Stampare le stesse informazioni su DOM sottoforma di stringhe
// BONUS 1:
// Trasformare la stringa foto in una immagine effettiva
// BONUS 2:
// Organizzare i singoli membri in card/schede


const ourTeam = [
    { 
        name: 'Wayne',
        lastname: 'Barnett',
        role: 'Founder & CEO',
        image: 'wayne-barnett-founder-ceo.jpg'

    },

    { 
        name: 'Angela',
        lastname: 'Caroll',
        role: 'Chief Editor',
        image: 'angela-caroll-chief-editor.jpg'

    },

    { 
        name: 'Wakter',
        lastname: 'Gordon',
        role: 'Office Manager',
        image: 'walter-gordon-office-manager.jpg'

    },

    { 
        name: 'Angela',
        lastname: 'Lopez',
        role: 'Social Media Manager',
        image: 'angela-lopez-social-media-manager.jpg'

    },

    { 
        name: 'Scott',
        lastname: 'Estrada',
        role: 'Developer',
        image: 'scott-estrada-developer.jpg'

    },

    { 
        name: 'Barbara',
        lastname: 'Ramos',
        role: 'Graphic Designer',
        image: 'barbara-ramos-graphic-designer.jpg'

    },
]

const mainContainer = document.querySelector('#list');
for(let i = 0; i < ourTeam.length; i++) {
    const thisMember = ourTeam[i];
    console.log(`${thisMember.name} ${thisMember.lastname} ${thisMember.role} ${thisMember.image}`);
    
    const newLi = `
     <li>
        <h2> ${thisMember.name} ${thisMember.lastname} </h2>
        <span class="ms-txt"> Ruolo ${thisMember.role} </span>
        <img>${thisMember.image}</img>
     </li>   
    `
    mainContainer.innerHTML += newLi;
}



