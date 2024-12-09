// function render(document: any) { // Avoid using 'any' type
function render(document: unknown) {
	// Use 'unknown' type instead
	// This causes TypeScript to throw an error - "Object is of type 'unknown'"
	// To fix this, we use narrowing techniques

	// Using a type guard
	// NOTE: typOf only works with primitive types
	if (typeof document === 'string') {
		// TypeScript knows that document is a string
		console.log(document.toUpperCase());
	}
	// Using a user-defined type guard
	// NOTE: instanceof only works with classes
	if (document instanceof HTMLElement) {
		// TypeScript knows that document is an HTMLElement
		document.click();
	}
	// document.move();
	// document.fly();
	// document.whateverWeWant();
}
