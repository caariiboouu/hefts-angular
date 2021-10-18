import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { SharedModule } from 'src/app/@shared';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  imports: [CommonModule, TranslateModule, SharedModule, HomeRoutingModule, MatCardModule, MatInputModule],
  declarations: [HomeComponent],
})
export class HomeModule {}
