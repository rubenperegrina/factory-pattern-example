import { Shape } from "../interfaces/shape.interface";
import { Circle } from "../shapes/circle";
import { Square } from "../shapes/square";
import { Triangle } from "../shapes/triangle";

export class ShapeFactory {
    createShape(type: string, options: any): Shape {
        switch (type) {
            case 'Circle':
                return new Circle(options.radius);
            case 'Square':
                return new Square(options.sideLength);
            case 'Triangle':
                return new Triangle(options.base, options.height);
            default:
                throw new Error('Invalid shape type');
        }
    }
}
