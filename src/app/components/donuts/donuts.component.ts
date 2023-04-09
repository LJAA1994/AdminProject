import { Component, Input, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { Color, Label, MultiDataSet } from 'ng2-charts';

@Component({
  selector: 'app-donuts',
  templateUrl: './donuts.component.html',
  styleUrls: ['./donuts.component.scss'],
})
export class DonutsComponent implements OnInit {
  @Input() title = 'Untitle';
  @Input() labels: any = ['Data1', 'Data2', 'Data3'];
  @Input() data: any = [[50, 50, 50]];
  @Input() type: any = 'doughnut';
  @Input() colors: any = [
    { backgroundColor: ['#2DD5E8', '#119DD0', '#005EB0'] },
  ];

  constructor() {}

  ngOnInit(): void {}
}
