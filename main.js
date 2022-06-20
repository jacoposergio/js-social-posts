
// TODO|    Ricreiamo un feed social aggiungendo al layout di base fornito, il nostro script JS in cui:
// TODO|    Milestone 1 - Creiamo il nostro array di oggetti che rappresentano ciascun post.
// TODO|    Ogni post dovrà avere le informazioni necessarie per stampare la relativa card:
// TODO|    - id del post, numero progressivo da 1 a n
// TODO|    - nome autore,
// TODO|    - foto autore,
// TODO|    - data in formato americano (mm-gg-yyyy),
// TODO|    - testo del post,
// TODO|    - immagine (non tutti i post devono avere una immagine),
// TODO|    - numero di likes.
// TODO|    Milestone 2 - Prendendo come riferimento il layout di esempio presente nell'html, stampiamo i post del nostro feed.
// TODO|    Milestone 3 - Se clicchiamo sul tasto "Mi Piace" cambiamo il colore al testo del bottone e incrementiamo il counter dei likes relativo.

// ! creo i post da stampare in pagina
const posts = [
       {
        id: 1,
        user: {
            name: 'Phil Mangione',
            profilePic: 'https://unsplash.it/600/300?image=171'
        },
        postDate: '06/25/2021',
        postText: 'Non è difficile ricostruire una vita. Basta essere consapevoli di avere la stessa forza che avevamo prima. E servircene a nostro favore.',
        postImage: 'https://unsplash.it/600/300?image=171',
        likes: 80,
       },
       {
        id: 2,
        user: {
            name: 'Sofia Perlari',
            profilePic: 'https://unsplash.it/600/300?image=170'
        },
        postDate: '09/03/2021',
        postText: 'Possiamo avere tutti i mezzi di comunicazione del mondo, ma niente… assolutamente niente, sostituisce lo sguardo dell’essere umano.',
        postImage: 'https://picsum.photos/200',
        likes: 120,
       },
       {
       id: 3,
       user: {
           name: 'Carlo Conti',
           profilePic: 'https://picsum.photos/200'
       },
       postDate: '10/23/2019',
       postText: 'Bisogna capire bene che in ogni istante generiamo noi stessi, che ci creiamo e ricreiamo in base alle cose che ci diciamo dentro di noi, alle immagini che partoriamo, alle nostre fantasie. Nel profondo c’è una scintilla vitale che crea incessantemente le nostre cellule e il nostro corpo. Se l’ostacoliamo corriamo dei seri rischi.',
       postImage: null,
       likes: 40,
      }
];
console.log("post aggiunti",posts);    /*CONSOLE LOG*/

// ! Parte dell'avvio pagina

drawAllPosts(posts);

// todo|-----------------------------------------------------------
// todo|  EVENT LISTENERS
// todo|-----------------------------------------------------------

const AllLikeButtons = document.querySelectorAll('.js-like-button');
const AllLikesText = document.querySelectorAll('.js-likes-counter');
console.log("like buttons",AllLikeButtons);
for(let i=0; i < AllLikeButtons.length; i++) {
        const thisLikeButtons = AllLikeButtons[i];
        thisLikeButtons.addEventListener('click',function( event){
    // !      evitiamo conmportamento di default del browser
            event.preventDefault();
         // ! ci prendiamo l'elemento html di testo
         // !che ha il numero relativo a questo btn
         const relatedNumberText = AllLikesText[i];  
        console.log("RELATED NUMBER TEXT",relatedNumberText);   
        // ! ci prendiamo il numero dentro il div
        let relatedNumber = parseInt(relatedNumberText.innerHTML);
        console.log("Numero likes",relatedNumber);
        // ! lo incrementiamo di 1
        relatedNumber++;
        // ! lo scriviamo dentro al relatedNumberText
        relatedNumberText.innerHTML = relatedNumber;
        });
}



// todo|-----------------------------------------------------------
// todo|  FUNCTION
// todo|-----------------------------------------------------------

// ! Per ogni post lo stampo in pagina
 // ! postsArray --> array dei post

 function drawAllPosts(postsArray){
    // ! creo la costante per appendere nel dom
    postsContainer = document.querySelector('.posts-list');
  

    console.log("array dei post",postsArray);    /*CONSOLE LOG*/
    for(let i = 0; i < postsArray.length; i ++){
            const thisPost =  postsArray[i];  
            // ! creo variabile destrutturata per semplificare l'aggiunta nel post
            let {id, user, postDate, postText, postImage, likes} = thisPost;
            console.log("destrutturazione",postDate);

        console.log("legger post ciclo for",thisPost);   /*CONSOLE LOG*/

    // !    creo il template 
        const postTemplate = `
        <div class="post">
        <div class="post__header">
            <div class="post-meta">                    
                <div class="post-meta__icon">
                    <img class="profile-pic" src="${user.profilePic}" alt="${user.name}">                    
                </div>
                <div class="post-meta__data">
                    <div class="post-meta__author">${user.name}</div>
                    <div class="post-meta__time">${postDate}</div>
                </div>                    
            </div>
        </div>
        <div class="post__text">${postText}</div>
        <div class="post__image">
            <img src="${postImage}" alt="">
        </div>
        <div class="post__footer">
            <div class="likes js-likes">
                <div class="likes__cta">
                    <a class="like-button  js-like-button" href="#" data-postid="1">
                        <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                        <span class="like-button__label">Mi Piace</span>
                    </a>
                </div>
                <div class="likes__counter">
                    Piace a <b id="like-counter-1" class="js-likes-counter">${likes}</b> persone
                </div>
            </div> 
        </div>            
    </div>
      `;
      postsContainer.innerHTML += postTemplate;

    }
 }