import { Shape } from "../interfaces/shape.interface";

export class Square implements Shape {
    private sideLength: number;
  
    constructor(sideLength: number) {
      this.sideLength = sideLength;
    }
  
    calculateArea(): number {
      return this.sideLength * this.sideLength;
    }
  
    calculatePerimeter(): number {
      return 4 * this.sideLength;
    }
  }