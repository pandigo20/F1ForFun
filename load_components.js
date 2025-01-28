function carregarComponente(url, elementoId) {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', url, true);

  xhr.onload = function () {
    if (this.status === 200) {
      document.getElementById(elementoId).innerHTML = this.responseText;
    } else {
      console.error(`Erro ao carregar ${url}: ${this.status} ${this.statusText}`);
    }
  };

  xhr.onerror = function () {
    console.error(`Erro de conexão ao carregar ${url}.`);
  };

  xhr.send();
}

// Chamar as funções para carregar os componentes
carregarComponente('Navbar.html', 'navbar');
carregarComponente('rodape.html', 'rodape');
