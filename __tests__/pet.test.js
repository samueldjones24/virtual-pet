const Pet = require('../src/pet');

describe('create pet with initial values', () => {
    
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

describe('pet grows up', () => {

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
    it('throws an error if the pet is not alive', () => {
        const pet = new Pet('Fido');
        pet.age = 30;
        expect(() => pet.growUp()).toThrow('Your pet died :(');
      });
});

describe('take the pet for a walk', () => {

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
    it('throws an error if the pet is not alive', () => {
        const pet = new Pet('Fido');
        pet.fitness = 0;
        expect(() => pet.walk()).toThrow('Your pet died :(');
      });
})

describe('feed the pet', () => {

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
    it('throws an error if the pet is not alive', () => {
        const pet = new Pet('Fido');
        pet.hunger = 10;
        expect(() => pet.feed()).toThrow('Your pet died :(');
      });
});

describe('pet goes for a check up', () => {

    it('returns \'I need a walk\' if fitness is 3 or less', () => {
        const pet = new Pet('Fido');
        pet.fitness = 3;
        pet.checkUp();
        expect(pet.checkUp()).toEqual('I need a walk');
    })
    it('returns \'I am hungry\' if hunger is 5 or more', () => {
        const pet = new Pet('Fido');
        pet.hunger = 5;
        pet.checkUp();
        expect(pet.checkUp()).toEqual('I am hungry');
    })
    it('returns \'I am hungry AND I need a walk\' if both above are true', () => {
        const pet = new Pet('Fido');
        pet.fitness = 2; 
        pet.hunger = 6;
        pet.checkUp();
        expect(pet.checkUp()).toEqual('I am hungry AND I need a walk');
    })
    it('returns \'I feel great!\' if neither of the above is true', () => {
        const pet = new Pet('Fido');
        pet.fitness = 4;
        pet.hunger = 4;
        pet.checkUp();
        expect(pet.checkUp()).toEqual('I feel great!');
    })
    it('throws an error if the pet is not alive', () => {
        const pet = new Pet('Fido');
        pet.hunger = 10;
        pet.age = 30;
        pet.fitness = 0;
        expect(() => pet.checkUp()).toThrow('Your pet died :(');
      });
});

describe('check if pet is alive', () => {

    it('returns false if fitness is 0 or less', () => {
        const pet = new Pet('Fido');
        pet.fitness = 0;
        expect(pet.isAlive).toEqual(false);
    })
    it('returns false if hunger is 10 or more', () => {
        const pet = new Pet('Fido');
        pet.hunger = 11;
        expect(pet.isAlive).toEqual(false);
    })
    it('returns false if age is 30 or more', () => {
        const pet = new Pet('Fido');
        pet.age = 31;
        expect(pet.isAlive).toEqual(false);
    })
    it('returns true if neither of the above is true', () => {
        const pet = new Pet('Fido');
        pet.fitness = 5;
        pet.hunger = 6;
        pet.age = 14;
        expect(pet.isAlive).toEqual(true);
    })
});

describe('adoptChild', () => {

    it('throws an error if you try to adoptChild, but parent is not alive', () => {
        const parent = new Pet('Fido');
        const child = new Pet('Jack');
        parent.age = 30;
        expect(() => parent.adoptChild(child)).toThrow('You cannot adopt as your pet is not alive :(');
      });

    it('adopt a child', () => {
        const parent = new Pet('Fido');
        const child = new Pet('Jack');
        parent.adoptChild(child);
        expect(parent.children).toEqual([{ name: 'Jack', age: 0, hunger: 0, fitness: 10, children: []}]);
    })
});
