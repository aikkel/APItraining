function getSpell() {
    const spellName = document.getElementById("spell-name").value;
    const apiUrl = `https://www.dnd5eapi.co/api/spells/?name=${spellName}`;
    
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            if (data.results.length > 0) {
                const spellUrl = data.results[0].url;
                return fetch(`https://www.dnd5eapi.co${spellUrl}`);
            } else {
                throw new Error("Spell not found");
            }
        })
        .then(response => response.json())
        .then(data => displaySpellDetails(data))
        .catch(error => console.error(error));
}

function displaySpellDetails(data) {
    const spellInfo = document.getElementById("spell-info");
    console.log(data);
    
    if (data && data.name) {
        spellInfo.innerHTML = `
            <h2>${data.name}</h2>
            <p><strong>Level:</strong> ${data.level}</p>
            <p><strong>School:</strong> ${data.school ? data.school.name : "N/A"}</p>
            <p><strong>Casting Time:</strong> ${data.casting_time}</p>
            <p><strong>Attack type:</strong> ${data.attack_type}</p>
            <p><strong>Damage:</strong> ${data.higher_level}</p>
            <p><strong>Range:</strong> ${data.range}</p>
            <p><strong>Components:</strong> ${data.components ? data.components.join(", ") : "N/A"}</p>
            <p><strong>Duration:</strong> ${data.duration}</p>
            <p><strong>Description:</strong> ${data.desc ? data.desc.join("<br>") : "No description available"}</p>
        `;
    } else {
        spellInfo.innerHTML = "Spell not found";
    }
}
