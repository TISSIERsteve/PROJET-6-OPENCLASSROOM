const bcrypt = require("bcrypt") // Bcrypt crypter le mot de passe
const jwt = require("jsonwebtoken") // Permet de créer des token d'authentification à un utilisateur au moment de la connection

// ===================================== NOUVEL UTILISATEUR ============================================
const User = require("../models/User") // J'importe mon modele User pour lire le model

// Fonction middleware d'identification pour création d'un nouvel utilisateur
// Avec ce mot de passe va créer un nouveau user et enregistrer dans notre base de donnée
exports.signup = (req, res, next) => {
    // Hacher le mot de passe en premier avec 10 tours d'algorithme
    bcrypt.hash(req.body.password, 10)
        .then(hash => {
            // Je récupère un nouveau user crypter
            const user = new User({
                // On met m'email qu'il y a dans la requête
                email: req.body.email,
                // On récupère le hash de bcrypt
                password: hash
            })

            // J'utilise save pour l'engistrer l'user crypter dans la base de donnée
            user.save()
                .then(() => res.status(201).json({ message: "Utilisateur créé !" }))
                // Si user existe error 400
                .catch(error => res.status(400).json({ error }))
        })
        .catch(error => res.status(500).json({ error }))
}

// ================================== CONNECTER UTILISATEUR EXISTANT ====================================
// Fonction middleware pour connecter des utilisateurs existants
exports.login = (req, res, next) => {
    // Je récupère l'user qui corespond à la base de donnée
    User.findOne({
        email: req.body.email
    })
        .then(user => {
            if (!user) {
                // Si pas trouver user error 401
                return res.status(401).json({ error: "Utilsateur non trouvé !" })
            }
            // Je compare le hash entrer avec le hash de la base de donnéevavec bcrypt
            bcrypt.compare(req.body.password, user.password)
                .then(valid => {
                    // Si faux pas le bon user
                    if (!valid) {
                        return res.status(401).json({ error: "Mot de passe incorrect !" })
                    }
                    // Si c'est bon je lui renvoi status 200 avec user et token
                    res.status(200).json({
                        userId: user._id,
                        token: jwt.sign(
                            { userId: user._id },
                            `${process.env.JWT_SECRET}`,
                            { expiresIn: "24h" }
                        )
                    })
                })
                .catch(error => res.status(500).json({ error }))
        })
        .catch(error => res.status(500).json({ error }))
};

