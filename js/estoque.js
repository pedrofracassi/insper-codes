/*
document.addEventListener('DOMContentLoaded', function() {
    produtos_existentes = querySelectorAll('.principal');
    produtos = produtos_existentes.innerHTML;
    coluna_esp = produto.querySelectorAll('.coluna1')
    
    i = 0;
    for (produto of produtos) {
        i++
        if (produto == localStorage.getItem('nome_tipo_produto')) {
            coluna = colunas_esp[i];
            for (item of itens) {
                if (item == localStorage.getItem('nome_item')) {

                }
            }
        }
   
})
*/

const estoquePadrao = {
    'Shampoo': [
        ['Ivone', 15],
        ['Loreal', 10],
        ['Seda', 5]
    ],
    'Condicionador': [
        ['Ivone', 10],
        ['Loreal', 5],
        ['Seda', 15]
    ],
    'Tinta de Cabelo': [
        ['Vermelho queimado', 10],
        ['Loiros brilhantes', 5],
        ['Preto azulado', 15],
        ['Leila', 20]
    ]
}



const templateCategoria = (nome, conteudo) => {
    return `
        <ul class = "rapaz">
            <li>
                <details>
                    <summary class = "principal">
                        ${nome}
                    </summary>
                    <ul class="nomezinhos">
                        <li>
                            <div class="linha1">
                                <div class="coluna1">
                                    ${conteudo.map(c => `<h2>${c[0]}</h2>`).join('')}
                                </div>
                                <div class="coluna1">
                                ${conteudo.map(c => `<h3>x${c[1]}</h3>`).join('')}
                                </div>      
                            </div>
                        </li>
                    </ul>
                </details>
            </li>
        </ul>
    `
}

document.addEventListener('DOMContentLoaded', () => {
    if (!localStorage.getItem('estoque')) {
        localStorage.setItem('estoque', JSON.stringify(estoquePadrao))
    }

    document.getElementById('estoque').innerHTML = Object.entries(JSON.parse(localStorage.getItem('estoque'))).map(([nome, conteudo]) => templateCategoria(nome, conteudo)).join('')
})
