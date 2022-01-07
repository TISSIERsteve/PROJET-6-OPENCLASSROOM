const express = require("express") // Besoin d'express pour pouvoir créer un router
const router = express.Router() // Avec la fonction Router() d'express on crée un router
// const auth = require("../middleware/auth") // J'importe mon middleware pour proteger mes routes
const userCtrl = require("../controller/user") // J'importe mes routes de controller pour associer les fonctions aux différentes routes

// ========================================= ROUTES ====================================================
router.post("/signup", userCtrl.signup) // Route pour créer un user
router.post("/login", userCtrl.login) // Route pour connecter user


module.exports = router