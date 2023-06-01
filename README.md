# traccia

Dato un array contenente una lista di cinque immagini, creare un carosello come
nello screenshot allegato. Potete anche usare immagini diverse e variare
leggermente lo stile, l'importante è la logica!

# steps

- recuperare gli elementi dal DOM
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
    - si aggiunge la classe per la visualizzazione all'immagine\
