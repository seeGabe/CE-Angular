import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { OrgService } from '../services/org.service';

@Component({
  selector: 'cu-main',
  templateUrl: './cu-main.component.html',
})
export class CuMainComponent implements OnInit {
  respJson = [];
  repoData = [];
  userData = [];
  imageSource = '';

  constructor(private _orgSvc: OrgService, private _userSvc: UserService) {}

  ngOnInit(): void {
    this.getData();
    this.getRepos();
    this.getMemberData();
  }

  getData() {
    this._orgSvc.getOrgData().then((resp: any) => {
      this.imageSource = resp.avatar_url;
    });
  }

  getRepos() {
    this._orgSvc.getRepoData().then((resp: any) => {
      this.repoData = resp;
    });
  }

  getMemberData() {
    this._userSvc.getMembersData().then((resp: any) => {
      this.userData = resp;
    });
  }
}
