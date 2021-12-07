document.addEventListener('DOMContentLoaded', function() {
  const botao = document.querySelector('.botao-enviar');

  botao.addEventListener('click', function() {
    const tipo_produto = document.getElementById('entrada1').value;
    const nome_produto = document.getElementById('entrada2').value;

    const estoque = JSON.parse(localStorage.getItem('estoque'))
    console.log('Tipo', tipo_produto)
    console.log('Nome', nome_produto)
    console.log(Object.keys(estoque))
    if ([...Object.keys(estoque)].includes(tipo_produto)) {
      const categoria = estoque[tipo_produto]
      const indexProduto = categoria.findIndex(p => p[0] === nome_produto)
      if (indexProduto > 0) {
        if (estoque[tipo_produto][indexProduto][1] == 1) {
          estoque[tipo_produto].splice(indexProduto, 1)
        } else {
          estoque[tipo_produto][indexProduto] = [categoria[indexProduto][0], categoria[indexProduto][1]-1];
        }
        localStorage.setItem('estoque', JSON.stringify(estoque))
        document.location = './estoque.html'
      } else {
        alert('Produto inexistente!')
      }
    } else {
      alert('Categoria inexistente!')
    }
  })
})
