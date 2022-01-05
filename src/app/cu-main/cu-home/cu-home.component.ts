import { Component, Input } from '@angular/core';

@Component({
  selector: 'cu-home',
  templateUrl: './cu-home.component.html',
})
export class CuHomeComponent {
  @Input() imgSrc = '';
  @Input() repoData = [];
  @Input() userData = [];

  dialogTitle = 'Title';
  dialogBody = 'Contents';
  display: boolean = false;

  showDialog(type: string) {
    this.display = true;

    this.dialogBody = `<ul class="list-group col">`;
    if (type == 'code') {
      this.dialogTitle = 'Code Repositories';
      this.dialogBody = '';
      this.repoData.forEach((repo) => {
        this.dialogBody += `<li class="list-group-item">`;
        this.dialogBody += repo['name'];
        this.dialogBody += `</li>`;
      });
    } else if (type == 'users') {
      this.dialogTitle = 'Public Members';
      this.userData.forEach((user) => {
        this.dialogBody += `<li class="list-group-item">`;
        this.dialogBody += user['login'];
        this.dialogBody += `</li>`;
      });
    }
    this.dialogBody += `</ul>`;
  }
}
