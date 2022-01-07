const mongoose = require("mongoose") // Pour la création d'un model on à besoin de mongoose

// Sert à ne pas avoir plusieurs utilsateurs avec la même adresse mail avec unique
const uniqueValidator = require("mongoose-unique-validator")

// ===================================== NOUVEL UTILISATEUR ============================================
// Authenfication utilisateur 
// Avec unique il sera impossible de s'inscrire plusieurs
// fois avec la même adresse mail
const userSchema = mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        match: [/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/, "Veuillez entrer une adresse email correcte"]
    },
    password: {
        type: String,
        required: [true, "Veuillez choisir un mot de passe"]
    }
})

// Avec uniqueValidator on aura un email unique par user
userSchema.plugin(uniqueValidator)

// J'exporte le schéma pour être utilsé pour vérification
module.exports = mongoose.model("User", userSchema)