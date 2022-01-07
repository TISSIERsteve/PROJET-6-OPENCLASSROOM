const express = require("express") // Besoin d'express pour pouvoir créer un router
const router = express.Router() // Avec la fonction Router() d'express on crée un router
const multer = require("../middleware/multer-config") //Middleware pour la gestion d'images

// Définir les chemins pour le router
const saucesCtrl = require("../controller/sauces") // Associer les routes aux controllers
const auth = require("../middleware/auth") // J'importe mon middleware pour proteger mes routes


router.get("/", auth, saucesCtrl.getAllSauces) // Routes pour récupérer les sauces au premier /
router.post("/", auth, multer, saucesCtrl.createSauce) // Enregistre l'image et l'envoi sur la base de donnée

module.exports = router