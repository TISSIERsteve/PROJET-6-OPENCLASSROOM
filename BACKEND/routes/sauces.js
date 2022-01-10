const express = require("express") // Besoin d'express pour pouvoir créer un router
const router = express.Router() // Avec la fonction Router() d'express on crée un router
const multer = require("../middleware/multer-config") //Middleware pour la gestion d'images

// Définir les chemins pour le router
const auth = require("../middleware/auth") // Associe mon middleware pour proteger mes routes
const saucesCtrl = require("../controller/sauces") // Associe la route sauce aux controllers
const likeCtrl = require("../controller/like") // Associe la route like aux controllers

// ======================================= CRUD ======================================================
router.post("/", auth, multer, saucesCtrl.createSauce) // Route pour enregistre l'image et l'envoi sur la base de donnée
router.put("/:id", auth, saucesCtrl.modifySauce) //Route pour mettre à jour sauce avec son id
router.delete("/:id", auth, saucesCtrl.deleteSauce) //Route pour supprimer sauce avec son id
router.get("/:id", auth, saucesCtrl.getOneSauce) // Route pour récupèrer sauce avec son id
router.get("/", auth, saucesCtrl.getAllSauces) // Route pour récupérer toutes les sauces
router.post("/:id/like", auth, likeCtrl.createLike) // Route pour like les sauces

module.exports = router