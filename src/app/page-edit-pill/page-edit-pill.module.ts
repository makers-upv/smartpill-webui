import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PageEditPillPageRoutingModule } from './page-edit-pill-routing.module';

import { PageEditPillPage } from './page-edit-pill.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PageEditPillPageRoutingModule
  ],
  declarations: [PageEditPillPage]
})
export class PageEditPillPageModule {}
