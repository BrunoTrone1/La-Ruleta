const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

// Configurar el motor de vistas como EJS
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "../views"));

// Servir archivos estáticos (CSS, JS, etc.)
app.use(express.static(path.join(__dirname, "../public")));

// Ruta principal
app.get("/", (req, res) => {
  res.render("index"); // Renderiza la plantilla EJS `index.ejs`
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
