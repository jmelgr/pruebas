const { calcularDescuento, calcularTotalCarrito } = require('./carrito');

describe('Pruebas Unitarias - Módulo Carrito', () => {

    test('Debería aplicar 15% de descuento si el monto del carrito es mayor a $100', () => {
        const montoCarrito = 120;
        const descuentoEsperado = 18; 
        const resultado = calcularDescuento(montoCarrito);
        expect(resultado).toBe(descuentoEsperado);
    });

    test('No debería aplicar descuento si el monto es igual a $100', () => {
        const montoCarrito = 100;
        const descuentoEsperado = 0; 
        const resultado = calcularDescuento(montoCarrito);
        expect(resultado).toBe(descuentoEsperado);
    });

    test('Debería retornar 0 de descuento si el monto es negativo', () => {
        const montoCarrito = -50;
        const descuentoEsperado = 0;
        const resultado = calcularDescuento(montoCarrito);
        expect(resultado).toBe(descuentoEsperado);
    });

    test('Debería retornar 0 de descuento si el monto ingresado es un texto', () => {
        const montoErroneo = "probando";
        const resultado = calcularDescuento(montoErroneo);
        expect(resultado).toBe(0);
    });

    test('Debería retornar 0 de descuento si el monto ingresado es NULL o vacio', () => {
        const montoVacio = null;
        const resultado = calcularDescuento(montoVacio);
        expect(resultado).toBe(0);
    });

    test('Debería retornar 0 de descuento si el monto ingresado es NaN', () => {
        const montoNaN = NaN;
        const resultado = calcularDescuento(montoNaN);
        expect(resultado).toBe(0);
    });

    // calcularTotalCarrito

    test('Debería retornar 0 de total si el monto ingresado es un texto', () => {
        const montoErroneo = "probando";
        const resultado = calcularTotalCarrito(montoErroneo);
        expect(resultado).toBe(0);
    });

    test('Debería retornar 0 de total si el monto ingresado es NULL o vacio', () => {
        const montoVacio = null;
        const resultado = calcularTotalCarrito(montoVacio);
        expect(resultado).toBe(0);
    });

    test('Debería retornar 0 de total si el monto ingresado es NaN', () => {
        const montoNaN = NaN;
        const resultado = calcularTotalCarrito(montoNaN);
        expect(resultado).toBe(0);
    });

    test('Debería retornar 0 de total si el monto ingresado es negativo', () => {
        const montoCarrito = -150;
        const totalEsperado = 0;
        const resultado = calcularTotalCarrito(montoCarrito);
        expect(resultado).toBe(totalEsperado);
    });

});