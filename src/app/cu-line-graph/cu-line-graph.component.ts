import { Component, OnInit } from '@angular/core';
import { ChartConfiguration, ChartType } from 'chart.js';
import * as moment from 'moment';
import { DynamicDialogRef, DynamicDialogConfig } from 'primeng/dynamicdialog';

@Component({
  selector: 'cu-line-graph',
  templateUrl: './cu-line-graph.component.html',
})
export class CuLineGraphComponent implements OnInit {
  public lineChartData = {
    datasets: [
      {
        data: [28, 48, 40, 19, 86, 27, 90],
        label: 'Series B',
        backgroundColor: 'rgba(77,83,96,0.2)',
        borderColor: 'rgba(77,83,96,1)',
        pointBackgroundColor: 'rgba(77,83,96,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(77,83,96,1)',
        fill: 'origin',
      },
    ],
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  };

  public lineChartOptions: ChartConfiguration['options'] = {
    elements: {
      line: {
        tension: 0.5,
      },
    },
    scales: {
      // We use this empty structure as a placeholder for dynamic theming.
      x: {},
      'y-axis-0': {
        position: 'left',
      },
    },

    plugins: {
      legend: { display: true },
    },
  };

  public lineChartType: ChartType = 'line';

  commitData: any;
  dates: any;

  constructor(
    public ref: DynamicDialogRef,
    public config: DynamicDialogConfig
  ) {}

  ngOnInit() {
    this.commitData = this.config.data.commitData;
    this.processEventData(this.config.data.commitData);
  }

  processEventData(data: any[]) {
    const dates = data.map((event: any) =>
      moment(event['created_at']).format('MMM YYYY')
    );

    const months: any[] = [];
    dates.reverse();
    dates.forEach((date: any) => {
      months[date] = (months[date] || 0) + 1;
    });

    this.lineChartData.labels = Object.keys(months);
    this.lineChartData.datasets[0].data = Object.values(months);
    this.lineChartData.datasets[0].label = 'Interactions';
  }
}
