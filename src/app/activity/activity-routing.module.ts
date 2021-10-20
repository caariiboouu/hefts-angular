import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { marker } from '@biesbjerg/ngx-translate-extract-marker';

import { Shell } from 'src/app/shell/shell.service';
import { ActivityComponent } from './activity.component';

const routes: Routes = [
  Shell.childRoutes([{ path: 'activity', component: ActivityComponent, data: { title: marker('Activity') } }]),
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [],
})
export class ActivityRoutingModule {}
