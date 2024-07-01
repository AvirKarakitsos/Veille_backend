# API REST pour un site de veille JS

## Description

API REST pour un site web de veille Javascript, codé avec Node et le framework Express JS. Cet API permet de collectionner des ressources provenant de youtube, d'articles sur le langage Javascript et de les catégoriser selon leur environnement (Node, React) et leur auteur. Les données sont stockées sur MongoDB Atlas  
Une documentation OpenAPI est disponible sur l'url http://localhost:4000/api/docs.  
L'API est utilisé côté client [ici](https://github.com/AvirKarakitsos/Veille_frontend)

**Tags**: *Veille, Express, pagination*

## Installation

```
npm install
```

### Fichier .env

Avec pour variables d'environnent:  
PORT: *port 3000 par defaut*
DB_CONNECTION: *votre connection mongoose commençant par mongodb+srv:/...*