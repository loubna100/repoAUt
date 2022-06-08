import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Auth/login/login.component';
import { HomeComponent } from './Modules/home/home.component';
import { HomeTestComponent } from './Modules/test/home-test/home-test.component';
import { HomeTutoComponent } from './Modules/tuto/home-tuto/home-tuto.component';
import { ListeRecruteurComponent } from './Modules/liste-recruteur/liste-recruteur.component';
import { ListePtlComponent} from './Modules/liste-ptl/liste-ptl.component';
import { BrowserAnimationsModule, NoopAnimationsModule} from '@angular/platform-browser/animations'
import { MatSliderModule } from '@angular/material/slider';
import { MatDialogModule } from '@angular/material/dialog';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AddPtlDialogComponent } from './dialogs/add-ptl-dialog/add-ptl-dialog.component';
import { ToastrModule } from 'ngx-toastr';
import { UpdatePtlDialogComponent } from './dialogs/update-ptl-dialog/update-ptl-dialog.component';
import { TechnologieComponent } from './Modules/technologies/technologie/technologie.component';
import { HeaderComponent } from './Modules/header/header/header.component';
import { InterceptorService } from './authServices/interceptor.service';
import {MatIconModule} from "@angular/material/icon";
import { QuestionsComponent } from './Modules/questions/questions.component';
import { QuestionDashComponent } from './Modules/question-dash/question-dash.component';
import { ConsultationPtlComponent } from './Modules/consultation-ptl/consultation-ptl.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    HomeTestComponent,
    HomeTutoComponent,
    ListeRecruteurComponent,
    ListePtlComponent,
    AddPtlDialogComponent,
    UpdatePtlDialogComponent,
    TechnologieComponent,
    HeaderComponent,
    QuestionsComponent,
    QuestionDashComponent,
    ConsultationPtlComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        MatSliderModule,
        MatDialogModule,
        BrowserAnimationsModule,
        ToastrModule.forRoot(),
        MatIconModule,

        //NoopAnimationsModule,

    ],
  providers: [{
    provide:HTTP_INTERCEPTORS, useClass:InterceptorService, multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
