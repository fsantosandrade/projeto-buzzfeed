import { Component, OnInit } from '@angular/core';
import data from '../../../assets/data/data.json'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title:string = ''
  questions:any 
  questionSelected:any 

  options:any
  
  answers:string[] = []
  answerSelected:string = ''

  questionIndex:number = 0
  questionMaxIndex:number = 0

  finished:boolean = false
  notFinished:boolean = true

  soundClick = new Audio('assets/audios/click-151673.mp3')
  heroWinner = new Audio('assets/audios/brass-fanfare-with-timpani-and-winchimes-reverberated-146260.mp3')
  villainWinner = new Audio('assets/audios/oldserial_suspensefx01-108768.mp3')

  constructor() { }

  ngOnInit(): void {
    if(data) {
      this.title = data.title

      this.questions = data.questions
      this.questionSelected = this.questions[this.questionIndex].question

      this.options = this.questions[this.questionIndex].options

      this.questionMaxIndex = this.questions.length
    }
  }

  playerChoose(choose: string) {
    this.answers.push(choose)
    this.nextStep()
    console.log(this.answers)
    this.soundClick.play()
  }

  nextStep() {
    this.questionIndex++

    if(this.questionMaxIndex > this.questionIndex) {
      this.questionSelected = this.questions[this.questionIndex].question
      this.options = this.questions[this.questionIndex].options
    }else {
      this.finished = true
      this.notFinished = false
      this.answerSelected = this.winner()
    }
  }

  winner() {
    let villain = 0
    let hero = 0
    this.answers.forEach((choose) => {
      if(choose == 'A') {
        villain++
      }else {
        hero++
      }
    })

    if(villain > hero){
      this.villainWinner.play()
      return data.results.A
    }else {
      this.heroWinner.play()
      return data.results.B
    }
  }
}
