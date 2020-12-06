import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PageLogPageRoutingModule } from './page-log-routing.module';

import { PageLogPage } from './page-log.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PageLogPageRoutingModule
  ],
  declarations: [PageLogPage]
})
export class PageLogPageModule {}
