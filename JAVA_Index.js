

// Carregar Notícias (simuladas)
function carregarNoticias() {
    const noticias = [
        { titulo: "Verstappen conquista a pole no Bahrain", data: "2025-01-15" },
        { titulo: "Ferrari promete melhor desempenho em 2025", data: "2025-01-10" }
    ];
    const container = document.getElementById("news-container");
    noticias.forEach(noticia => {
        const div = document.createElement("div");
        div.classList.add("noticia");
        div.innerHTML = `<h3>${noticia.titulo}</h3><p>${noticia.data}</p>`;
        container.appendChild(div);
    });
}

// Carregar Pilotos
async function carregarPilotos() {
    const response = await fetch(`${apiBase}/drivers.json`);
    const data = await response.json();
    const pilotos = data.MRData.DriverTable.Drivers;

    const container = document.getElementById("pilots-container");
    pilotos.forEach(piloto => {
        const div = document.createElement("div");
        div.classList.add("piloto");
        div.innerHTML = `
            <h3>${piloto.givenName} ${piloto.familyName}</h3>
            <p>Nacionalidade: ${piloto.nationality}</p>
            <p>Data de Nascimento: ${piloto.dateOfBirth}</p>
        `;
        container.appendChild(div);
    });
}

// Carregar Calendário
async function carregarCalendario() {
    const response = await fetch(`${apiBase}.json`);
    const data = await response.json();
    const corridas = data.MRData.RaceTable.Races;

    const container = document.getElementById("calendar-container");
    corridas.forEach(corrida => {
        const p = document.createElement("p");
        p.textContent = `${corrida.raceName} - ${corrida.Circuit.circuitName} (${corrida.date})`;
        container.appendChild(p);
    });
}

// Carregar Classificações (exemplo estático)
function carregarClassificacoes() {
    const classificacoes = [
        { posicao: 1, piloto: "Max Verstappen", pontos: 395 },
        { posicao: 2, piloto: "Charles Leclerc", pontos: 320 }
    ];

    const tbody = document.getElementById("standings-table");
    classificacoes.forEach(classificacao => {
        const tr = document.createElement("tr");
        tr.innerHTML = `<td>${classificacao.posicao}</td><td>${classificacao.piloto}</td><td>${classificacao.pontos}</td>`;
        tbody.appendChild(tr);
    });
}

// Inicializar o site
document.addEventListener("DOMContentLoaded", () => {
    carregarNoticias();
    carregarPilotos();
    carregarCalendario();
    carregarClassificacoes();
});
function carregarNoticias() {
    const noticias = [
        {
            titulo: "Verstappen vence no Bahrain",
            data: "15-03-2025",
            descricao: "Max Verstappen dominou a corrida inaugural da temporada.",
            imagem: "https://via.placeholder.com/300x200"
        },
        {
            titulo: "Ferrari otimista para o GP da Austrália",
            data: "12-03-2025",
            descricao: "A equipa italiana promete grandes melhorias.",
            imagem: "https://via.placeholder.com/300x200"
        }
    ];

    const container = document.getElementById("news-container");
    noticias.forEach(noticia => {
        const noticiaEl = document.createElement("div");
        noticiaEl.classList.add("noticia");
        noticiaEl.innerHTML = `
            <img src="${noticia.imagem}" alt="${noticia.titulo}">
            <h3>${noticia.titulo}</h3>
            <p>${noticia.descricao}</p>
            <p><small>${noticia.data}</small></p>
        `;
        container.appendChild(noticiaEl);
    });
}

document.addEventListener("DOMContentLoaded", carregarNoticias);
async function carregarPilotos() {
    const response = await fetch("https://ergast.com/api/f1/current/drivers.json");
    const data = await response.json();
    const pilotos = data.MRData.DriverTable.Drivers;

    const container = document.getElementById("pilots-container");
    pilotos.forEach(piloto => {
        const pilotoEl = document.createElement("div");
        pilotoEl.classList.add("piloto");
        pilotoEl.innerHTML = `
            <h3>${piloto.givenName} ${piloto.familyName}</h3>
            <p>Data de nascimento: ${piloto.dateOfBirth}</p>
            <p>Nacionalidade: ${piloto.nationality}</p>
        `;
        container.appendChild(pilotoEl);
    });
}

document.addEventListener("DOMContentLoaded", carregarPilotos);
