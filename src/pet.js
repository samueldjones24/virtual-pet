const maxFitness = 10;
const minHunger = 0;

function Pet(name) {
    this.name = name;
    this.age = 0;
    this.hunger = 0;
    this.fitness = 10;
}

Pet.prototype = {
    get isAlive() {
        return this.fitness > 0 && this.hunger < 10 && this.age < 30 ? true : false;
    }
};

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

Pet.prototype.feed = function() {
    if(this.hunger >= 3) {
    this.hunger -= 3;
    } else
    this.hunger = minHunger;
}

Pet.prototype.checkUp = function() {
    if(this.fitness <= 3 && this.hunger >= 5) {
        return 'I am hungry AND I need a walk';
        } 
    if(this.fitness > 3 && this.hunger < 5) {
        return 'I feel great!';
        }
    if(this.fitness <= 3) {
        return 'I need a walk';
        } 
    if(this.hunger >= 5) {
        return 'I am hungry';
}

};

module.exports = Pet;