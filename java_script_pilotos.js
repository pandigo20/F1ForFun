document.addEventListener("DOMContentLoaded", carregarPilotos);

function carregarPilotos() {
    const pilotos = [
        { nome: "Max Verstappen", equipa: "Red Bull", imagem: "https://via.placeholder.com/150" },
        { nome: "Lewis Hamilton", equipa: "Ferrari", imagem: "https://via.placeholder.com/150" },
        { nome: "Charles Leclerc", equipa: "Ferrari", imagem: "https://via.placeholder.com/150" },
    ];

    const container = document.getElementById("pilots-container");
    pilotos.forEach((piloto) => {
        const div = document.createElement("div");
        div.classList.add("piloto-card");
        div.innerHTML = `
            <img src="${piloto.imagem}" alt="${piloto.nome}">
            <h3>${piloto.nome}</h3>
            <p>Equipa: ${piloto.equipa}</p>
        `;
        container.appendChild(div);
    });
}
