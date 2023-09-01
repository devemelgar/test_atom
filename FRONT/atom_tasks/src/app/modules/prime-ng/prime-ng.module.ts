import { NgModule } from '@angular/core';

import { ButtonModule } from 'primeng/button';
import { BlockUIModule } from 'primeng/blockui';
import { CardModule } from 'primeng/card';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { ToastModule } from 'primeng/toast';
import { ToggleButtonModule } from 'primeng/togglebutton';

@NgModule({
  declarations: [],
  exports: [
    ButtonModule,
    BlockUIModule,
    CardModule,
    DialogModule,
    InputTextModule,
    ToastModule,
    ToggleButtonModule
  ]
})
export class PrimeNgModule { }
