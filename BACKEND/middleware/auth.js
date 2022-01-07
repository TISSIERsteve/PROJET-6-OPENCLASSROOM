const jwt = require("jsonwebtoken") // Je vérifie les token 

// Vérification du token s'il correspond
// Middleware de sécuristion de toutes les routes
module.exports = (req, res, next) => {
    try {
        // Je récupère le headers de la requête
        const token = req.headers.authorization.split(' ')[1]
        // Je vérifie le token décodé
        const decodeToken = jwt.verify(token, `${process.env.JWT_SECRET}`)
        // Je vérifie que le userId est égal au userId décodé avec le token
        const userId = decodeToken.userId
        // Vérification si correspond pas
        if (req.body.userId && req.body.userId !== userId) {
            throw "User ID non valable !" // Erreur si correspond pas
        } else {
            // Si bon au passe au prochain avec next
            next()
        }
        // Problème si autre erreur
    } catch (error) {
        res.status(401).json({ error: error | "Requête non authentifiéé" })
    }
}