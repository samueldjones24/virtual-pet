const Pet = require('../src/pet');

describe('constructor', () => {
    
    it('returns an object', () => {
        expect(new Pet('Fido')).toBeInstanceOf(Object);
    });
    it('sets name property', () => {
        const pet = new Pet('Fido');
        expect(pet.name).toEqual('Fido');
    });
});