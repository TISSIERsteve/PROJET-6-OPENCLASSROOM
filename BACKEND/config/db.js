// DB.JS sert à créer une fonction pour se connecter à mongoose
const mongoose = require("mongoose") //Plugin pour se connecter à la base de donnée
require("dotenv").config() // Masque les infos de connexion à la base de données à l'aide de variables d'environnements

// Fonction qui appel mongo db
const connectDB = async () => {
    try {
        await mongoose.connect("mongodb://localhost:27017"), {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }

        console.log("MongoDB vous etes connecter avec succes");
    } catch (error) {
        console.log("MongoDB échec de la connection");
        process.exit(1);
    }
}

module.exports = connectDB;