import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/authServices/auth.service';

@Component({
  selector: 'app-technologie',
  templateUrl: './technologie.component.html',
  styleUrls: ['./technologie.component.scss']
})
export class TechnologieComponent implements OnInit {

  constructor(private authService:AuthService) { }

  ngOnInit(): void {
  }
  

}
