const express = require("express") // Besoin express pour fonctionner
const app = express() // J'appel express pour permettre de créer une application express
const path = require("path") // Pour donner le chemin à node pour les images et permet de travailler entre le chemin et le répertoire7

app.use(express.urlencoded({ extended: true })) //Middleware permet de passer des requêtes envoyés par le client et y accéder par req.body

app.use(express.json()) // Accéder au corps de la requête en json avec req.body

app.use((req, res, next) => { // Sécurité pour recevoir api serveur CORS
    res.setHeader('Access-Control-Allow-Origin', '*');
    // Indique les ressources qui peuvent être partager
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    // Indique les méthodes autorisées pour les requêtes http
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    // Autorise le serveur à fournir les scripts pour la page
    next();
});

// Middleware qui permet de charger les fichiers qui sont dans le répertoire images
app.use("/images", express.static(path.join(__dirname, "images"))) // Création d'une sauce dans la base de donnée

// ============================== DECLARATION DE MES ROUTES ============================================
const userRoutes = require("./routes/user") // Importer routes user
const saucesRoutes = require("./routes/sauces") // Importer route création sauce

// Enregistrer les routes avec leur chemin
app.use("/api/auth", userRoutes) // Route connection ou authentification utilisateur
app.use("/api/sauces", saucesRoutes) // Route sauces

module.exports = app