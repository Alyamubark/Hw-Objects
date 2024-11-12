
const pokemon7 = [
    { number: 1, name: "Bulbasaur", type: "Grass/Poison", HP: 45, starter: true },
    { number: 4, name: "Charmander", type: "Fire", HP: 39, starter: true },
    { number: 7, name: "Squirtle", type: "Water", HP: 44, starter: true },
    { number: 25, name: "Pikachu", type: "Electric", HP: 35, starter: true },
    { number: 59, name: "Arcanine", type: "Fire", HP: 90, starter: false },
];

console.dir(pokemon7, { maxArrayLength: null });

const pokemon2 = [ 
    { number: 1, name: "Bulbasaur", type: "Grass/Poison", HP: 45, starter: true },
    { number: 4, name: "Charmander", type: "Fire", HP: 39, starter: true },
    { number: 7, name: "Squirtle", type: "Water", HP: 44, starter: true },
    { number: 25, name: "Pikachu", type: "Electric", HP: 35, starter: true },
    { number: 59, name: "Arcanine", type: "Fire", HP: 90, starter: false },
];

const game4 = {
party: [],
gyms:[
    { name: "Pewter Gym", completed: false },
    { name: "Cerulean Gym", completed: false },
    { name: "Vermilion Gym", completed: false }, 


],

items:[

    { name: "Pokeball", quantity: 10 },
    { name: "Potion", quantity: 5 },
    { name: "Rare Candy", quantity: 2 },

]

};
console.log(game4);


/*
Exercise 3
1. Add a new property to the `game` object. Let's call it "difficulty".
2. Choose a value for "difficulty" that you think fits the game. Ex: "Easy", "Med" or "Hard". How would you assign it?


Solve Exercise 3 here:
*/

const pokemon3 = [
    { number: 1, name: "Bulbasaur", type: "Grass/Poison", HP: 45, starter: true },
    { number: 4, name: "Charmander", type: "Fire", HP: 39, starter: true },
    { number: 7, name: "Squirtle", type: "Water", HP: 44, starter: true },
    { number: 25, name: "Pikachu", type: "Electric", HP: 35, starter: true },
    { number: 59, name: "Arcanine", type: "Fire", HP: 90, starter: false }
];

const game1 = {
    party: [],
    gyms: [
        { name: "Pewter Gym", completed: false },
        { name: "Cerulean Gym", completed: false },
        { name: "Vermilion Gym", completed: false }
    ],
    items: [
        { name: "Pokeball", quantity: 10 },
        { name: "Potion", quantity: 5 },
        { name: "Rare Candy", quantity: 2 }
    ]
};

console.log(game1); 

/*
Exercise 4
1. Select a starter Pokémon from the `pokemon` array. Remember, a starter Pokémon's `starter` property is true.
2. Add this Pokémon to the `game.party` array. Which array method will you use to add them?


Solve Exercise 4 here:
*/

let pokemon4 = [
    { name: 'Pikachu', starter: false },
    { name: 'Charmander', starter: true },
    { name: 'Bulbasaur', starter: false },
  ];
  
  let game2 = {
    party: []
  };
  
  const starterPokemon3= pokemon4.find(pokemon => pokemon.starter === true);
  console.log(starterPokemon3);
  
  game2.party.push(starterPokemon3);
  
  console.log(game2.party);


/*
Exercise 5
1. Choose three more Pokémon from the `pokemon` array and add them to your party.
2. Consider different attributes like 'type' or 'HP' for your selection. Which array method will you use to add them?


Solve Exercise 5 here:
*/


let pokemon5 = [
    { name: 'Pikachu', starter: false, type: 'Electric', hp: 35 },
    { name: 'Charmander', starter: true, type: 'Fire', hp: 39 },
    { name: 'Bulbasaur', starter: false, type: 'Grass', hp: 45 },
    { name: 'Squirtle', starter: false, type: 'Water', hp: 44 },
    { name: 'Jigglypuff', starter: false, type: 'Fairy', hp: 115 },
  ];
  
  let game3 = {
    party: []
  };
  
  const selectedPokemon = pokemon5.filter(pokemon => pokemon.type === 'Fire' || pokemon.hp > 40);
  game3.party.push(...selectedPokemon);
  
  console.log(game3.party);

/*
Exercise 6
1. Set the `completed` property to true for gyms with a difficulty below 3.
2. Think about how you'd loop through the `gyms` array to check and update the `completed` property.


Solve Exercise 6 here:
*/

