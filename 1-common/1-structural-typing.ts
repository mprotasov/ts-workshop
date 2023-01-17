interface Point {
    x: number;
    y: number;
}

interface Circle {
    radius: number;
    color: string;
}

function handlePoint(point: Point) {
    console.log(point.x + ' ' + point.y);
}

function handleCircle(circle: Circle) {
    console.log(circle.radius + ' ' + circle.color);
}

const point = {
    x: 10,
    y: 15
}

const circle = {
    radius: 10,
    color: 'red'
}

const circleWithCoordinates = {
    x: 15,
    y: 10,
    radius: 6,
    color: 'green'
}

handlePoint(point);
handleCircle(point); // ERROR

handlePoint(circle); // ERROR
handleCircle(circle);

handlePoint(circleWithCoordinates);
handleCircle(circleWithCoordinates);


const c1: Circle = point; // ERROR
const c2: Circle = circleWithCoordinates;
const c3: Circle = {radius: 6, color: 'blue', x: 12}; // ERROR