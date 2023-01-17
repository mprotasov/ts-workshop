class Empty {}

function doSomething(value: Empty) {
    // ...
}

doSomething('value');

class NotEmpty {
    public field: number;
}

function doSomethingWithNotEmpty(value: NotEmpty) {
    // ...
}

doSomethingWithNotEmpty('value'); // ERROR