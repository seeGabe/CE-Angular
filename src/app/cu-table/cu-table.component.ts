import { Component, OnInit } from '@angular/core';
import { DynamicDialogRef, DynamicDialogConfig } from 'primeng/dynamicdialog';

@Component({
  selector: 'cu-table',
  templateUrl: './cu-table.component.html',
})
export class CuTableComponent implements OnInit {
  commitData: any;
  constructor(
    public ref: DynamicDialogRef,
    public config: DynamicDialogConfig
  ) {}

  ngOnInit(): void {
    this.commitData = this.config.data.commitData;
  }
}
