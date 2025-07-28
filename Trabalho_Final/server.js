const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());
app.use(express.static('public'));

let animais = [
    { id: 1, nome: "Rex", especie: "Cachorro", idade: 5, adotado: false },
    { id: 2, nome: "Mimi", especie: "Gato", idade: 3, adotado: false },
    { id: 3, nome: "Zé", especie: "Papagaio", idade: 7, adotado: false }
];

let proximoId = 4;

// Listar
app.get('/api/animais', (req, res) => {
    // Animais adotados sempre no final
    const ordenado = [...animais].sort((a, b) => a.adotado - b.adotado);
    res.json(ordenado);
});

// Adicionar
app.post('/api/animais', (req, res) => {
    const { nome, especie, idade } = req.body;
    if (!nome || !especie || idade === undefined) {
        return res.status(400).json({ erro: 'Dados incompletos' });
    }
    const novo = { id: proximoId++, nome, especie, idade: parseInt(idade), adotado: false };
    animais.push(novo);
    res.status(201).json(novo);
});

// Deletar
app.delete('/api/animais/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const animal = animais.find(a => a.id === id);
    if (animal?.adotado) {
        return res.status(403).json({ erro: 'Animal já adotado não pode ser excluído' });
    }
    animais = animais.filter(animal => animal.id !== id);
    res.json({ mensagem: 'Animal deletado' });
});

// Adotar
app.post('/api/adotar/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const { adotante, contato } = req.body;

    const animal = animais.find(a => a.id === id);
    if (!animal || animal.adotado) {
        return res.status(400).json({ erro: 'Animal inválido ou já adotado' });
    }

    animal.adotado = true;
    animal.adotadoPor = { nome: adotante, contato };

    res.json({ mensagem: 'Animal adotado com sucesso' });
});

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
