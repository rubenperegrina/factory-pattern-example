import { Component } from '@angular/core';
import { ShapeFactory } from '../../factories/shape.factory';
import { Shape } from '../../interfaces/shape.interface';

@Component({
  selector: 'app-shape',
  templateUrl: './shape.component.html'
})
export class ShapeComponent {
  shapes: Shape[];

  constructor(private shapeFactory: ShapeFactory) {
    this.shapes = [
      this.shapeFactory.createShape('Circle', { radius: 5 }),
      this.shapeFactory.createShape('Square', { sideLength: 8 }),
      this.shapeFactory.createShape('Triangle', { base: 10, height: 6 }),
    ];
  }
}
