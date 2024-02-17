

export const POKEMONS = [
    { name: 'vaporeon', type: 'water' },
    { name: 'charmander', type: 'fire' },
    { name: 'bulbasaur', type: 'grass' },
    { name: 'pikachu', type: 'electric' },
    { name: 'dewgong', type: 'ice' },
    { name: 'jigglypuff', type: 'fairy' },
    { name: 'snorlax', type: 'normal' },
    { name: 'golem', type: 'rock' },
    { name: 'gengar', type: 'ghost' },
    { name: 'umbreon', type: 'dark' },
    { name: 'ekans', type: 'poison' },
    { name: 'mewtwo', type: 'psychic' },
  ];
  

export const BACKGROUND_TYPES = {
    water: {
        background1: 'hsla(173, 89%, 70%, 1)',
        background2: 'radial-gradient(circle, hsla(173, 89%, 70%, 1) 0%, hsla(196, 68%, 38%, 1) 100%)',
        background3: '-moz-radial-gradient(circle, hsla(173, 89%, 70%, 1) 0%, hsla(196, 68%, 38%, 1) 100%);',
        background4: '-webkit-radial-gradient(circle, hsla(173, 89%, 70%, 1) 0%, hsla(196, 68%, 38%, 1) 100%)',
        filter: 'progid:DXImageTransform.Microsoft.gradient(startColorstr="#6FF7E8",endColorstr="#1F7EA1",GradientType=1)',
    },
    fire: {
        background1: 'hsla(51, 89%, 70%, 1)',
        background2: 'radial-gradient(circle, hsla(51, 89%, 70%, 1) 0%, hsla(28, 87%, 48%, 1) 100%)',
        background3: '-moz-radial-gradient(circle, hsla(51, 89%, 70%, 1) 0%, hsla(28, 87%, 48%, 1) 100%);',
        background4: '-webkit-radial-gradient(circle, hsla(51, 89%, 70%, 1) 0%, hsla(28, 87%, 48%, 1) 100%)',
        filter: 'progid:DXImageTransform.Microsoft.gradient(startColorstr="#F7E36F",endColorstr="#E67410",GradientType=1)',
    },
    grass: {
        background1: 'hsla(98, 89%, 70%, 1)',
        background2: 'radial-gradient(circle, hsla(98, 89%, 70%, 1) 0%, hsla(109, 88%, 19%, 1) 100%)',
        background3: '-moz-radial-gradient(circle, hsla(98, 89%, 70%, 1) 0%, hsla(109, 88%, 19%, 1) 100%);',
        background4: '-webkit-radial-gradient(circle, hsla(98, 89%, 70%, 1) 0%, hsla(109, 88%, 19%, 1) 100%)',
        filter: 'progid:DXImageTransform.Microsoft.gradient(startColorstr="#A1F76F",endColorstr="#165B06",GradientType=1)',
    },
    electric: {
        background1: 'hsla(56, 58%, 91%, 1)',
        background2: 'radial-gradient(circle, hsla(56, 58%, 91%, 1) 0%, hsla(53, 100%, 50%, 1) 100%)',
        background3: '-moz-radial-gradient(circle, hsla(56, 58%, 91%, 1) 0%, hsla(53, 100%, 50%, 1) 100%);',
        background4: '-webkit-radial-gradient(circle, hsla(56, 58%, 91%, 1) 0%, hsla(53, 100%, 50%, 1) 100%)',
        filter: 'progid:DXImageTransform.Microsoft.gradient(startColorstr="#F5F3D9",endColorstr="#FFE100",GradientType=1)',
    },
    ice: {
        background1: 'hsla(0, 0%, 100%, 1)',
        background2: 'radial-gradient(circle, hsla(0, 0%, 100%, 1) 0%, hsla(182, 68%, 82%, 1) 100%)',
        background3: '-moz-radial-gradient(circle, hsla(0, 0%, 100%, 1) 0%, hsla(182, 68%, 82%, 1) 100%);',
        background4: '-webkit-radial-gradient(circle, hsla(0, 0%, 100%, 1) 0%, hsla(182, 68%, 82%, 1) 100%)',
        filter: 'progid:DXImageTransform.Microsoft.gradient(startColorstr="#FFFFFF",endColorstr="#B0EEF0",GradientType=1)',
    },
    fairy: {
        background1: 'hsla(0, 100%, 94%, 1)',
        background2: 'radial-gradient(circle, hsla(0, 100%, 94%, 1) 0%, hsla(0, 60%, 75%, 1) 100%)',
        background3: '-moz-radial-gradient(circle, hsla(0, 100%, 94%, 1) 0%, hsla(0, 60%, 75%, 1) 100%);',
        background4: '-webkit-radial-gradient(circle, hsla(0, 100%, 94%, 1) 0%, hsla(0, 60%, 75%, 1) 100%)',
        filter: 'progid:DXImageTransform.Microsoft.gradient(startColorstr="#FFE2E2",endColorstr="#E69A9A",GradientType=1)'
    },
    normal: {
        background1: 'hsla(216, 100%, 80%, 1)',
        background2: 'radial-gradient(circle, hsla(216, 100%, 80%, 1) 0%, hsla(221, 55%, 26%, 1) 100%)',
        background3: '-moz-radial-gradient(circle, hsla(216, 100%, 80%, 1) 0%, hsla(221, 55%, 26%, 1) 100%);',
        background4: '-webkit-radial-gradient(circle, hsla(216, 100%, 80%, 1) 0%, hsla(221, 55%, 26%, 1) 100%)',
        filter: 'progid:DXImageTransform.Microsoft.gradient(startColorstr="#99C2FF",endColorstr="#1E3567",GradientType=1)',
    },
    dark: {
        background1: 'hsla(0, 0%, 38%, 1)',
        background2: 'radial-gradient(circle, hsla(0, 0%, 38%, 1) 0%, hsla(0, 0%, 0%, 1) 100%)',
        background3: '-moz-radial-gradient(circle, hsla(0, 0%, 38%, 1) 0%, hsla(0, 0%, 0%, 1) 100%);',
        background4: '-webkit-radial-gradient(circle, hsla(0, 0%, 38%, 1) 0%, hsla(0, 0%, 0%, 1) 100%)',
        filter: 'progid:DXImageTransform.Microsoft.gradient(startColorstr="#626262",endColorstr="#000000",GradientType=1)',
    },
    poison: {
        background1: 'hsla(48, 100%, 75%, 1)',
        background2: 'radial-gradient(circle, hsla(48, 100%, 75%, 1) 0%, hsla(270, 100%, 21%, 1) 87%)',
        background3: '-moz-radial-gradient(circle, hsla(48, 100%, 75%, 1) 0%, hsla(270, 100%, 21%, 1) 87%);',
        background4: '-webkit-radial-gradient(circle, hsla(48, 100%, 75%, 1) 0%, hsla(270, 100%, 21%, 1) 87%)',
        filter: 'progid:DXImageTransform.Microsoft.gradient(startColorstr="#FFE682",endColorstr="#36006C",GradientType=1)',
    },
    ghost: {
        background1: 'hsla(276, 29%, 50%, 1)',
        background2: 'radial-gradient(circle, hsla(276, 29%, 50%, 1) 0%, hsla(270, 85%, 8%, 1) 100%)',
        background3: '-moz-radial-gradient(circle, hsla(276, 29%, 50%, 1) 0%, hsla(270, 85%, 8%, 1) 100%);',
        background4: '-webkit-radial-gradient(circle, hsla(276, 29%, 50%, 1) 0%, hsla(270, 85%, 8%, 1) 100%)',
        filter: 'progid:DXImageTransform.Microsoft.gradient(startColorstr="#885BA5",endColorstr="#140325",GradientType=1)',
    },
    rock: {
        background1: 'hsla(30, 26%, 61%, 1)',
        background2: 'radial-gradient(circle, hsla(30, 26%, 61%, 1) 0%, hsla(36, 93%, 17%, 1) 100%)',
        background3: '-moz-radial-gradient(circle, hsla(30, 26%, 61%, 1) 0%, hsla(36, 93%, 17%, 1) 100%);',
        background4: '-webkit-radial-gradient(circle, hsla(30, 26%, 61%, 1) 0%, hsla(36, 93%, 17%, 1) 100%)',
        filter: 'progid:DXImageTransform.Microsoft.gradient(startColorstr="#B59B81",endColorstr="#563503",GradientType=1)',
    },
    psychic: {
        background1: 'hsla(0, 0%, 86%, 1)',
        background2: 'radial-gradient(circle, hsla(0, 0%, 86%, 1) 0%, hsla(0, 0%, 99%, 1) 0%, hsla(259, 21%, 62%, 1) 91%)',
        background3: '-moz-radial-gradient(circle, hsla(0, 0%, 86%, 1) 0%, hsla(0, 0%, 99%, 1) 0%, hsla(259, 21%, 62%, 1) 91%);',
        background4: '-webkit-radial-gradient(circle, hsla(0, 0%, 86%, 1) 0%, hsla(0, 0%, 99%, 1) 0%, hsla(259, 21%, 62%, 1) 91%)',
        filter: 'progid:DXImageTransform.Microsoft.gradient(startColorstr="#DCDCDC",endColorstr="#FDFDFD",GradientType=1)',
    },
};


export type BackgroundTypeKey = keyof typeof BACKGROUND_TYPES;

