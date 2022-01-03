// Authenfication utilisateur
const mongoose = require("mongoose")
const uniqueValidator = require("mongoose-unique-validator")

const userSchema = mongoose.Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }
})

// Avec uniqueValidator on pourra pas avoir plusieurs
// utilisateurs avec la même adresse mail
userSchema.plugin(uniqueValidator)

module.exports = mongoose.model("User", userSchema)