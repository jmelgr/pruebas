const { calcularTotalCarrito } = require('./carrito');

describe('Pruebas de Integración - Flujo entre módulos', () => {

    test('Debería calcular el total final aplicando descuento del 15% E impuesto del 18%', () => {
        const montoCarrito = 120; 
        const totalEsperado = 120.36;
        const resultadoFinal = calcularTotalCarrito(montoCarrito);
        expect(resultadoFinal).toBe(totalEsperado);
    });

    test('Debería calcular el total aplicando 0% de descuento pero manteniendo el impuesto del 18%', () => {
        const montoCarrito = 80;
        const totalEsperado = 94.4;
        const resultadoFinal = calcularTotalCarrito(montoCarrito);
        expect(resultadoFinal).toBe(totalEsperado);
    });

    test('Debería retornar 0 de total si el flujo recibe un tipo de dato inválido', () => {
        const montoInvalido = "Error";
        const totalEsperado = 0;
        const resultadoFinal = calcularTotalCarrito(montoInvalido);
        expect(resultadoFinal).toBe(totalEsperado);
    });

});