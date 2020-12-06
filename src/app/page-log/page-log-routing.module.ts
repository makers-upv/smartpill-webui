import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageLogPage } from './page-log.page';

const routes: Routes = [
  {
    path: '',
    component: PageLogPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PageLogPageRoutingModule {}
