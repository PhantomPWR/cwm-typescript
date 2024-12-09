// Sometimes we know more about a value than TypeScript does.
// Usually this will happen when you know the type of some entity could be more specific than its current type.
// Type assertions are a way to tell the compiler “trust me, I know what I’m doing.”
// A type assertion is like a type cast in other languages, but it performs no special checking or restructuring of data.
// It has no runtime impact, and is used purely by the compiler.

// Object: HTMLElement
// getElementById(elementId: string): HTMLElement | null

// phone is type is either HTMLElement or null
// We know it's an input element, so we can use type assertion
// to tell TypeScript to treat it as an HTMLInputElement
// this is achieved by using the 'as' keyword
// 'as' keyword is followed by the type we want to assert
// 'as' keyword doesn't perform any type conversion, it's
// purely used to tell the compiler to treat the value as the specified type
let phone = document.getElementById('phone') as HTMLInputElement;
phone.value = '123-456-7890';

// Another way to perform type assertion is by using angle brackets
let phone2 = <HTMLInputElement>document.getElementById('phone');
