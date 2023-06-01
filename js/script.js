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



// array img
const sources = ['img/01.webp', 'img/02.webp', 'img/03.webp', 'img/04.webp', 'img/05.webp']

// variabile vuota che servira` ad essere riempita per essere inserita nel DOM(messa fuori per lo scope)
let imageElement = '';

// ciclo per controllare le img da inserire nel DOM
for (i = 0; i < sources.length; i++){
    imageElement += `<img src="${sources[i]}">`;
}
//stampa img nel DOM
carousel.innerHTML = imageElement;

// recupero img inserite nel dom tramite ciclo e templete literal
const images = document.querySelectorAll('#carousel img')

// setto indice di base
let index = 0;

// imposto prima immagine attiva
images[index].classList.add('active');

// entro in ascolto del primo bottone 

buttonNext.addEventListener('click', function() {
  // condizione di uscita per numero massimo
    if (index === images.length - 1) {
      images[index].classList.remove('active');
      index = 0;
      images[index].classList.add('active');
    }
      else {
      images[index].classList.remove('active');
      index++;
      images[index].classList.add('active');
    }
    
  
    
})
//secondo bottone

buttonPre.addEventListener('click', function() {
    // condizione di uscita per numero minimo 
    if(!index) {
      images[index].classList.remove('active')
      index = images.length - 1
      images[index].classList.add('active')
    }
// altrimenti viene eseguita la funzione 
    else {
      images[index].classList.remove('active');
      index--; 
      images[index].classList.add('active');
    }

})

