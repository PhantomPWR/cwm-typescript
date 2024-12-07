
// let numbers: number[] = [1, 2, '3']; // Valid in JavaScript, but not in TypeScript

let numbers = [1, 2, 3]; // TypeScript infers the type as number[]

let numbers2 = []; // TypeScript infers the type as any[] - not recommended

let numbers3: number[] = []; // TypeScript infers the type as number[]


