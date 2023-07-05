import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShapeComponent } from './components/shape/shape.component';
import { ShapeFactory } from './factories/shape.factory';

@NgModule({
  declarations: [
    ShapeComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [ShapeComponent],
  providers: [ShapeFactory],
})
export class ShapeModule { }
