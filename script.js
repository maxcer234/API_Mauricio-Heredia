document.addEventListener('DOMContentLoaded', function() {
    const characterListElement = document.getElementById('character-list');

    function fetchRickAndMortyCharacters() {
        fetch('https://rickandmortyapi.com/api/character')
            .then(response => response.json())
            .then(data => {
                const characters = data.results;
                characters.forEach(character => {
                    const characterItem = document.createElement('div');
                    characterItem.className = 'character-item clearfix';
                    characterItem.innerHTML = `
                        <img src="${character.image}" alt="${character.name}" width="50">
                        <h3>${character.name}</h3>
                        <p>Location: ${character.location.name}</p>
                    `;
                    characterListElement.appendChild(characterItem);
                });
            })
            .catch(error => console.error('Error fetching data:', error));
    }

    fetchRickAndMortyCharacters();
});