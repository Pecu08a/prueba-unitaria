import {calculadora} from '../app/calculadora.js';
describe('Test de la funcion calculadora', ()=> {
    test('Suma de 1 y 2', ()=> {
        expect(calculadora(1, 2, 'suma')).toBe(3);
    });
    test('Resta de 3 y 2', ()=> {
        expect(calculadora(3, 2, 'resta')).toBe(1);
    });
    test('Division de 10 entre 2', ()=> {
        expect(calculadora(10, 2, 'division')).toBe(5);
    });
    test('Operacion no valida', ()=> {
        expect(calculadora(3, 2, 'multiplicacion')).toBe('Operacion no valida');
    });
});
