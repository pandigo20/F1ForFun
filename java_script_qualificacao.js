// Lista de pilotos com suas informações
const pilotos = [
    {posicao: 1, nome: 'Max Verstappen', equipa: 'Red Bull', pontos: 300},
    {posicao: 2, nome: 'Liam Lawson', equipa: 'Red Bull', pontos: 250},
    {posicao: 3, nome: 'Charles Leclerc', equipa: 'Ferrari', pontos: 220},
    {posicao: 4, nome: 'Lewis Hamilton', equipa: 'Ferrari', pontos: 215},
    {posicao: 5, nome: 'George Russell', equipa: 'Mercedes', pontos: 210},
    {posicao: 6, nome: 'Andrea Kimi Antonelli', equipa: 'Mercedes', pontos: 190},
    {posicao: 7, nome: 'Lando Norris', equipa: 'McLaren', pontos: 180},
    {posicao: 8, nome: 'Oscar Piastri', equipa: 'McLaren', pontos: 170},
    {posicao: 9, nome: 'Fernando Alonso', equipa: 'Aston Martin', pontos: 160},
    {posicao: 10, nome: 'Lance Stroll', equipa: 'Aston Martin', pontos: 150},
    {posicao: 11, nome: 'Nico Hülkenberg', equipa: 'Sauber', pontos: 140},
    {posicao: 12, nome: 'Gabriel Bortoleto', equipa: 'Sauber', pontos: 130},
    {posicao: 13, nome: 'Pierre Gasly', equipa: 'Alpine', pontos: 120},
    {posicao: 14, nome: 'Jack Doohan', equipa: 'Alpine', pontos: 110},
    {posicao: 15, nome: 'Oliver Bearman', equipa: 'Haas', pontos: 100},
    {posicao: 16, nome: 'Esteban Ocon', equipa: 'Haas', pontos: 90},
    {posicao: 17, nome: 'Alexander Albon', equipa: 'Williams', pontos: 80},
    {posicao: 18, nome: 'Carlos Sainz', equipa: 'Williams', pontos: 70},
    {posicao: 19, nome: 'Yuki Tsunoda', equipa: 'RB', pontos: 60},
    {posicao: 20, nome: 'Isack Hadjar', equipa: 'RB', pontos: 50}
];

// Lista de construtores com suas informações
const construtores = [
    {posicao: 1, nome: 'Red Bull', pontos: 600},
    {posicao: 2, nome: 'Mercedes', pontos: 550},
    {posicao: 3, nome: 'Ferrari', pontos: 450},
    {posicao: 4, nome: 'McLaren', pontos: 400},
    {posicao: 5, nome: 'Aston Martin', pontos: 350},
    {posicao: 6, nome: 'Sauber', pontos: 300},
    {posicao: 7, nome: 'Alpine', pontos: 250},
    {posicao: 8, nome: 'Haas', pontos: 200},
    {posicao: 9, nome: 'Williams', pontos: 150},
    {posicao: 10, nome: 'RB', pontos: 100}
];

// Função para preencher a tabela de pilotos
function preencherTabelaPilotos() {
    const tabelaPilotos = document.getElementById('tabela-pilotos');
    pilotos.forEach(piloto => {
        const linha = document.createElement('tr');
        linha.innerHTML = `
            <td>${piloto.posicao}º</td>
            <td>${piloto.nome}</td>
            <td>${piloto.equipa}</td>
            <td>${piloto.pontos}</td>
        `;
        tabelaPilotos.appendChild(linha);
    });
}

// Função para preencher a tabela de construtores
function preencherTabelaConstrutores() {
    const tabelaConstrutores = document.getElementById('tabela-construtores');
    construtores.forEach(construtor => {
        const linha = document.createElement('tr');
        linha.innerHTML = `
            <td>${construtor.posicao}º</td>
            <td>${construtor.nome}</td>
            <td>${construtor.pontos}</td>
        `;
        tabelaConstrutores.appendChild(linha);
    });
}

// Chamando as funções para preencher as tabelas quando a página for carregada
window.onload = function() {
    preencherTabelaPilotos();
    preencherTabelaConstrutores();
};
