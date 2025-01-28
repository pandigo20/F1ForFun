document.addEventListener("DOMContentLoaded", carregarNoticias);

function carregarNoticias() {
    const noticias = [
        {
            titulo: "Verstappen conquista vitória épica",
            descricao: "Uma corrida emocionante com grandes ultrapassagens.",
            imagem: "https://via.placeholder.com/300x200",
        },
        {
            titulo: "Hamilton desafia os limites",
            descricao: "O piloto britânico mostrou todo o seu talento.",
            imagem: "https://via.placeholder.com/300x200",
        },
    ];

    const container = document.getElementById("news-container");
    noticias.forEach((noticia) => {
        const div = document.createElement("div");
        div.classList.add("noticia");
        div.innerHTML = `
            <img src="${noticia.imagem}" alt="${noticia.titulo}">
            <h3>${noticia.titulo}</h3>
            <p>${noticia.descricao}</p>
        `;
        container.appendChild(div);
    });
}
