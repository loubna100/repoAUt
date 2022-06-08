import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Auth/login/login.component';
import { HomeComponent } from './Modules/home/home.component';
import { CandidatTestComponent } from './Modules/test/candidat-test/candidat-test.component';
import { HomeTestComponent } from './Modules/test/home-test/home-test.component';
import { HomeTutoComponent } from './Modules/tuto/home-tuto/home-tuto.component';
import {ListeRecruteurComponent} from './Modules/liste-recruteur/liste-recruteur.component';
import {ListePtlComponent} from './Modules/liste-ptl/liste-ptl.component';
import { UpdatePtlDialogComponent } from './dialogs/update-ptl-dialog/update-ptl-dialog.component';
import { TechnologieComponent } from './Modules/technologies/technologie/technologie.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { QuestionsComponent } from './Modules/questions/questions.component';
import { QuestionDashComponent } from './Modules/question-dash/question-dash.component';
import { ConsultationPtlComponent } from './Modules/consultation-ptl/consultation-ptl.component';

const routes: Routes = [
  {path:'' , component:HomeComponent},
  {path:'', component:HomeComponent},
  {path:'login' , component:LoginComponent},
  {path:'home' , component:HomeComponent},
  {path:'test' , component:HomeTestComponent},
  {path:'candidat-test' , component:CandidatTestComponent},
  {path:'tuto' , component:HomeTutoComponent},
  {path:'recruteur' , component:ListeRecruteurComponent},
  {path:'ptl' , component:ListePtlComponent},
  {path:'technologie', component:TechnologieComponent},
  {path:'update-ptl-dialog/:id', component:UpdatePtlDialogComponent},
  {path:'questions',component:QuestionsComponent},
  {path:'questions-dash',component:QuestionDashComponent},
  {path:'consultation-ptl',component:ConsultationPtlComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
  HttpClientModule,
  FormsModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
