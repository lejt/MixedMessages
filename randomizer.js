/*
Mixed Messages Project 
task: MMORPG RANDOM JOB ASSIGNMENT GENERATOR
coder: lejt
*/

// think of different categories to output lines of random output
// job, starting stats, weapon, passive skill, elemental affinity

// list of all elements in which the randomizer can pull items out of

const job = ['job', 'knight', 'mage', 'archer', 'mercenary', 'adventurer', 'merchant', 'assassin'];
const weapon = ['weapon', 'one-handed sword', 'two-handed claymore', 'compound bow', 'magic tome', 'spear', 'knuckles', 'dagger'];
const element = ['element', 'white magic', 'dark magic', 'wind', 'earth', 'fire', 'water', 'ice', 'electricity'];
const passive = ['passsive', 'energy drain', 'increase healing', 'increase mana regen', 'increase crit strike', 'reduce dmg taken', 'analyze', 'equipment creation', 'potion creation'];
const stats = {
    str: undefined,
    agi: undefined,
    dex: undefined,
    int: undefined,
    vit: undefined
};

const character = {
    'job': ['knight', 'mage', 'archer', 'mercenary', 'adventurer', 'merchant', 'assassin'],
    'weapon': ['one-handed sword', 'two-handed claymore', 'compound bow', 'magic tome', 'spear', 'knuckles', 'dagger'],
    'element': ['white magic', 'dark magic', 'wind', 'earth', 'fire', 'water', 'ice', 'electricity'],
    'passive': ['energy drain', 'increase healing', 'increase mana regen', 'increase crit strike', 'reduce dmg taken', 'analyze', 'equipment creation', 'potion creation'],
    'stats': {
        'str': undefined,
        'agi': undefined,
        'dex': undefined,
        'int': undefined,
        'vit': undefined
    }

};

const statRandom = () => {
    let num = Math.floor(Math.random()*20);
    return num;
};

const selectRandom = (list) => {
    let num = Math.floor(Math.random()*(list.length));
    return num
};

const assignClass = (char) => {
    console.log('Oh great one! Welcome to the world of Leyvaria!');
    console.log('     You have been summoned from your world to this one through our spacial magic.');
    console.log('     Your adventure begins, but first, let me bestow upon you some of my powers so that you are well-equipped for this world.');
    console.log('**********************************************')

    console.log(`Assigned job: ${character.job[selectRandom(character.job)]}`);
    console.log(`Assigned weapon: ${character.weapon[selectRandom(character.weapon)]}`);
    console.log(`Assigned element: ${character.element[selectRandom(character.element)]}`);
    console.log(`Assigned passive: ${character.passive[selectRandom(character.passive)]}`);

};

const assignStats = () => {
    console.log('**********************************************');
    console.log('Starting character stats:');
    for (let stat in stats) {
        console.log(stat +': '+ statRandom());
    }
};

const farewell = () => {
    console.log('**********************************************');
    console.log('Good luck on your life in Leyvaria!')
}




assignClass(character);
assignStats();
farewell();