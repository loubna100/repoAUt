import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/model/user';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-update-ptl-dialog',
  templateUrl: './update-ptl-dialog.component.html',
  styleUrls: ['./update-ptl-dialog.component.scss']
})
export class UpdatePtlDialogComponent implements OnInit {
  userForm = this.fb.group({
    prenom:['',Validators.required],
    nom:['',Validators.required],
    email:['',Validators.required]
  })
  id!:number;
  user!:User;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private httpService: HttpService) { }

  ngOnInit(): void {
    
    
  }

  onSubmit(){
    
   

  }

}
