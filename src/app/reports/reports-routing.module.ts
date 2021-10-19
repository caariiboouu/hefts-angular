import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { marker } from '@biesbjerg/ngx-translate-extract-marker';

import { Shell } from 'src/app/shell/shell.service';
import { ReportsComponent } from './reports.component';

const routes: Routes = [
  Shell.childRoutes([{ path: 'reports', component: ReportsComponent, data: { title: marker('Reports') } }]),
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [],
})
export class ReportsRoutingModule {}
