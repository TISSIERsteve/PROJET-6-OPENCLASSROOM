// require("dotenv").config()
const express = require("express")

// Importer les routes
// const userRoutes = require("./routes/user")


const app = express()
app.use(express.json())

// J'enregistre mes routes
// app.use("/api/auth")

module.exports = app