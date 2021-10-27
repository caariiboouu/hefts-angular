import { Component, OnInit } from '@angular/core';

import { environment } from '@env/environment';

interface UsStates {
  value: string;
  viewValue: string;
}
interface HeEmployees {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-addnewfile',
  templateUrl: './addnewfile.component.html',
  styleUrls: ['./addnewfile.component.scss'],
})
export class AddNewFileComponent implements OnInit {
  usstates: UsStates[] = [
    { value: 'ok-0', viewValue: 'Oklahoma' },
    { value: 'ut-1', viewValue: 'Utah' },
    { value: 'tx-2', viewValue: 'Texas' },
  ];

  heemployees: HeEmployees[] = [
    { value: '1', viewValue: 'Yes' },
    { value: '0', viewValue: 'No' },
  ];

  version: string | null = environment.version;

  constructor() {}

  ngOnInit() {}
}
