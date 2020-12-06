import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PageEditTomaPageRoutingModule } from './page-edit-toma-routing.module';

import { PageEditTomaPage } from './page-edit-toma.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PageEditTomaPageRoutingModule
  ],
  declarations: [PageEditTomaPage]
})
export class PageEditTomaPageModule {}
