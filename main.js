
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

const postObjects = [
       {
        id: 1,
        user: {
            name: 'Phil mangione',
            profilePic: 'https://unsplash.it/600/300?image=171'
        },
        postDate: 06/25/2021,
        postText: 'Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.',
        postImage: 'https://unsplash.it/600/300?image=171',
        likes: 80,
       },
       {
        id: 2,
        user: {
            name: 'Sofia perlari',
            profilePic: 'https://unsplash.it/600/300?image=171'
        },
        postDate: 09/03/2021,
        postText: 'Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.',
        postImage: 'https://unsplash.it/600/300?image=171',
        likes: 120,
       }
];
console.log("post aggiunti",postObjects);