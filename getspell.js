function getSpell() {
    const spellName = document.getElementById("spell-name").value;
    const apiUrl = `https://www.dnd5eapi.co/api/spells/?name=${spellName}`;
    
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => displaySpell(data))
        .catch(error => console.error(error));
}

function displaySpell(data) {
    const spellInfo = document.getElementById("spell-info");
    spellInfo.innerHTML = `
        <h2>${data.name}</h2>
        <p><strong>Level:</strong> ${data.level}</p>
        <p><strong>School:</strong> ${data.school.name}</p>
        <p><strong>Casting Time:</strong> ${data.casting_time}</p>
        <p><strong>Range:</strong> ${data.range}</p>
        <p><strong>Components:</strong> ${data.components.join(", ")}</p>
        <p><strong>Duration:</strong> ${data.duration}</p>
        <p><strong>Description:</strong> ${data.desc.join("<br>")}</p>
    `;
}
