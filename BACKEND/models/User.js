const mongoose = require("mongoose")

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
        unique: true
    },
    password: {
        type: String,
        required: true
    }
})

// Avec uniqueValidator on pourra pas avoir plusieurs
// utilisateurs avec la même adresse mail et unique
userSchema.plugin(uniqueValidator)

module.exports = mongoose.model("User", userSchema)