// Carrega os dados ao carregar a página
document.addEventListener("DOMContentLoaded", () => {
    carregarRanking();
    carregarEquipas();
});

function carregarRanking() {
    const ranking = [
        { jogador: "João Silva", equipa: "Red Bull Racing", pontos: 120 },
        { jogador: "Ana Costa", equipa: "Mercedes-AMG", pontos: 115 },
        { jogador: "Carlos Santos", equipa: "Ferrari", pontos: 110 },
    ];

    const container = document.getElementById("ranking-container");
    ranking.forEach(item => {
        const div = document.createElement("div");
        div.classList.add("team-card");
        div.innerHTML = `
            <h3>${item.jogador}</h3>
            <p><strong>Equipa:</strong> ${item.equipa}</p>
            <p><strong>Pontos:</strong> ${item.pontos}</p>
        `;
        container.appendChild(div);
    });
}

function carregarEquipas() {
    const equipas = [
        "Red Bull Racing",
        "Mercedes-AMG",
        "Ferrari",
        "McLaren",
        "Aston Martin",
    ];

    const lista = document.getElementById("team-list");
    equipas.forEach(equipa => {
        const li = document.createElement("li");
        li.textContent = equipa;
        lista.appendChild(li);
    });
}
