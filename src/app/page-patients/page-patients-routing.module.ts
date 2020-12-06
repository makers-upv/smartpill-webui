import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PagePatientsPage } from './page-patients.page';

const routes: Routes = [
  {
    path: '',
    component: PagePatientsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagePatientsPageRoutingModule {}
