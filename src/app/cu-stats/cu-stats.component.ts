import { Component, OnInit } from '@angular/core';
import { DialogService } from 'primeng/dynamicdialog';
import { OrgService } from 'src/app/services/org.service';
import { CuGraphComponent } from '../cu-graph/cu-graph.component';
import { CuChartComponent } from '../cu-chart/cu-chart.component';
import { CuTableComponent } from '../cu-table/cu-table.component';
@Component({
  selector: 'cu-stats',
  templateUrl: './cu-stats.component.html',
  styleUrls: ['./cu-stats.component.scss'],
  providers: [DialogService],
})
export class CuStatsComponent implements OnInit {
  projectData = [];
  repoData = [];

  constructor(private _orgSvc: OrgService, public modalSvc: DialogService) {}

  ngOnInit(): void {
    this.getRepos();
  }

  getRepos() {
    this._orgSvc.getRepoData().then((resp: any) => {
      this.repoData = resp;
    });
  }

  getProjectData(proj: string) {
    this._orgSvc.getProjectData(proj).then((resp: any) => {
      this.projectData = resp;
    });
  }

  showListModal(name: string) {
    this._orgSvc.getCommitData(name).then((resp: any) => {
      this.modalSvc.open(CuTableComponent, {
        header: 'Repository Events List',
        width: '70%',
        data: {
          commitData: resp,
        },
      });
    });
  }
  showChartModal(name: string) {
    this._orgSvc.getCommitData(name).then((resp: any) => {
      this.modalSvc.open(CuChartComponent, {
        header: 'Commits Over Time',
        width: '70%',
        data: {
          commitData: resp,
        },
      });
    });
  }
  showGraphModal(name: string) {
    this._orgSvc.getCommitData(name).then((resp: any) => {
      this.modalSvc.open(CuGraphComponent, {
        header: 'Project Contributors',
        width: '70%',
        data: {
          commitData: resp,
        },
      });
    });
  }
}
