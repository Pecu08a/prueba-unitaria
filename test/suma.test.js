import { suma } from '../app/suma.js';
describe('Test de la funcion suma', ()=>{
    test('suma de 1 y 2', ()=>{
        expect(suma(1,2)).toBe(3);
    });
});