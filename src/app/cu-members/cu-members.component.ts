import { Component, OnInit } from '@angular/core';
import { DialogService } from 'primeng/dynamicdialog';
import { CuLineGraphComponent } from 'src/app/cu-line-graph/cu-line-graph.component';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'cu-members',
  templateUrl: './cu-members.component.html',
  providers: [DialogService],
})
export class CuMembersComponent implements OnInit {
  userData = [];
  eventData = [];
  constructor(private _userSvc: UserService, public modalSvc: DialogService) {}

  ngOnInit(): void {
    this.getMemberData();
  }

  getMemberData() {
    this._userSvc.getMembersData().then((resp: any) => {
      this.userData = resp;
    });
  }

  getEventsData(user: string) {
    this._userSvc.getEventsData(user).then((resp: any) => {
      this.showLineChartModal(resp);
    });
  }

  showLineChartModal(data: any) {
    this.modalSvc.open(CuLineGraphComponent, {
      header: 'Code Activity Over Time',
      width: '70%',
      data: {
        commitData: data,
      },
    });
  }
}
