const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());
app.use(express.static('public'));

// Nomes para ter apenas alguns exemplos de alunos na memoria
let alunos = [
    { id: 1, nome: "Miina", curso: "SayoPony", ira: 10.0 },
    { id: 2, nome: "Sora", curso: "Kingdom Hearts", ira: 9.9 },
    { id: 3, nome: "Felps", curso: "'_'", ira: 9.5 },
    { id: 4, nome: "Unicorn", curso: "HMS", ira: 10.0 }
];

let proximoId = 5;

//Listar
app.get('/api/alunos', (req, res) => {
    res.json(alunos);
});

//Adicionar
app.post('/api/alunos', (req, res) => {
    const { nome, curso, ira } = req.body;
    if (!nome || !curso || ira === undefined) {
        return res.status(400).json({ erro: 'Dados incompletos' });
    }
    const novoAluno = { id: proximoId++, nome, curso, ira: parseFloat(ira) };
    alunos.push(novoAluno);
    res.status(201).json(novoAluno);
});

//Deletar
app.delete('/api/alunos/:id', (req, res) => {
    const id = parseInt(req.params.id);
    alunos = alunos.filter(aluno => aluno.id !== id);
    res.json({ mensagem: 'Aluno deletado (MEDO)' });
});

//Servidor
app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});
