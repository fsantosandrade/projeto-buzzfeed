import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-resposta',
  templateUrl: './resposta.component.html',
  styleUrls: ['./resposta.component.css']
})
export class RespostaComponent implements OnInit {
  @Input() resultado:string = ''

  constructor() { }

  ngOnInit(): void {
  }

}
