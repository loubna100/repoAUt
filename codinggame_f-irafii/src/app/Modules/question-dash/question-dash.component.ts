import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { QuestionsComponent } from '../questions/questions.component';

@Component({
  selector: 'app-question-dash',
  templateUrl: './question-dash.component.html',
  styleUrls: ['./question-dash.component.scss']
})
export class QuestionDashComponent implements OnInit {

  constructor( private dialog: MatDialog,) { }

  ngOnInit(): void {
  }

  openDialogAdd(){
    this.dialog.open(QuestionsComponent);
  }

}
