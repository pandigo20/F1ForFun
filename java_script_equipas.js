document.addEventListener("DOMContentLoaded", () => {
    const teams = [
        {
            name: "Red Bull",
            pilots: ["Max Verstappen", "Liam Lawson", "Isack Hadjar"]
        },
        {
            name: "Ferrari",
            pilots: ["Charles Leclerc", "Lewis Hamilton"]
        },
        {
            name: "Mercedes",
            pilots: ["George Russell", "Andrea Kimi Antonelli"]
        },
        {
            name: "McLaren",
            pilots: ["Lando Norris", "Oscar Piastri"]
        },
        {
            name: "Aston Martin",
            pilots: ["Fernando Alonso", "Lance Stroll"]
        },
        {
            name: "Alpine",
            pilots: ["Pierre Gasly", "Jack Doohan"]
        },
        {
            name: "Haas",
            pilots: ["Oliver Bearman", "Esteban Ocon"]
        },
        {
            name: "Williams",
            pilots: ["Alexander Albon", "Carlos Sainz"]
        },
        {
            name: "Sauber",
            pilots: ["Nico Hülkenberg", "Gabriel Bortoleto"]
        }
    ];

    const teamsContainer = document.getElementById("teams-container");

    teams.forEach(team => {
        const teamElement = document.createElement("div");
        teamElement.classList.add("team");

        const teamTitle = document.createElement("h2");
        teamTitle.textContent = team.name;
        teamElement.appendChild(teamTitle);

        const button = document.createElement("button");
        button.textContent = "Mostrar Pilotos";
        button.onclick = () => togglePilots(teamElement);
        teamElement.appendChild(button);

        const pilotsList = document.createElement("ul");
        pilotsList.style.display = "none";
        team.pilots.forEach(pilot => {
            const pilotItem = document.createElement("li");
            pilotItem.textContent = pilot;
            pilotsList.appendChild(pilotItem);
        });
        teamElement.appendChild(pilotsList);

        teamsContainer.appendChild(teamElement);
    });
});

function togglePilots(teamElement) {
    const pilotsList = teamElement.querySelector("ul");
    const button = teamElement.querySelector("button");

    if (pilotsList.style.display === "none" || pilotsList.style.display === "") {
        pilotsList.style.display = "block";
        button.textContent = "Ocultar Pilotos";
    } else {
        pilotsList.style.display = "none";
        button.textContent = "Mostrar Pilotos";
    }
}
