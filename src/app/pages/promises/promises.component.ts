import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promises',
  templateUrl: './promises.component.html',
  styleUrls: ['./promises.component.scss'],
})
export class PromisesComponent implements OnInit {
  users: any = [];
  constructor() {}

  ngOnInit(): void {
    this.getUsers().then((users) => {
      console.log('AQUI', users);
      this.users = users;
    });
    // <==================== PROMESAS===============>
    //   const promiseTest = new Promise((resolve, reject) => {
    //     if (false) {
    //       resolve('Se ha resuelto');
    //     } else {
    //       reject('Algo salio mal');
    //     }
    //   });

    //   // Invocando la promesa
    //   promiseTest
    //     .then((resolve) => {
    //       console.log('Mensaje del RESOLVE', resolve);
    //     })
    //     .catch((error) => {
    //       console.log('Mensaje del REJECT', error);
    //     });
    //   console.log('End Init');
    // <==================== PROMESAS===============>
  }
  getUsers = () => {
    const promises = new Promise((resolve, reject) => {
      // Resp.json() por el ReadableString que devuelve el fetch
      fetch(' https://pokeapi.co/api/v2/pokemon')
        .then((resp) => resp.json())
        .then((body) => resolve(body.results))
        .catch((error) => reject(`Ha habido un error ${error}`));
    });
    return promises;
  };
}
