import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CrisesRoutingModule } from './crises-routing.module';
import { CrisisDetailComponent } from './crisis-detail/crisis-detail.component';
import { CrisisListComponent } from './crisis-list/crisis-list.component';


@NgModule({
  declarations: [CrisisDetailComponent, CrisisListComponent],
  imports: [
    CommonModule,
    FormsModule,
    CrisesRoutingModule
  ]
})
export class CrisesModule { }
