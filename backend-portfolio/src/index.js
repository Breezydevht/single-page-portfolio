import express from "express";
import mongoose from "mongoose";
import cors from "cors";

import LinkRoutes from "./routes/LinkRoutes.js";

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Rutas
app.get("/", (req, res) => {
  res.send("🚀 Bienvenido a la API de mi Portfolio");
});

app.use("/api/links", LinkRoutes);

// Conectar DB y levantar server
const uri = "mongodb+srv://mckalister509:cvrlnrzmn58wVxGM@portfoliobreezydev.j85v5qe.mongodb.net/PortfilioBdev";
mongoose.connect(uri)
  .then(() => {
    console.log("✅ Conectado a MongoDB");
    app.listen(5000, () => console.log("Servidor en http://localhost:5000"));
  })
  .catch(err => console.error("❌ Error al conectar DB:", err));