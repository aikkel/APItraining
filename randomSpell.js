async function getRandomSpell() {
    const spellsResponse = await fetch("https://www.dnd5eapi.co/api/spells/");
    const spellsData = await spellsResponse.json();
    
    const spells = spellsData.results;
    const randomIndex = Math.floor(Math.random() * spells.length);
    const randomSpell = spells[randomIndex];
  
    const spellDetailsResponse = await fetch(`https://www.dnd5eapi.co${randomSpell.url}`);
    const spellDetailsData = await spellDetailsResponse.json();
  
    // Extract additional spell information
    const spellName = spellDetailsData.name;
    const spellLevel = spellDetailsData.level;
    const spellRange = spellDetailsData.range;
    const spellComponents = spellDetailsData.components;
    // You can add more properties as needed

    // Update HTML to display the random spell info
    document.getElementById("spell-name").textContent = `Random Spell: ${spellName}`;
    document.getElementById("spell-level").textContent = `Level: ${spellLevel}`;
    document.getElementById("spell-range").textContent = `Range: ${spellRange}`;
    document.getElementById("spell-components").textContent = `Components: ${spellComponents.join(", ")}`;
    // You can add more elements to display other properties

    console.log(`Random Spell: ${spellName}`);
    console.log(`Level: ${spellLevel}`);
    console.log(`Range: ${spellRange}`);
    console.log(`Components: ${spellComponents.join(", ")}`);
}

// Remove this line to prevent it from running on page load
// getRandomSpell();
