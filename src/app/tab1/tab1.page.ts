import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  div_seis=true;
  // question = ["11", "12", "13", "14", "15"]
  datos_orden: any[] = [
    {
      id: 1,
      description: 'Art Alice',
      title: 'Title 1',
      options: ['uno','dos','tres']
    },
    {
      id: 2,
      description: 'Art Bob',
      title: 'Title 1',
      options: []
    },
    {
      id: 3,
      description: 'Art Charlie',
      title: 'Title 1',
      options: ['uno','dos','tres']
    }
  ];

  constructor() {
    console.log('datos_orden: ', this.datos_orden);
    console.log('datos_orden.options: ', this.datos_orden[0].options);
  }

}
