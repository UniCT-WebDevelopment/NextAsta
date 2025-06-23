##Presentazione progetto
Il progetto si basa su una applicazone web di aste online, dove è possibile mettere dei prodotti all'asta in modo tale che altri utenti possano fare delle offerte. Una volta che il prodotto supera la data di scadenza dell'asta (che viene richiesta quando creiamo una nuova asta),l'asta verrà considerata terminata e non sarà più possibile fare delle offerte.

##Tecnologie utilizzate
Questo progetto è stato fatto interamente con next.js e tailwind,il database è postgresql utilizzato con Drizzle

##Installazione e avvio
```bash
cd nome-progetto

npm install
# per installare le dovute dipendenze

sudo docker compose up

npm run dev
# per avviare il server next.js
```
Infine visitare http://localhost:3000 in un browser a scelta.
ps. ricordarsi di modificare il .env per le variabili ambientali utilizzate


Questo progetto è basato su vari tutorial visti online, ma soprattutto sul progetto di Web Dev Cody, distribuito sotto licenza MIT (vedere LICENSE)