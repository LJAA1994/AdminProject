import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-breadcrums',
  templateUrl: './breadcrums.component.html',
  styleUrls: ['./breadcrums.component.scss'],
})
export class BreadcrumsComponent implements OnInit , OnDestroy{
  title: string = '';
argumentsSubs!: Subscription;
  constructor(private router: Router) {
    this.argumentsSubs = this.getArgumentsOfRutes().subscribe((data) => {
      console.log(data['title']);
      this.title = data['title'];
      document.title = `AdminPro - ${this.title}`;
    });
  }
  ngOnDestroy(): void {
    this.argumentsSubs.unsubscribe();
  }

  ngOnInit(): void {}

  getArgumentsOfRutes = () => {
    return this.router.events.pipe(
      filter((event: any) => event instanceof ActivationEnd),
      filter((event: ActivationEnd) => event.snapshot.firstChild === null),
      map((event: ActivationEnd) => event.snapshot.data)
    );
  };
}
