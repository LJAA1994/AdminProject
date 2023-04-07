import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.scss'],
})
export class ProgressComponent implements OnInit {
  progress: number = 20;

  get getPorcent() {
    return `${this.progress}%`;
  }
  constructor() {}

  ngOnInit(): void {}

  plusValue = (value: number) => {
    console.log(this.progress);

    if (this.progress ==100) {
      return;
    }
    this.progress += value;
  };

  lessValue = (value: number) => {
    console.log(this.progress);
    if (this.progress == 0) {
      return;
    }
    this.progress -= value;
  };
}
