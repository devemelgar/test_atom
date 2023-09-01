import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrincipalRoutingModule } from './principal-routing.module';
import { PrincipalPageComponent } from './pages/principal-page/principal-page.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';


@NgModule({
  declarations: [
    PrincipalPageComponent
  ],
  imports: [
    CommonModule,
    PrincipalRoutingModule,
    PrimeNgModule
  ]
})
export class PrincipalModule { }
