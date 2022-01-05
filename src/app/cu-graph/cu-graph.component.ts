import { Component, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { DynamicDialogRef, DynamicDialogConfig } from 'primeng/dynamicdialog';

@Component({
  selector: 'cu-graph',
  templateUrl: './cu-graph.component.html',
})
export class CuGraphComponent implements OnInit {
  commitData: any;
  dates: any;

  constructor(
    public ref: DynamicDialogRef,
    public config: DynamicDialogConfig
  ) {}

  public polarAreaChartData = {
    labels: ['labels'],
    datasets: [
      {
        data: [321, 123],
        label: 'Series',
      },
    ],
  };
  public polarAreaLegend = true;
  public polarAreaChartType: ChartType = 'polarArea';

  ngOnInit() {
    this.commitData = this.config.data.commitData;
    this.processCommitData(this.config.data.commitData);
  }

  processCommitData(data: any) {
    const names = data.map((commit: any) =>
      commit.commit.committer.name.toLowerCase()
    );
    const counts: any[] = [];

    names.sort();
    names.forEach((name: any) => {
      counts[name] = (counts[name] || 0) + 1;
    });

    this.polarAreaChartData.labels = Object.keys(counts);
    this.polarAreaChartData.datasets = [
      { data: Object.values(counts), label: 'Commits' },
    ];
  }
}
