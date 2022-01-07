const express = require("express") // Besoin d'express pour pouvoir créer un router
const router = express.Router() // Avec la fonction Router() d'express on crée un router
const multer = require("../middleware/multer-config") //Middleware pour la gestion d'images

// Définir les chemins pour le router
const auth = require("../middleware/auth") // Associe mon middleware pour proteger mes routes
const saucesCtrl = require("../controller/sauces") // Associe la route aux controllers

// ======================================= CRUD ======================================================
router.get("/", auth, saucesCtrl.getAllSauces) // Route pour récupérer toutes les sauces
router.get("/:id", auth, saucesCtrl.getOneSauce) // Route pour récupèrer sauce avec son id
router.post("/", auth, multer, saucesCtrl.createSauce) // Route pour enregistre l'image et l'envoi sur la base de donnée
module.exports = router