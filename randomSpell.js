// randomspell.js

// Function to fetch and display a random spell
function getRandomSpell() {
    // Fetch the list of available spells from the API
    fetch("https://www.dnd5eapi.co/api/spells/")
        .then(response => response.json())
        .then(data => {
            if (data.results && data.results.length > 0) {
                const randomIndex = Math.floor(Math.random() * data.results.length);
                const randomSpell = data.results[randomIndex];

                // Fetch the details of the randomly selected spell
                return fetch(randomSpell.url);
            } else {
                throw new Error("No spells found in the API.");
            }
        })
        .then(response => response.json())
        .then(data => displayRandomSpell(data))
        .catch(error => console.error(error));
}

// Function to display the details of the randomly selected spell
function displayRandomSpell(spell) {
    const spellInfo = document.getElementById("spell-info");

    if (spell) {
        spellInfo.innerHTML = `
            <h2>${spell.name}</h2>
            <p><strong>Description:</strong> ${spell.desc ? spell.desc.join("<br>") : "No description available"}</p>
        `;
    } else {
        spellInfo.innerHTML = "Spell not found";
    }
}
