interface SomeInterface {
    field1: number; 
}

class SomeClass implements SomeInterface {
    constructor(public field1: number) {}
}

class SomeSubclass extends SomeClass {
    public field2?: string;
}

const value = new SomeSubclass(1);

console.log(value instanceof SomeClass); // true
console.log(value instanceof SomeSubclass); // true
console.log(typeof value); // object
console.log(value instanceof SomeInterface) // ERROR

function isSomeInterface(value: any): value is SomeInterface {
    return 'field1' in value;
}

console.log(isSomeInterface(value)); // true

interface TaggedInterface {
    kind: 'TaggedInterface';
}

function isTaggedInterface(value: any): value is TaggedInterface {
    return 'kind' in value && value.kind === 'TaggedInterface';
}