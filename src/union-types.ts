function kgToLbs(weight: number | string): number | string {
	// Narrowing the type of weight to number
	if (typeof weight === 'number') return weight * 2.2;
	else return parseInt(weight) * 2.2;
}
