import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PageStatusPageRoutingModule } from './page-status-routing.module';

import { PageStatusPage } from './page-status.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PageStatusPageRoutingModule
  ],
  declarations: [PageStatusPage]
})
export class PageStatusPageModule {}
