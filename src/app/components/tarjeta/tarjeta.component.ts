import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tarjeta',
  templateUrl: './tarjeta.component.html',
  styles: [
  ]
})
export class TarjetaComponent implements OnInit {

  @Input() public nuevasCanciones:any[] = []

  constructor() { }

  ngOnInit(): void {
  }

}
