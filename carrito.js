const { calcularImpuesto } = require('./impuestos');

function calcularDescuento(monto) {
    if (monto === null || typeof monto !== 'number' || isNaN(monto)) return 0;
    if (monto < 0) return 0;

    if (monto > 100) return monto * 0.15;

    return 0;
}

function calcularTotalCarrito(monto) {
    if (monto === null || typeof monto !== 'number' || isNaN(monto)) return 0;
    if (monto < 0) return 0;

    const descuento = calcularDescuento(monto);
    const montoConDescuento = monto - descuento;
    const impuesto = calcularImpuesto(montoConDescuento);
    
    return montoConDescuento + impuesto;
}

module.exports = { calcularDescuento, calcularTotalCarrito };