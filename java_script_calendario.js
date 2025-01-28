document.addEventListener("DOMContentLoaded", carregarCalendario);

function carregarCalendario() {
    

    const container = document.getElementById("calendar-container");
    corridas.forEach((corrida) => {
        const div = document.createElement("div");
        div.classList.add("corrida-card");
        div.innerHTML = `
            <h3>${corrida.circuito}</h3>
            <p>Data: ${corrida.data}</p>
        `;
        container.appendChild(div);
    });
}
