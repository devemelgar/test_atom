import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TaskRoutingModule } from './task-routing.module';
import { TaskPageComponent } from './pages/task-page/task-page.component';
import { ComponentsTaskModule } from './components/components-task.module';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { AgregarTaskPageComponent } from './pages/agregar-task-page/agregar-task-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastService } from 'src/app/core/services/toast.service';


@NgModule({
  declarations: [
    TaskPageComponent,
    AgregarTaskPageComponent
  ],
  imports: [
    CommonModule,
    PrimeNgModule,
    TaskRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ComponentsTaskModule
  ],
  providers:[
    ToastService
  ]
})
export class TaskModule { }
