// 1. Création du package de node http qui
// Ecoute des requetes http et reponse http
const http = require('http'); // Import du package http 
const app = require('./app'); // Import de app pour utilisation de l'application sur le serveur

// Connection à la base de donnée Mongo DB
const connectionDB = require("./config/db")
connectionDB()

// Ajout du port de connection si celui-ci n'est pas declarer par l environnement
// Si aucun port n'est fourni on écoutera sur le port 3000
const PORT = process.env.PORT || 3000

// Créer un serveur avec express qui utilise app
// Création d'une constante pour les appels serveur (requetes et reponses)
const server = http.createServer(app);

// Le serveur écoute le port 
server.listen(PORT, () => console.log(`Serveur en route sur le port ${PORT}`))