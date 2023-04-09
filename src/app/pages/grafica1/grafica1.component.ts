import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styleUrls: ['./grafica1.component.scss'],
})
export class Grafica1Component implements OnInit {
  labels1: string[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
  data1 = [[100, 450, 100]];
  typeGraphic1 = 'doughnut';
  colors1 = [{ backgroundColor: ['#2DD5E8', '#119DD0', '#005EB0'] }];
  constructor() {}

  ngOnInit(): void {}
}
