// Literal types are used to limit the values that a variable can take.
// let quantity: 50 = 50; // quantity can only be 50
// let quantity: 50 | 100 = 50; // quantity can be 50 or 100

// Refactor above to use a type alias
type Quantity = 50 | 100;
let quantity: Quantity = 50; // quantity can be 50 or 100
