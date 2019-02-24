const maxFitness = 10;

const pet = {
    name: 'Fido',
    age: 0,
    hunger: 0,
    fitness: 10,
    growUp: function() {
        this.age += 1;
    },
    walk: function() {
       if(fitness <= 6) {
        this.fitness += 4;
    } else 
    this.fitness = 10;
}
};

function Pet(name) {
    this.name = name;
    this.age = 0;
    this.hunger = 0;
    this.fitness = 10;
}

Pet.prototype.growUp = function() {
    this.age += 1;
    this.hunger += 5; 
    this.fitness -= 3;
}

Pet.prototype.walk = function() {
    if(this.fitness <= 6) {
        this.fitness += 4;
    } else 
    this.fitness = maxFitness;
};

module.exports = Pet;
