import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageEditPillPage } from './page-edit-pill.page';

const routes: Routes = [
  {
    path: '',
    component: PageEditPillPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PageEditPillPageRoutingModule {}
