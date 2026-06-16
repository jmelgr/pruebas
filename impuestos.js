function calcularImpuesto(monto) {
    if (monto === null || typeof monto !== 'number' || isNaN(monto)) return 0;
    if (monto < 0) return 0;

    return monto * 0.18;
}

module.exports = { calcularImpuesto };