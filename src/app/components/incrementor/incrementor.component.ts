import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-incrementor',
  templateUrl: './incrementor.component.html',
  styleUrls: ['./incrementor.component.scss'],
})
export class IncrementorComponent implements OnInit {
  // @Input('valor') progress: number = 20; RENAME un Input
  @Input() progress: number = 0;
  @Input() btnClass: string = 'btn btn-primary';

  @Output() changeProgress: EventEmitter<number> = new EventEmitter();

  get getPorcent() {
    return `${this.progress}%`;
  }
  constructor() {}

  ngOnInit(): void {}

  plusValue = (value: number) => {
    if (this.progress >= 100) {
      this.progress = 100;
      this.emitProgress(this.progress);
      return;
    }
    this.progress += value;
    this.emitProgress(this.progress);
  };

  lessValue = (value: number) => {
    if (this.progress <= 0) {
      this.progress = 0;
      this.emitProgress(this.progress);
      return;
    }
    this.progress -= value;
    this.emitProgress(this.progress);
  };

  emitProgress = (value: number) => {
    this.changeProgress.emit(value);
  };

  changeValue = (event: any) => {
    let number = Number(event.target.value);
    if (number >= 100) {
      this.progress = 100;
    } else if (number <= 0) {
      this.progress = 0;
    } else {
      this.progress = number;
    }
    this.changeProgress.emit(this.progress);
  };
}
