import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngfor',
  templateUrl: './ngfor.component.html',
  styleUrls: ['./ngfor.component.css']
})
export class NgforComponent implements OnInit {

  // creamos lista o array de objetos
  songs: Array<Object>;
  constructor() {
    // Primer ejemplo
    // this.libros = [ 'uno' , 'dos', 'tres'];
    this.songs = [
      {id: '1', titulo: 'Somebody to love me', autor: 'Queen'},
      {id: '2', titulo: 'Under pressure', autor: 'Queen'},
      {id: '3', titulo: 'Radio gaga', autor: 'Queen'},
      {id: '4', titulo: 'I want to break free', autor: 'Queen'},
      {id: '5', titulo: 'Love of my life', autor: 'Queen'}
    ];
  }

  ngOnInit() {
  }

}
