import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { ActivityRoutingModule } from './activity-routing.module';
import { ActivityComponent } from './activity.component';

import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';

@NgModule({
  imports: [CommonModule, TranslateModule, ActivityRoutingModule, MatCardModule, MatInputModule, MatRadioModule],
  declarations: [ActivityComponent],
})
export class ActivityModule {}