let gyms = [
    { name: 'Pewter City Gym', difficulty: 2, completed: false },
    { name: 'Cerulean City Gym', difficulty: 3, completed: false },
    { name: 'Vermilion City Gym', difficulty: 1, completed: false },
    { name: 'Celadon City Gym', difficulty: 4, completed: false }
  ];
  
  gyms.forEach(gym => {
    if (gym.difficulty < 3) {
      gym.completed = true;
    }
  });
  
  console.log(gyms);


  /*
Exercise 7
1. Evolve the starter Pokémon you added to your party earlier. Each starter Pokémon evolves into a specific one.
2. How would you replace the current starter Pokémon in your party with its evolved form?

Hint: 
  - Pokemon 1: Bulbasaur evolves into Pokemon 2: Ivysaur
  - Pokemon 4: Charmander evolves into Pokemon 5: Charmeleon
  - Pokemon 7: Squirtle evolves into Pokemon 8: Wartortle
  - Pokemon 25: Pikachu evolves into Pokemon 26: Raichu

More Hints: The existing starter Pokemon will be *replaced* in your party with the Pokemon it evolved into. When working with an array of objects, the splice() array method is ideal for replacing one element with another. 


Solve Exercise 7 here:
*/

let pokemon8 = [
  { name: 'Bulbasaur', starter: true, evolved: 'Ivysaur' },
  { name: 'Ivysaur', starter: false },
  { name: 'Charmander', starter: true, evolved: 'Charmeleon' },
  { name: 'Charmeleon', starter: false },
  { name: 'Squirtle', starter: true, evolved: 'Wartortle' },
  { name: 'Wartortle', starter: false },
  { name: 'Pikachu', starter: true, evolved: 'Raichu' },
  { name: 'Raichu', starter: false }
];

let game = {
  party: [
    { name: 'Charmander', starter: true, evolved: 'Charmeleon' }
  ]
};


if (game.party.length > 0 && game.party[0].evolved) {
  const starterPokemon = game.party[0];
const evolvedPokemon = pokemon8.find(p => p.name === starterPokemon.evolved);

if (evolvedPokemon) {
    game.party.splice(0, 1, evolvedPokemon);
  }
}

console.log(game.party);

/*
Exercise 8
1. Print the name of each Pokémon in your party.
2. Consider using a loop or an array method to access each Pokémon's name.

Solve Exercise 8 here:
*/

const pokemonParty = [" Bulbasaur","Charmander","Squirtle","Pikachu"];
for(let i=0; i<pokemonParty.length; i++){
console.log(pokemonParty[i]);
}

/*
Exercise 9
1. Can you print out all the starter Pokémon from the `pokemon` array?
2. Think about how you can identify a starter Pokémon and then log their names.


Solve Exercise 9 here:
*/


const pokemon = ["Pikachu", "Bulbasaur", "Charmander", "Squirtle", "Eevee", "Jigglypuff"];

const starters = ["Bulbasaur", "Charmander", "Squirtle"];

for (let i = 0; i < pokemon.length; i++) {
  if (starters.includes(pokemon[i])) {
    console.log(pokemon[i]);
  }
}


/*
Exercise 10
Create a method called `catchPokemon` and add it to the `game` object. You should not need to edit the original game object directly. This method should:
  - Accept an object as a parameter called `pokemonObj`
  - Add the `pokemonObj` to the `game.party` array.
  - not return anything

After writing this method, call it and pass in a Pokemon object of your choice from the `pokemon` data to catch it.

Solve Exercise 10 here:
*/


const game5 = {
  party: [],
  catchPokemon(pokemonObj) {
    this.party.push(pokemonObj);
  }
};

const pokemon9 = [
  { name: "Bulbasaur", generation: 1 },
  { name: "Charmander", generation: 1 },
  { name: "Squirtle", generation: 1 },
  { name: "Pikachu", generation: 1 },
  { name: "Eevee", generation: 1 },
  { name: "Snorlax", generation: 1 },
  { name: "Jigglypuff", generation: 1 },
  { name: "Meowth", generation: 1 },
  { name: "Zubat", generation: 1 }
];

game5.catchPokemon(pokemon9[0]);

console.log(game5.party);

/*
Exercise 11
1. Copy the `catchPokemon` method that you just wrote above, and paste it below. Modify it so that it also decreases the number of pokeballs in your inventory each time you catch a Pokémon.
2. How will you find and update the quantity of pokeballs in the `game.items` array?

Tips:
For this exercise, it's okay to have a negative number of pokeballs.
After updating the method, call it and pass in a Pokemon object of your choice from the `pokemon` data to catch it.
Also, log the `game.items` array to confirm that the pokeball quantity is being decremented.

Solve Exercise 11 here:
*/

const game6 = {
  party: [],
  items: [
    { name: "Pokéball", quantity: 10 },
    { name: "Potion", quantity: 5 },
    { name: "Revive", quantity: 2 }
  ],
  catchPokemon(pokemonObj) {
    this.party.push(pokemonObj);
    const pokeball = this.items.find(item => item.name === "Pokéball");
    if (pokeball) {
      pokeball.quantity--;
    }
  }
};

const pokemon10 = [
  { name: "Bulbasaur", generation: 1 },
  { name: "Charmander", generation: 1 },
  { name: "Squirtle", generation: 1 },
  { name: "Pikachu", generation: 1 },
  { name: "Eevee", generation: 1 },
  { name: "Snorlax", generation: 1 },
  { name: "Jigglypuff", generation: 1 },
  { name: "Meowth", generation: 1 },
  { name: "Zubat", generation: 1 }
];

game6.catchPokemon(pokemon10[0]);

console.log(game6.items);

