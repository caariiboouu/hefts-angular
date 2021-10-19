import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { AddNewFileRoutingModule } from './addnewfile-routing.module';
import { AddNewFileComponent } from './addnewfile.component';

import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  imports: [CommonModule, TranslateModule, AddNewFileRoutingModule, MatCardModule, MatInputModule],
  declarations: [AddNewFileComponent],
})
export class AddNewFileModule {}
