import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-option',
  templateUrl: './card-option.component.html',
  styleUrls: ['./card-option.component.css']
})
export class CardOptionComponent implements OnInit {
  @Input() option:any 

  constructor() { }

  ngOnInit(): void {
  }

}
