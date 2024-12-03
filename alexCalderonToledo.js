const entrenadores = [
    {
        nombre: "Entrenador 1",
        equipo: [
            { nombre: "Charizard", nivel: 25, tipo: "Fuego" },
            { nombre: "Blastoise", nivel: 22, tipo: "Agua" },
            { nombre: "Venusaur", nivel: 28, tipo: "Planta" },
            { nombre: "Pikachu", nivel: 30, tipo: "Eléctrico" },
            { nombre: "Machamp", nivel: 27, tipo: "Pelea" },
            { nombre: "Gengar", nivel: 26, tipo: "Fantasma" }
        ]
    },
    {
        nombre: "Entrenador 2",
        equipo: [
            { nombre: "Typhlosion", nivel: 29, tipo: "Fuego" },
            { nombre: "Feraligatr", nivel: 32, tipo: "Agua" },
            { nombre: "Meganium", nivel: 33, tipo: "Planta" },
            { nombre: "Raichu", nivel: 34, tipo: "Eléctrico" },
            { nombre: "Lucario", nivel: 31, tipo: "Pelea" },
            { nombre: "Mimikyu", nivel: 35, tipo: "Fantasma" }
        ]
    },
    {
        nombre: "Entrenador 3",
        equipo: [
            { nombre: "Arcanine", nivel: 36, tipo: "Fuego" },
            { nombre: "Swampert", nivel: 37, tipo: "Agua" },
            { nombre: "Sceptile", nivel: 38, tipo: "Planta" },
            { nombre: "Electivire", nivel: 39, tipo: "Eléctrico" },
            { nombre: "Gallade", nivel: 40, tipo: "Pelea" },
            { nombre: "Banette", nivel: 41, tipo: "Fantasma" }
        ]
    },
    {
        nombre: "Entrenador 4",
        equipo: [
            { nombre: "Infernape", nivel: 42, tipo: "Fuego" },
            { nombre: "Empoleon", nivel: 43, tipo: "Agua" },
            { nombre: "Torterra", nivel: 44, tipo: "Planta" },
            { nombre: "Luxray", nivel: 45, tipo: "Eléctrico" },
            { nombre: "Conkeldurr", nivel: 46, tipo: "Pelea" },
            { nombre: "Cofagrigus", nivel: 47, tipo: "Fantasma" }
        ]
    },
    {
        nombre: "Entrenador 5",
        equipo: [
            { nombre: "Blaziken", nivel: 48, tipo: "Fuego" },
            { nombre: "Samurott", nivel: 49, tipo: "Agua" },
            { nombre: "Serperior", nivel: 50, tipo: "Planta" },
            { nombre: "Zebstrika", nivel: 51, tipo: "Eléctrico" },
            { nombre: "Mienshao", nivel: 52, tipo: "Pelea" },
            { nombre: "Chandelure", nivel: 53, tipo: "Fantasma" }
        ]
    }
];

// Desafío 1: Pokémon con Mayor y Menor Nivel

const HighestAndLowestLevelPokemon = () => {
    let highLevel = { nivel: 0 }
    let lowLevel = { nivel: 100 }

    entrenadores.forEach(entrenador => {
        
        team = entrenador.equipo
        team.forEach(pokemon => {
            if (pokemon.nivel > highLevel?.nivel) {
                highLevel = { ...pokemon }
            }else if(pokemon.nivel < lowLevel?.nivel) {
                lowLevel = { ...pokemon }
            }
        })
    });

    return { highLevel, lowLevel }
};

const {highLevel, lowLevel} = HighestAndLowestLevelPokemon()

// Desafío 2: Buscador
const Searcher = (string) => {
    pokemons = entrenadores.flatMap((entrenador) => entrenador.equipo)
    return pokemons.filter((pokemon) => pokemon.nombre.toLowerCase().indexOf(string.toLowerCase()) > -1)
}

Searcher('ch')

// Desafío 3: Tipo con Promedio de Nivel Más Alto
const HighestAverageLevelType = () => {
    const pokemons = entrenadores.flatMap((entrenador) => entrenador.equipo)
    const typeHash = pokemons.reduce((acc, pokemon) => {
        const key = pokemon.tipo

        if(!acc[key]) {
            acc[key] = []
        }

        acc[key].push(pokemon)

        return acc
    }, {})

    let typeAverageLevel = ''
    let highestAverageLevel = 0

    Object.keys(typeHash).forEach((type) => {
        amountByType = typeHash[type].length
        sumByLevel = typeHash[type].reduce((acc, pokemon) => {
            return acc + pokemon.nivel
        }, 0)

        averageLevel = sumByLevel/amountByType
        
        if (averageLevel > highestAverageLevel) {
            highestAverageLevel = averageLevel
            typeAverageLevel = type
        }
    })

    return typeAverageLevel
}

HighestAverageLevelType()