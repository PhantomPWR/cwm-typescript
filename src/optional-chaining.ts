type Customer = {
	// birthday: Date; // Required property
	birthday?: Date; // Optional property
};

function getCustomer(id: number): Customer | null | undefined {
	return id === 0 ? null : { birthday: new Date() };
}

let customer = getCustomer(1);
// console.log(customer.birthday); // Error: Object is possibly 'null'.
// Fix:
// if (customer !== null && customer !== undefined) console.log(customer.birthday); // OK, but verbose

// Optional property access operator
// console.log(customer?.birthday); // More concise, using the optional property access operator
console.log(customer?.birthday?.getFullYear()); // Chaining multiple optional properties

// Optional element access operator
// Useful for dealing with arrays

// BEFORE:
// if (customers !== null && customers !== undefined)
//  customers[0]

// AFTER:
// customers?.[0]

// Optional call operator
// Useful for calling functions

let logMessage: any = null;
logMessage?.('Hello, world!'); // Only calls the function if logMessage is not null or undefined
