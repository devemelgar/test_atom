import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimeNgModule } from '../../prime-ng/prime-ng.module';
import { ItemTaskComponent } from './item-task/item-task.component';



@NgModule({
  declarations: [
    ItemTaskComponent
  ],
  imports: [
    CommonModule,
    PrimeNgModule
  ],
  exports: [
    ItemTaskComponent
  ],
})
export class ComponentsTaskModule { }
