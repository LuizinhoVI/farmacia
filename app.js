const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

// Configura o diretório de views e o motor de template
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Serve arquivos estáticos da pasta 'public'
app.use(express.static(path.join(__dirname, 'public')));


// Rota principal
app.get('/', (req, res) => {
  res.render('index', { nome: 'Mundo' }  ); // Passando variável para o EJS
});

// Inicia o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}/`);
});
