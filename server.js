const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Ruta a los archivos compilados
const distPath = path.join(__dirname, 'dist/mi-portafolio/browser');

// Servir archivos estaticos
app.use(express.static(distPath));

// Para SPA: cualquier ruta que no sea archivo, devuelve index.html
app.use((req, res) => {
  res.sendFile(path.join(distPath, 'index.html'));
});

app.listen(PORT, () => {
  console.log('Servidor corriendo en http://localhost:' + PORT);
});