let sales = 123_456_789; // same as let sales: number = 123_456_789;
                        // TypeScript automatically inferred the type as number
let course = "TypeScript"; // see above
let is_published = true; // see above
let level; // If type not specified, TypeScript will infer it as 'any'
        // defeats the purpose of TypeScript's type checking

function render(document: any) {  // Only use 'any' if you're not sure of the type
                                // Don't be tempted to override "noImplicitAny" rule
    console.log(document)
}

