// 1. Création du serveur
const http = require("http")

// Connection à la base de donnée Mongo DB
const connectionDB = require("./config/db")
connectionDB()

// J'appel mon application app.js
const app = require("./app")

// Je dis sur quel port écouter
const PORT = process.env.PORT || 3000

// Je créais mon seveur
const server = http.createServer(app)

// Ecoute sur le port
server.listen(PORT, () => console.log(`Serveur en route sur le port ${PORT}`))