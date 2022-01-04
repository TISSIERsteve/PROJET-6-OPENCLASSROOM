// Besoin d'express pour pouvoir créer un router
const express = require("express")

// Avec la fonction Router() d'express
const router = express.Router()

// J'importe mes routes de controller pour associer les fonctions aux différentes routes
const userCtrl = require("../controller/user")

// Je créer mes routes post pour user
router.post("/signup", userCtrl.signup)

module.exports = router