/*
Exercise 12
1. Similar to Exercise 6, now complete gyms with a difficulty below 6. How will you approach this?
 (change the value of `complete` in the qualifying objects from false to true).

Solve Exercise 12 here:
*/

const gyms2 = [
  { name: "Pewter City Gym", difficulty: 5, complete: false },
  { name: "Cerulean City Gym", difficulty: 6, complete: false },
  { name: "Vermilion City Gym", difficulty: 4, complete: false },
  { name: "Celadon City Gym", difficulty: 7, complete: false },
  { name: "Fuchsia City Gym", difficulty: 3, complete: false }
];

gyms2.forEach(gym => {
  if (gym.difficulty < 6) {
    gym.complete = true;
  }
});

console.log(gyms2);

/*
Exercise 13
1. Create a `gymStatus` method in `game` to tally completed and incomplete gyms.
2. How will you iterate through the `gyms` array and update the tally? Remember to log the final tally.

This method should:
  - Not accept any arguments.
  - Initially create a constant `gymTally`, which is an object that has two 
    properties: `completed` and `incomplete`, both of which are initially set to 0.
  - Iterate through the objects in the `game.gyms` array and update the 
    properties on `gymTally` as follows: 
    - `completed` should count how many gyms in the array have a value of `true` 
      for their `completed` property. 
    - `incomplete` should count how many gyms in the array have a value of 
      `false` for their `completed` property.
  - Log the value of `gymTally`.
  - The method should not return anything.

For example, if five gym objects have a value of `true` on their `completed` property and three gym objects have a value of `false` on their `completed` property, the logged value would be: `{ completed: 5, incomplete: 3 }`.

Solve Exercise 13 here:
*/
const game7 = {
  gyms3: [
    { name: "Pewter City Gym", difficulty: 5, complete: true },
    { name: "Cerulean City Gym", difficulty: 6, complete: false },
    { name: "Vermilion City Gym", difficulty: 4, complete: true },
    { name: "Celadon City Gym", difficulty: 7, complete: false },
    { name: "Fuchsia City Gym", difficulty: 3, complete: true }
  ],
  gymStatus() {
    const gymTally = { completed: 0, incomplete: 0 };
    
    this.gyms3.forEach(gym => {
      if (gym.complete) {
        gymTally.completed++;
      } else {
        gymTally.incomplete++;
      }
    });
    
    console.log(gymTally);
  }
};

game7.gymStatus();

/*
Exercise 14
1. Add a `partyCount` method to `game` that counts the number of Pokémon in your party.

This method should:
  - Not accept any arguments.
  - Count the number of Pokemon in the party.
  - return the found number of Pokemon in the party.

Solve Exercise 14 here:
*/

const game8 = {
  party: [
    { name: "Pikachu", generation: 1 },
    { name: "Charmander", generation: 1 },
    { name: "Bulbasaur", generation: 1 }
  ],
  partyCount() {
    return this.party.length;
  }
};

console.log(game8.partyCount())


/*
Exercise 15
1. Now, complete gyms with a difficulty below 8. Reflect on how this is similar to or different from the previous gym exercises.
(change the value of `complete` in the qualifying objects from false to true).

Solve Exercise 15 here:
*/

const game9 = {
  gyms4: [
    { name: "Pewter City Gym", difficulty: 5, complete: false },
    { name: "Cerulean City Gym", difficulty: 6, complete: false },
    { name: "Vermilion City Gym", difficulty: 4, complete: false },
    { name: "Celadon City Gym", difficulty: 7, complete: false },
    { name: "Fuchsia City Gym", difficulty: 3, complete: false }
  ],
  completeGyms() {
    this.gyms4.forEach(gym => {
      if (gym.difficulty < 8) {
        gym.complete = true;
      }
    });
  }
};

game9.completeGyms();
console.log(game9.gyms4);


/*
Exercise 16
1. Log the entire `game` object to the console. Take a moment to review the changes you've made throughout the exercises.


Solve Exercise 16 here:
*/

const game10 = {
  gyms5: [
    { name: 'Pewter City Gym', difficulty: 5, complete: true },
    { name: 'Cerulean City Gym', difficulty: 6, complete: true },
    { name: 'Vermilion City Gym', difficulty: 4, complete: true },
    { name: 'Celadon City Gym', difficulty: 7, complete: true },
    { name: 'Fuchsia City Gym', difficulty: 3, complete: true }
  ],
  completeGyms() {
    this.gyms5.forEach(gym => {
      if (gym.difficulty < 8) {
        gym.complete = true;
      }
    });
  },
  party: [
    { name: 'Pikachu', generation: 1 },
    { name: 'Charmander', generation: 1 },
    { name: 'Bulbasaur', generation: 1 }
  ],
  partyCount() {
    return this.party.length;
  },
  gymStatus() {
    const gymTally = { completed: 0, incomplete: 0 };
    
    this.gyms5.forEach(gym => {
      if (gym.complete) {
        gymTally.completed++;
      } else {
        gymTally.incomplete++;
      }
    });
    
    console.log(gymTally);
  }
};

console.log(game10);
