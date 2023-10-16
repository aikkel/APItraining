async function getRandomSpell() {
    const spellsResponse = await fetch("https://www.dnd5eapi.co/api/spells/");
    const spellsData = await spellsResponse.json();

    const spells = spellsData.results;
    const randomIndex = Math.floor(Math.random() * spells.length);
    const randomSpell = spells[randomIndex];

    const spellDetailsResponse = await fetch(`https://www.dnd5eapi.co${randomSpell.url}`);
    const spellDetailsData = await spellDetailsResponse.json();

    // Extract all the spell information
    const spellName = spellDetailsData.name;
    const spellLevel = spellDetailsData.level;
    const spellRange = spellDetailsData.range;
    const spellComponents = spellDetailsData.components ? spellDetailsData.components.join(", ") : "N/A";
    const spellDescription = spellDetailsData.desc ? spellDetailsData.desc.join("<br>") : "No description available";
    // You can add more properties as needed

    // Update HTML to display the random spell info
    document.getElementById("spell-name").innerHTML = `<h2>${spellName}</h2>`;
    document.getElementById("spell-level").textContent = `Level: ${spellLevel}`;
    document.getElementById("spell-range").textContent = `Range: ${spellRange}`;
    document.getElementById("spell-components").textContent = `Components: ${spellComponents}`;
    document.getElementById("spell-description").innerHTML = `Description: ${spellDescription}`;
    // You can add more elements to display other properties
}
