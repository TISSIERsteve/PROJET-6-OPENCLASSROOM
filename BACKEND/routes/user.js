// Besoin d'express pour pouvoir créer un router
const express = require("express")

// Avec la fonction Router() d'express
const router = express.Router()

// J'importe mon middleware pour proteger mes routes
const auth = require("../middleware/auth")

// J'importe mes routes de controller pour associer les fonctions aux différentes routes
const userCtrl = require("../controller/user")

// ========================================= ROUTES ====================================================
// Route pour créer un user
router.post("/signup", userCtrl.signup)

// Route pour vérifier user si existant
router.post("/login", userCtrl.login)


module.exports = router