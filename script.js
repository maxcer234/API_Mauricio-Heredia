document.addEventListener('DOMContentLoaded', () => {
    const characterListElement = document.getElementById('character-list');

    const fetchRickAndMortyCharacters = async () => {
        try {
            const response = await fetch('https://rickandmortyapi.com/api/character');
            const data = await response.json();
            const characters = data.results;

            characters.forEach(character => {
                const characterItem = document.createElement('div');
                characterItem.className = 'character-item';
                characterItem.innerHTML += `
                    <img src="${character.image}" alt="${character.name}">
                    <h3>${character.name}</h3>
                    <p>Location: ${character.location.name}</p>
                `;
                characterListElement.appendChild(characterItem);
            });
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    fetchRickAndMortyCharacters();
});