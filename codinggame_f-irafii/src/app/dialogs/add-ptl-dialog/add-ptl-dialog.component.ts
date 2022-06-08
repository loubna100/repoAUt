import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/model/user';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-add-ptl-dialog',
  templateUrl: './add-ptl-dialog.component.html',
  styleUrls: ['./add-ptl-dialog.component.scss']
})
export class AddPtlDialogComponent implements OnInit {
  listOfUser!: User[];
  userForm!: FormGroup;

  constructor(private httpService: HttpService,
    private fb:FormBuilder,
    private toastr: ToastrService) { }

  ngOnInit(): void {
    this.userForm = this.fb.group({
      prenom: [''],
      nom: [''],
      email: [''],
      password: [''],
      
    });
  }
  handelSubmit(){
    this.httpService.addUser(this.userForm.value).subscribe(rep =>{
      this.toastr.success('Ajout bien fait','Ajout Sucess',{
        positionClass:"toast-bottom-center",
        timeOut:3000
      });
      setTimeout(bey,2000);
        function bey(){
          location.reload();
        }
    },
    error=>{
      this.toastr.error('erruer d ajout','Ajout Erreur',{
        positionClass:"bottom-center",
        timeOut:3000
      });
    }
    );
    
  }

}
