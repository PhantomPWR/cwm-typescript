// Don't rely on TypeScript's type inference
// Always annotate the return type of a function

// In tsconfig.json, set "noUnusedParameters": true
// In tsconfig.json, set "noImplicitReturns": true
// In tsconfig.json, set "noUnusedLocals": true

function calculateTax(income: number): number {
	// let x;  // Unused variable - flagged by noUnusedLocals
	if (income <= 10000) return income * 0.1;
	// if income is greater than 10000, the function will return undefined
	return income * 1.3; // Added to avoid "Not all code paths return a value" error
}

function calculateTax2(income: number, taxYear: number): number {
	if (taxYear <= 2022) return income * 1.2;
	return income * 1.3;
}
// calculateTax2(1000, 2021, 1); // This will trigger "Expected 2 arguments, but got 3" error

// function calculateTax3(income: number, taxYear?: number): number {
// 	if (taxYear <= 2022) return income * 1.2;
// 	return income * 1.3;
// }
// calculateTax3(1000); // No error because taxYear is optional, but
// 'taxYear' is possibly 'undefined'

function calculateTax4(income: number, taxYear = 2022): number {
	if (taxYear <= 2022) return income * 1.2;
	return income * 1.3;
}
calculateTax4(1000); // No error because taxYear has a default value
calculateTax4(1000, 2021); // No error because taxYear is optional
