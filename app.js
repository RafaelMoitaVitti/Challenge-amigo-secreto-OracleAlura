let ListaAmigos = [];

function adicionarAmigo() {
    let nomeDoAmigo = document.querySelector('input').value.trim(); //remover espaços extras

    // Inseri uma validação para que não fosse permitido digitar números no campo de nome pois ele estava aceitando normalmente.
    if (nomeDoAmigo === '' || !/^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/.test(nomeDoAmigo)) {
      alert('OPS!!! Insira um nome válido (apenas letras e espaços)');
      return;
    }

    // Adiciona o nome na lista
    ListaAmigos.push(nomeDoAmigo);

    // Atualiza a exibição da lista
    atualizarLista();

    // Limpa o campo de entrada
    limparCampo();
}

function atualizarLista() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = ''; // Limpa a lista antes de adicionar os itens novamente

    for (let i = 0; i < ListaAmigos.length; i++) {
        let li = document.createElement('li');
        li.innerText = ListaAmigos[i];
        lista.appendChild(li);
    }
}

// nessa função condicionamos que: se o usuário digitar apenas 1 nome o sorteio não sera feito, é exigido pelo menos dois nomes para que o sorteio seja feito.
function sortearAmigo() {
    if (ListaAmigos.length < 2) {
        alert('Por favor, insira pelo menos dois nomes para que o sorteio seja feito');
        return;
    }

    let amigoSecreto = ListaAmigos[Math.floor(Math.random() * ListaAmigos.length)];
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `Amigo sorteado: <strong>${amigoSecreto}</strong>`;

    //limpa a lista após o sorteio
    ListaAmigos = [];
    atualizarLista();
}

function limparCampo() {
    let nomeDoAmigo = document.querySelector('input');
    nomeDoAmigo.value = '';
}