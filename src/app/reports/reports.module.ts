import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { ReportsRoutingModule } from './reports-routing.module';
import { ReportsComponent } from './reports.component';

import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  imports: [CommonModule, TranslateModule, ReportsRoutingModule, MatCardModule, MatInputModule],
  declarations: [ReportsComponent],
})
export class ReportsModule {}
