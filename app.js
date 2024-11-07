const express = require('express');
const app = express();
const port = 3000;

// Configurar EJS como motor de template
app.set('view engine', 'ejs');
app.set('views', './views');

// Servir arquivos estáticos da pasta "public"
app.use(express.static('public'));

// Rota principal
app.get('/', (req, res) => {
    res.render('index', {  });
});

// Iniciar o servidor
app.listen(port, () => {
    console.log(`Servidor rodando em http://0.0.0.0:${port}`);
});
