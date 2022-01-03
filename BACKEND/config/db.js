require("dotenv").config()
// DB.JS sert à créer une fonction pour se connecter à mongoose
const mongoose = require("mongoose")

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })

        console.log("MongoDB vous etes connecter avec succes");
    } catch (error) {
        console.log("MongoDB échec de la connection");
        process.exit(1);
    }
}

module.exports = connectDB;