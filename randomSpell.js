async function getRandomSpell() {
    const spellsResponse = await fetch("https://www.dnd5eapi.co/api/spells/");
    const spellsData = await spellsResponse.json();
  
    const spells = spellsData.results;
    const randomIndex = Math.floor(Math.random() * spells.length);
    const randomSpell = spells[randomIndex];
  
    const spellDetailsResponse = await fetch(`https://www.dnd5eapi.co${randomSpell.url}`);
    const spellDetailsData = await spellDetailsResponse.json();
  
    const spellName = spellDetailsData.name;
    const spellDescription = spellDetailsData.desc;
  
    const spellDetailsElement = document.getElementById("spellDetails");
    spellDetailsElement.innerHTML = `<h2>Random Spell: ${spellName}</h2><p>Description: ${spellDescription}</p>`;
  }
  
  // Attach the getRandomSpell function to the button click event
  const generateSpellButton = document.getElementById("generateSpellButton");
  generateSpellButton.addEventListener("click", getRandomSpell);
  