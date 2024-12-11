## WEBAPP-REACT

## MILESTONE 1

1. Mettiamo su un nuovo progetto React aiutandoci con Vite
2. Ripuliamo come sempre l’app da file e codice di esempio non necessari
3. Installiamo il necessario: React Router, Bootstrap e Bootstrap icons (se volete utilzzarlo)

## MILESTONE 2

1. Creiamo un layout di base per la nostra applicazione ed impostiamo le rotte per le diverse pagine.
2. Creiamo 2 pagine:
   a. La home, in cui mostreremo la lista dei film
   b. La pagina di dettaglio di un singolo film

## MILESTONE 3

- Impostare la struttura del lavoro in maniera da sfruttare la riutailizzabilità dei componenti React e le loro props!

## MILESTONE 4

- Curare l’aspetto estetico della vostra applicazione

## Bonus

1. Configuriamo l’app di backend (repo webapp-express) a ricevere chiamate dalla nostra applicazione React, installando e impostando il middleware CORS
2. Proviamo quindi ad effettuare una chiamata Ajax dalla home del progetto React, per ottenere la lista dei film
3. In ultimo, effettuiamo una chiamata AJAX dalla pagina di dettaglio per ottenere il dettaglio di un singolo film, comprese le sue recensioni

```EXPRESS
# webapp-express

## Ecco i primi step:
1. Pensate alla struttura del database che vorreste creare e disegnate il diagramma ER  -->  X

2. Utilizzando il file in allegato, creiamo un database con MySQL Workbench (importandolo dal file) --> X

3. Creiamo una nuova applicazione Express --->QUI install npm init -y -> npm i
4. Colleghiamo l’app al db e verifichiamo che tutto funzioni
5. Prepariamo una rotta index per ottenere la lista dei film -->
6. Prepariamo una rotta show per ottenere i dettagli di un singolo film e le sue recensioni --> X


## Bonus
1. Inserire i dati di connessione al database come variabili d’ambiente
2. Inserire le vostre API in controller
3. Inserire le vostre rotte in un router
4. Inserire un middleware per le rotte inesistenti
5. Inserire un middleware per la gestione errori
```
