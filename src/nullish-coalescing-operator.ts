let speed: number | null = null;
let ride = {
	// Falsy: (undefined, null, 0, '', NaN, false)

	// speed: speed || 30 // Even if 0 is a valid speed,
	// it will be replaced by 30, because 0 is falsy

	// Check for null instead
	// speed: speed !== null ? speed: 30  // JavaScript way
	speed: speed ?? 30, // TypeScript way
	// '??' is the nullish coalescing operator
};
