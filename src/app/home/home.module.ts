import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { SharedModule } from 'src/app/@shared';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    SharedModule,
    HomeRoutingModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
  ],
  declarations: [HomeComponent],
})
export class HomeModule {}
