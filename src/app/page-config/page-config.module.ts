import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PageConfigPageRoutingModule } from './page-config-routing.module';

import { PageConfigPage } from './page-config.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PageConfigPageRoutingModule
  ],
  declarations: [PageConfigPage]
})
export class PageConfigPageModule {}
