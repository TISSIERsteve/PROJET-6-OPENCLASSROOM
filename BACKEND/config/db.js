// DB.JS sert à créer une fonction pour se connecter à mongoose
require("dotenv").config()

const mongoose = require("mongoose")

const connectDB = async () => {
    try {
        await mongoose.connect("mongodb+srv://stevetissier:123Kangoo123@cluster0.xr1ra.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"), {
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