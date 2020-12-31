import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageEditDosisPage } from './page-edit-dosis.page';

const routes: Routes = [
  {
    path: '',
    component: PageEditDosisPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PageEditDosisPageRoutingModule {}
