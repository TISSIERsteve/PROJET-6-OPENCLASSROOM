const Sauce = require("../models/Sauce") // Je récupère mon model sauce

// ======================================= CREATION SAUCE ==============================================
exports.createSauce = (req, res, next) => {

    // Je stocke les données dans une const
    const sauceObject = JSON.parse(req.body.sauce)
    // Je supprime id généré automatiquement on gardera celui crée par mongo db
    delete sauceObject._id
    // On crée virtuellement une instance sauce 
    const sauce = new Sauce({
        ...sauceObject,
        // On modifie url en la rendant dynamique
        imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`,
    })
    // J'enregistre avec save
    sauce.save()
        // Réponse du front
        .then(() => res.status(201).json({ message: "Sauce enregistrée" }))
        // Erreur si problème
        .catch(error => res.status(400).json({ error }))
}

// ====================================== RECUPERER SAUCE ==========================================
exports.getAllSauces = (req, res, next) => {
    Sauce.find()
        .then(sauces => res.status(200).json(sauces))
        .catch(error => res.status(400).json({ error }))
}