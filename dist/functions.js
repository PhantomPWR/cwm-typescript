"use strict";
function calculateTax(income) {
    if (income <= 10000)
        return income * 0.1;
    return income * 1.3;
}
function calculateTax2(income, taxYear) {
    if (taxYear <= 2022)
        return income * 1.2;
    return income * 1.3;
}
function calculateTax4(income, taxYear = 2022) {
    if (taxYear <= 2022)
        return income * 1.2;
    return income * 1.3;
}
calculateTax4(1000);
calculateTax4(1000, 2021);
//# sourceMappingURL=functions.js.map