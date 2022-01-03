// 1. Création du serveur
const https = require("https")
// const express = require("express")

// Connection à la base de donnée Mongo DB
const connectionDB = require("./config/db")
connectionDB()

// J'appel mon application
const app = require("./app")

// Sur quel port écouter
const PORT = process.env.PORT || 3000

// Je créais mon seveur
const server = https.createServer(app)

// Ecoute sur le port
server.listen(PORT, () => console.log(`Serveur en route sur le port ${PORT}`))