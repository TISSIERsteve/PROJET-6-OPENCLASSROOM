
// 1. Création du serveur
// const https = require("https")
const express = require("express")
// Connection à la base de donnée Mongo DB
const connectionDB = require("./config/db")
connectionDB()

// const app = require("./app")
const app = express()
// Sur quel port écouter
const PORT = process.env.PORT || 3000
// const server = https.createServer(app)

app.listen(PORT, () => console.log(`Serveur en route sur le port ${PORT}`))