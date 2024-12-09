// Type aliases can be reused to define a type
type Employee = {
	readonly id: number;
	name: string;
	retire: (date: Date) => void;
};

let employee2: Employee = {
	id: 1,
	name: 'John',
	retire: (date: Date) => {
		console.log('Retiring on', date);
	},
};
