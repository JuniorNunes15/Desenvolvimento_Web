function gerarProdutos() {
    return new Promise((resolve, reject) => {
    setTimeout(() => {
        const numero = Math.floor(Math.random() * 100);
        if (numero % 2 === 0) {
        const produtos = Array.from({ length: 10 }, (_, i) => ({
            id: i + 1,
            nome: `Produto ${i + 1}`,
            tipo: ['Eletrônico', 'Roupas', 'Alimento'][i % 3],
            preco: Math.floor(Math.random() * 500 + 50)
        }));
        resolve(produtos);
        } else {
        reject({ res: "ERROR", msg: "ERRO NO SISTEMA (" + numero + ")" });
        }
    }, 4000);
    });
}

async function carregarProdutos() {
    try {
    const produtos = await gerarProdutos();

    const media = produtos.reduce((sum, p) => sum + p.preco, 0) / produtos.length;
    const maisCaro = Math.max(...produtos.map(p => p.preco));
    const maisBarato = Math.min(...produtos.map(p => p.preco));

    let tabela = `
        <table>
        <thead>
            <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Tipo</th>
            <th>Preço</th>
            </tr>
        </thead>
        <tbody>
    `;

    for (const produto of produtos) {
        let classe = '';
        if (produto.preco > media) classe += 'acima-media ';
        if (produto.preco === maisCaro) classe += 'mais-caro ';
        if (produto.preco === maisBarato) classe += 'mais-barato ';

        tabela += `
        <tr class="${classe}">
            <td>${produto.id}</td>
            <td>${produto.nome}</td>
            <td>${produto.tipo}</td>
            <td>R$ ${produto.preco.toFixed(2)}</td>
        </tr>
        `;
    }

    tabela += `
        </tbody>
        </table>
        <p><strong>Média de Preços:</strong> R$ ${media.toFixed(2)}</p>
    `;

    document.getElementById('output').innerHTML = tabela;

    } catch (error) {
    document.getElementById('output').innerHTML = `
        <p class="erro">Erro: ${error.msg}</p>
    `;
    }
}

carregarProdutos();