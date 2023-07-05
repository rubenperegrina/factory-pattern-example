import { Shape } from "../interfaces/shape.interface";

export class Triangle implements Shape {
    private base: number;
    private height: number;
  
    constructor(base: number, height: number) {
      this.base = base;
      this.height = height;
    }
  
    calculateArea(): number {
      return (this.base * this.height) / 2;
    }
  
    calculatePerimeter(): number {
      // Assuming an equilateral triangle
      return 3 * this.base;
    }
  }