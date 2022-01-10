const Sauce = require("../models/Sauce") // Je récupère mon model des likes

// =========================================== LIKE =====================================================
exports.createLike = (req, res, next) => {
    // Je récupère sauce avec son
    Sauce.findOne({
        _id: req.params.id
    })
        .then(sauce => {
            // Si like aime
            if (req.body.like == 1) {
                sauce.likes++
                sauce.userLiked.push(req.body.userId)
                sauce.save()
            }
            // Si annule son like
            else if (req.body.like == 0) {
                sauce.like--
                sauce.userLiked.push(req.body.userId)
                sauce.save()
            }
            // si like n'aime pas
            if (req.body.like == -1) {
                sauce.dislikes++
                sauce.userDisliked.push((req.body.userId))
                sauce.save()
            }
            console.log("like ajouter");
            res.status(200).json({ message: "Like ajouter" })
        })
        .catch(error => {
            console.log("like refuser");
            res.status(500).json({ message: "erreur sur le like" })
        })
}
