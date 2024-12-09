function greet(name: string | null | undefined) {
	// Union type to accommodate null and undefined
	if (name) console.log(name.toUpperCase());
	else console.log('Hello');
}

greet(null); // Error: Argument of type 'null' is not assignable to parameter of type 'string'.
