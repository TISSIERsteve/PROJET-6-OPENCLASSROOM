// Bcrypt crypter le mot de passe
const bcrypt = require("bcrypt")

// ===================================== NOUVEL UTILISATEUR ============================================
// J'importe mon modele User pour lire le model
const User = require("../models/User")

// Fonction middleware d'identification pour création d'un nouvel utilisateur
// Avec ce mot de passe va créer un nouveau user et enregistrer dans notre base de donnée
exports.signup = (req, res, next) => {
    // Hacher le mot de passe en premier avec 10 tours d'algorithme
    bcrypt.hash(req.body.password, 10)
        .then(hash => {
            // Je récupère un nouveau user crypter
            const user = new User({
                email: req.body.email,
                password: hash
            })

            // J'utilise save pour l'engistrer l'user crypter dans la base de donnée
            user.save()
                .then(() => res.status(201).json({ message: "Utilisateur créé !" }))
                .catch(error => res.status(400).json({ error }))
        })
        .catch(error => res.status(500).json({ error }))
}

// ================================== CONNECTER UTILISATEUR EXISTANT ====================================
// Fonction middleware pour connecter des utilisateurs existants
// exports.login = (req, res, next) => {

// };

