console.log('JS OK')

/*- recuperare gli elementi dal DOM
- creare un array per contenere le immagini

  - all'ascolto di un bottone

    - **SE** l indice risulta uguale alla lunghezza della lista allora blocca il
      tasto

    - rimuovere la classe per la visualizzazione dell immagine
    - si passa all'elemento successivo
    - si aggiunge la classe per la visualizzazione all'immagine

  - all ascolto di un bottone **SE** l indice risulta uguale a 0 allora blocca
    il tasto
    - rimuovere la classe per la visualizzazione dell immagine
    - si passa all'elemento precedente
    - si aggiunge la classe per la visualizzazione all'immagine\ */

    // recupero elementi dal DOM 

const buttonNext = document.getElementById('next')
const buttonPre = document.getElementById('pre')
const carousel = document.getElementById('carousel')
// thumbnails dal DOM
const thumbnails = document.querySelector('.thumbnails')


// array img
const sources = ['img/01.webp', 'img/02.webp', 'img/03.webp', 'img/04.webp', 'img/05.webp']
// array titoli
const titleList = ['Spider-Man', 'Ratchet & Clank', 'Fortnite', 'Stray', 'Avengers']

// variabile vuota che servira` ad essere riempita per essere inserita nel DOM(messa fuori per lo scope)
let imageElement = '';

// variabile per descrizione thumbnails 
let thumbDesc = '';

// ciclo per controllare le img da inserire nel DOM

for (i = 0; i < sources.length; i++ ){
    imageElement += `<img src="${sources[i]}">`;
}
// ciclo per controllare lista titoli
for (i = 0; i < titleList.length; i++){
    thumbDesc += `
    <div class="myCards">
    <img src="${sources[i]}"> 
    <p>${titleList[i]}</p>
    </div>`;
}


//stampa img nel DOM
carousel.innerHTML = imageElement;
// stampa thumbnails nel DOM
thumbnails.innerHTML = thumbDesc;
// stampo titoli


// recupero img inserite nel dom tramite ciclo e templete literal
const images = document.querySelectorAll('#carousel img')
const thumbImages = document.querySelectorAll('.thumbnails img') 
const thumbTitle = document.querySelectorAll ('.myCards p')
// setto indice di base
let index = 0;

// imposto prima immagine attiva
images[index].classList.add('active');
thumbImages[index].classList.add('o-none');
thumbTitle[index].classList.add('active-p');

// entro in ascolto del primo bottone 

buttonNext.addEventListener('click', function() {
  // condizione di uscita per numero massimo
    if (index === images.length - 1 && index === thumbImages.length - 1 && index === thumbTitle.length - 1) {
      // rimuovo l'immagine corrente
      images[index].classList.remove('active');
      thumbImages[index].classList.remove('o-none')
      thumbTitle[index].classList.remove('active-p');
      // riporta index a 0
      index = 0;
      // aggiungo la classe 'active' alla prima immagine
      images[index].classList.add('active');
      thumbImages[index].classList.add('o-none')
      thumbTitle[index].classList.add('active-p');
    }
    // altrimenti procedi normalmente con l'incremento dell'indice
    else {
      images[index].classList.remove('active');
      thumbImages[index].classList.remove('o-none')
      thumbTitle[index].classList.remove('active-p');
      index++;
      images[index].classList.add('active');
      thumbImages[index].classList.add('o-none')
      thumbTitle[index].classList.add('active-p');
    }
    
  
    
})
//secondo bottone

buttonPre.addEventListener('click', function() {
    // condizione di uscita per numero minimo 
    if(!index) {
      // rimuovo la classe 'active' all' immagine corrente
      images[index].classList.remove('active')
      thumbImages[index].classList.remove('o-none')
      thumbTitle[index].classList.remove('active-p');
      // riporto l'index all' ultimo elemento
      index = images.length - 1
      // aggiungo la classe active all' ultima immagine
      images[index].classList.add('active')
      thumbImages[index].classList.add('o-none')
      thumbTitle[index].classList.add('active-p');
    }
// altrimenti viene eseguita la funzione normalmente
    else {
      images[index].classList.remove('active');
      thumbImages[index].classList.remove('o-none')
      thumbTitle[index].classList.remove('active-p');
      index--; 
      images[index].classList.add('active');
      thumbImages[index].classList.add('o-none')
      thumbTitle[index].classList.add('active-p');
    }

})

