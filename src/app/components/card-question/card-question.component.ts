import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-question',
  templateUrl: './card-question.component.html',
  styleUrls: ['./card-question.component.css']
})
export class CardQuestionComponent implements OnInit {
  @Input() questionSelected:any

  constructor() { }

  ngOnInit(): void {
    
  }

}
