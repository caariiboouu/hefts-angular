import { Component, OnInit } from '@angular/core';

import { environment } from '@env/environment';

@Component({
  selector: 'app-addnewfile',
  templateUrl: './addnewfile.component.html',
  styleUrls: ['./addnewfile.component.scss'],
})
export class AddNewFileComponent implements OnInit {
  version: string | null = environment.version;

  constructor() {}

  ngOnInit() {}
}
