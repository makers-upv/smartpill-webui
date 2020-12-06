import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageConfigPage } from './page-config.page';

const routes: Routes = [
  {
    path: '',
    component: PageConfigPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PageConfigPageRoutingModule {}
