import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngstyle',
  templateUrl: './ngstyle.component.html',
  styleUrls: ['./ngstyle.component.css']
})
export class NgstyleComponent implements OnInit {

  title = 'ngsyle';
  colorlocal: String;

  generarRandom(): String {
    return Math.floor( Math.random() * 255 ).toString(16);
  }

  colorHex(): String {
    this.colorlocal = '#' + this.generarRandom() + this.generarRandom() + this.generarRandom();
    return this.colorlocal;
  }

  constructor() { }

  ngOnInit() {
  }

}
