import { division } from "../app/division";

describe('Test de la función división', () => {

    test('División nomrmal de enteros: 10 entre 2', () => {
        expect(division(10, 2)).toBe(5);
    });

    test('División por cero debe lanzar error específico', () => {
        expect(()=> division(10, 0)).toThrow('No se puede dividir por cero');
    });

});