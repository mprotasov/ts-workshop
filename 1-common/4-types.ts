// basic types:
const str: string = 'str';
const num: number = 10;
const bool: boolean = true;
const arr: number[] = [1, 2];
const anyValue: any = 'any';
const bigInt = BigInt(100);
const symbol = Symbol('someSymbol');

// optional
function functionWithOptional(outer?: string) {
    const inner1: string = outer; // ERROR
    const inner2: string = outer!;
}

// types
type SomeType = {
    a: number;
    b: string;
}

function functionForSomeType(value: SomeType) {
    // ...
}

function functionForInlineType(value: { a: number, b: number }) {

}