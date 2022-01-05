// Besoin express pour fonctionner
const express = require("express")

// Pour donner le chemin à node pour les images
const path = require("path")

// J'appel express pour permettre de créer une application express
const app = express()

// Accéder au corps de la requête en json avec req.body
app.use(express.json())

// Sécurité pour recevoir api serveur CORS
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

// Je déclare mes routes
// Importer les routes
const userRoutes = require("./routes/user")
const saucesRoutes = require("./routes/sauces")


// Enregistrer les routes avec leur chemin
// Route nouvel utilisateur
app.use("/api/auth", userRoutes)

// Route sauces
app.use("/api/sauces", saucesRoutes)

// Création d'une sauce dans la base de donnée
app.use("/images", express.static(path.join(__dirname, "images")))

module.exports = app