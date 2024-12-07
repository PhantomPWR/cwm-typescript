// let employee = { id: 1 };
// employee.name = 'John'; // Valid in JavaScript, but not in TypeScript

let employee: {
	readonly id: number; // readonly keyword/modifier makes the property immutable
	name: string; // Could use name?: string to make it optional, but
	// conceptually doesn't make sense for an employee to not have a name
	retire: (date: Date) => void; // Function type
} = {
	id: 1,
	name: 'John',
	retire: (date: Date) => {
		console.log('Retiring on', date);
	},
};

// employee.id = 2; // Cannot assign to 'id' because it is a read-only property
