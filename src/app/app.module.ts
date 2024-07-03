import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardQuestionComponent } from './components/card-question/card-question.component';
import { CardOptionComponent } from './components/card-option/card-option.component';
import { HomeComponent } from './pages/home/home.component';
import { RespostaComponent } from './components/resposta/resposta.component';

@NgModule({
  declarations: [
    AppComponent,
    CardQuestionComponent,
    CardOptionComponent,
    HomeComponent,
    RespostaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
