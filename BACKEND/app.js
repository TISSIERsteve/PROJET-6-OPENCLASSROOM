require("dotenv").config()
// const express = require("express")
// const userRoutes = require("./routes/user")

// Connection à MongoDB
const connectionDB = require("./config/db")
connectionDB()

// const app = express
// app.use(express.json())

// J'enregistre mes routes
// app.use("/api/auth", userRoutes)

// module.exports = app