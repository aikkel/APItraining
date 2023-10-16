async function getRandomSpell() {
    try {
        const spellsResponse = await fetch("https://www.dnd5eapi.co/api/spells/");
        const spellsData = await spellsResponse.json();
    
        const spells = spellsData.results;
        const randomIndex = Math.floor(Math.random() * spells.length);
        const randomSpell = spells[randomIndex];
      
        const spellDetailsResponse = await fetch(`https://www.dnd5eapi.co${randomSpell.url}`);
        const spellDetailsData = await spellDetailsResponse.json();
      
        // Get references to the HTML elements where you want to display the data
        const spellNameElement = document.getElementById('spell-name');
        const spellDescriptionElement = document.getElementById('spell-description');
        
        // Update the content of the HTML elements
        if (spellNameElement && spellDescriptionElement) {
            spellNameElement.textContent = `Random Spell: ${spellDetailsData.name}`;
            spellDescriptionElement.textContent = `Description: ${spellDetailsData.desc}`;
        } else {
            console.error('Elements not found in the HTML.');
        }
    } catch (error) {
        console.error('An error occurred while fetching and displaying the random spell:', error);
    }
}

// Call the function to get a random spell when the page loads
getRandomSpell();
