// Intersection types
interface Colorful {
    color: string;
}

interface Circle {
    radius: number;
    }
   
type ColorfulCircle = Colorful & Circle;

function draw(circle: ColorfulCircle) {
    console.log(circle.color);
    console.log(circle.radius);
}

// Union types
type UserId = number | string;

function processUserId(id: UserId) {
    if (typeof id === 'string') {
        console.log(id.toUpperCase());
    } else {
        id.toPrecision(2);
    }
}

type Height = number | 'auto';