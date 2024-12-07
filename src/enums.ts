// Enums - a list of related constants

// Without enums
const small = 1;
const medium = 2;
const large = 3;

// With enums - PascalCase
enum Size {
	Small,
	Medium,
	Large,
} // 0, 1, 2 - auto-incremented
enum Size1 {
	Small = 1,
	Medium,
	Large,
} // 1, 2, 3 - auto-incremented
enum Size2 {
	Small = 1,
	Medium = 2,
	Large = 3,
} // Explicit values

// Generate JavaScript code is too verbose for 'enum Size2'
// Adding const to the enum wil generate more optimized code
const enum Size3 {
	Small = 1,
	Medium,
	Large,
}

let mySize = Size3.Medium;
console.log(mySize); // 2
