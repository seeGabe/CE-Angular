import { Component, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import * as moment from 'moment';
import { DynamicDialogRef, DynamicDialogConfig } from 'primeng/dynamicdialog';

@Component({
  selector: 'cu-chart',
  templateUrl: './cu-chart.component.html',
})
export class CuChartComponent implements OnInit {
  commitData: any;
  dates: any;

  constructor(
    public ref: DynamicDialogRef,
    public config: DynamicDialogConfig
  ) {}

  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true,
    scales: {
      x: {
        type: 'time',
        time: {
          unit: 'quarter',
          displayFormats: {
            quarter: 'MMM YYYY',
          },
        },
      },
    },
  };
  public barChartLabels = ['2022'];
  public barChartType = 'bar';
  public barChartLegend = true;
  public barChartData = [{ data: [65, 59, 80, 40], label: 'Series' }];

  ngOnInit() {
    this.commitData = this.config.data.commitData;
    this.processCommitData(this.config.data.commitData);
  }

  processCommitData(data: any) {
    const dates = data.map((commit: any) =>
      moment(commit.commit.committer.date).format('MMM YYYY')
    );
    const quarters: any[] = [];
    dates.forEach((date: any) => {
      quarters[date] = (quarters[date] || 0) + 1;
    });
    this.barChartLabels = Object.keys(quarters);
    this.barChartData = [{ data: Object.values(quarters), label: 'Commits' }];
  }
}
