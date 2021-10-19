import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { SearchRoutingModule } from './search-routing.module';
import { SearchComponent } from './search.component';

import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  imports: [CommonModule, TranslateModule, SearchRoutingModule, MatCardModule, MatInputModule],
  declarations: [SearchComponent],
})
export class SearchModule {}
