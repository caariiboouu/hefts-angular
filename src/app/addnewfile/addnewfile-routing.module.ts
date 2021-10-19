import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { marker } from '@biesbjerg/ngx-translate-extract-marker';

import { Shell } from 'src/app/shell/shell.service';
import { AddNewFileComponent } from './addnewfile.component';

const routes: Routes = [
  Shell.childRoutes([{ path: 'addnewfile', component: AddNewFileComponent, data: { title: marker('AddNewFile') } }]),
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [],
})
export class AddNewFileRoutingModule {}
