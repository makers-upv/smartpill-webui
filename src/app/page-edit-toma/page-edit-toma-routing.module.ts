import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageEditTomaPage } from './page-edit-toma.page';

const routes: Routes = [
  {
    path: '',
    component: PageEditTomaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PageEditTomaPageRoutingModule {}
