import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PageEditDosisPageRoutingModule } from './page-edit-dosis-routing.module';

import { PageEditDosisPage } from './page-edit-dosis.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PageEditDosisPageRoutingModule
  ],
  declarations: [PageEditDosisPage]
})
export class PageEditDosisPageModule {}
