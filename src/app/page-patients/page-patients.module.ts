import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PagePatientsPageRoutingModule } from './page-patients-routing.module';

import { PagePatientsPage } from './page-patients.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PagePatientsPageRoutingModule
  ],
  declarations: [PagePatientsPage]
})
export class PagePatientsPageModule {}
