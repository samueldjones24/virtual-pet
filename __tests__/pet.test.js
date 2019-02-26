const Pet = require('../src/pet');

describe('constructor', () => {
    
    it('returns an object', () => {
        expect(new Pet('Fido')).toBeInstanceOf(Object);
    });
    it('sets name property', () => {
        const pet = new Pet('Fido');
        expect(pet.name).toEqual('Fido');
    });
    it('has an initial age of 0', () => {
        const pet = new Pet('Fido');
        expect(pet.age).toEqual(0);
    });
    it('has an initial hunger of 0', () => {
        const pet = new Pet('Fido');
        expect(pet.hunger).toEqual(0);
    })
    it('has an initial fitness of 10', () => {
        const pet = new Pet('Fido');
        expect(pet.fitness).toEqual(10);
    })
});

describe('growUp', () => {

    it('increments the age by 1', () => {
        const pet = new Pet('Fido');
        pet.growUp();
        expect(pet.age).toEqual(1);
    });
    it('increments the hunger by 5', () => {
        const pet = new Pet('Fido');
        pet.growUp();
        expect(pet.hunger).toEqual(5);
    });
    it('decreases the fitness by 3', () => {
        const pet = new Pet('Fido');
        pet.growUp();
        expect(pet.fitness).toEqual(7);
    });
});

describe('walk', () => {

    it('increments the fitness by 4', () => {
            const pet = new Pet('Fido');
            pet.fitness = 4;
            pet.walk();
            expect(pet.fitness).toEqual(8);
    });
    it('increments the fitness to a maximum of 10', () => {
            const pet = new Pet('Fido');
            pet.fitness = 8;
            pet.walk();
            expect(pet.fitness).toEqual(10);
    })
})

describe('feed', () => {

    it('decreases the hunger by 3', () => {
        const pet = new Pet('Fido');
        pet.hunger = 6;
        pet.feed();
        expect(pet.hunger).toEqual(3);
    })
    it('decreases hunger to a minimum of 0', () => {
        const pet = new Pet('Fido');
        pet.hunger = 2;
        pet.feed();
        expect(pet.hunger).toEqual(0);

        })
    });
