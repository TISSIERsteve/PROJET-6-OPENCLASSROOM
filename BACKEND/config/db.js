// DB.JS sert à créer une fonction pour se connecter à mongoose
require("dotenv").config()

const mongoose = require("mongoose")

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