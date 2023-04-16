import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription, interval } from 'rxjs';
import { filter, map, retry, take } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.scss'],
})
export class RxjsComponent implements OnInit, OnDestroy {
  intervalSubcribe!: Subscription;
  constructor() {
   this.intervalSubcribe = this.returnInterval().subscribe(console.log)
    // ----Subscriipcion-----
    // this.startObservable()
    //   .pipe(retry(1)) //Reintenta la subscripcion
    //   .subscribe(
    //     (resp) => {
    //       console.log('RESPUESTA', resp);
    //     },
    //     (error) => {
    //       console.warn('ERROR', error);
    //     },
    //     () => {
    //       console.log('Observable finalizado');
    //     }
    //   );
  }
  ngOnDestroy(): void {
  this.intervalSubcribe.unsubscribe();
  }

  ngOnInit(): void {}
//-----OBS1------
  startObservable = (): Observable<number> => {
    let i = -1;
    // <==============OBERVABLES==============>
    return new Observable<number>((observer) => {
      const interval = setInterval(() => {
        i++;
        observer.next(i);
        if (i === 3) {
          console.log('uuaa');
          clearInterval(interval);
          observer.complete();
        }
        if (i === 2) {
          console.log('eiii');
          observer.error('i llega a STOP');
        }
        if (i === 3) {
          console.log('eiii');
          observer.error('i llega a STOP');
        }
      }, 1000);
    });
  };
  //-----OBS2-----
  returnInterval = ():Observable<number> => {
    return interval(500).pipe(
      take(60), //Coge los 4 primeros datos
      map( (resp) => {
        return resp +1;
      }), //Transforma la DATA
      filter(valor => {
        return valor % 2 === 0 ? true :false;
      }),//Filtra los datos segun el parametro que le pasemos como callback
    )
  }
}
