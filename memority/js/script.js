let dimension = 150;

const filenames = [
    'Cruelty','Curiosity','Falsity',
    'Lovity','Moggity','MonsterVerity',
    'Obesity','Verity','VerityCreepyOpen',
    'VerityDispleased'
];
const images = filenames.map(name => `./images/${name}.webp`);

console.log(images);