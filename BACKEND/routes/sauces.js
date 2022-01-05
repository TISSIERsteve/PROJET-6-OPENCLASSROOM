// Besoin d'express pour pouvoir créer un router
const express = require("express")
const multer = require("../middleware/multer-config")

// Avec la fonction Router() d'express
const router = express.Router()

// Associer les routes aux controllers
const saucesCtrl = require("../controller/sauces")

// J'importe mon middleware pour proteger mes routes
const auth = require("../middleware/auth")

// Routes pour récupérer les sauces au premier /
router.get("/", auth, saucesCtrl.getAllSauces)

// Enregistre l'image et l'envoi sur la base de donnée
router.post("/", auth, multer, saucesCtrl.createSauce)

module.exports = router