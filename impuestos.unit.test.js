const { calcularImpuesto } = require('./impuestos');

describe('Pruebas Unitarias - Módulo de Impuestos', () => {

    test('Debería aplicar el 18% de impuesto sobre un monto válido', () => {
        const monto = 100;
        const impuestoEsperado = 18;

        const resultado = calcularImpuesto(monto);

        expect(resultado).toBe(impuestoEsperado);
    });

    test('Debería retornar 0 de impuesto si el monto es exactamente 0', () => {
        const monto = 0;
        const impuestoEsperado = 0;
        
        const resultado = calcularImpuesto(monto);
        
        expect(resultado).toBe(impuestoEsperado);
    });

    test('Debería retornar 0 de impuesto si el monto ingresado es negativo', () => {
        const monto = -100;
        const impuestoEsperado = 0;
        
        const resultado = calcularImpuesto(monto);
        
        expect(resultado).toBe(impuestoEsperado);
    });

    test('Debería retornar 0 de impuesto si el monto ingresado es un texto', () => {
        const montoErroneo = "Error";
        
        const resultado = calcularImpuesto(montoErroneo);
        
        expect(resultado).toBe(0);
    });

    test('Debería retornar 0 de impuesto si el monto es NULL', () => {
        const montoVacio = null;
        
        const resultado = calcularImpuesto(montoVacio);
        
        expect(resultado).toBe(0);
    });

});