import {resta} from '../app/resta.js';
describe('Test de la funcion resta', ()=> {
    test('Resta de 3 y 2', ()=> {
        expect(resta(3, 2)).toBe(1);
    });
});