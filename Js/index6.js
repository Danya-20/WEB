function catchPokemon(pokemonId) {
    const pokemon = document.getElementById(pokemonId);
    const catchMessage = document.getElementById('catchMessage');

    // Анімація ловлі покемона
    pokemon.style.animation = 'catchPokemonAnimation 1s forwards';
    
    setTimeout(() => {
        pokemon.innerHTML = '<img src="https://cdn-icons-png.flaticon.com/512/188/188918.png" alt="Caught!">';
        
        catchMessage.textContent = `You caught ${capitalize(pokemonId)}!`;
        catchMessage.style.display = 'block';

        setTimeout(() => {
            // Відновлюємо початковий вигляд покемона
            const pokemonImage = getPokemonImage(pokemonId);
            pokemon.innerHTML = `<img src="${pokemonImage}" alt="${capitalize(pokemonId)}">`;
            catchMessage.style.display = 'none';
            pokemon.style.animation = ''; // Скидаємо анімацію
        }, 3000);
    }, 1000);
}

function getPokemonImage(pokemonId) {
    const images = {
        pokemon1: "https://img.pokemondb.net/sprites/black-white/anim/normal/pikachu.gif",
        pokemon2: "https://img.pokemondb.net/sprites/black-white/anim/normal/bulbasaur.gif",
        pokemon3: "https://img.pokemondb.net/sprites/black-white/anim/normal/charmander.gif"
    };
    return images[pokemonId];
}

function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}
