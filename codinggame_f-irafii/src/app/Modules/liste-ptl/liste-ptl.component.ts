import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/authServices/auth.service';
import { AddPtlDialogComponent } from 'src/app/dialogs/add-ptl-dialog/add-ptl-dialog.component';
import { UpdatePtlDialogComponent } from 'src/app/dialogs/update-ptl-dialog/update-ptl-dialog.component';
import { User } from 'src/app/model/user';

//import { ToastrService } from 'ngx-toastr';
import { HttpService } from 'src/app/services/http.service';


@Component({
  selector: 'app-liste-ptl',
  templateUrl: './liste-ptl.component.html',
  styleUrls: ['./liste-ptl.component.scss']
})
export class ListePtlComponent implements OnInit {
  listOfUsers!: User[];
  currentUrl = this.router.url;

  constructor(
    private httpService: HttpService,
    private dialog: MatDialog,
    private toastr: ToastrService,
    private router : Router,
    private authService:AuthService
    ) { }

  ngOnInit(): void {
    this.httpService.fetchAll().subscribe(user => this.listOfUsers=user);
  }

  openDialogAdd(){
    this.dialog.open(AddPtlDialogComponent);
  }
  openDialogUpdate(){
    this.dialog.open(UpdatePtlDialogComponent);
  }

  delete(id: number){
    if(confirm("Voulez-vous supprimer PTL")){
      this.httpService.delete(id).subscribe(resp =>{

        this.toastr.success('PTL supprimer avec sucess','PTL Supprimer',{
          positionClass: 'toast-bottom-center',
          timeOut: 4000,
        });
        this.bey();
      },
      error=>{
        this.toastr.error('PTL non supprimer','ERREUr Suppression',{
          positionClass: 'toast-bottom-center',
          timeOut: 3000,
        })
      }
      );
    }
  }

  bey(){
    this.router.navigateByUrl('', { skipLocationChange: true }).then(()=>{
      this.router.navigate(['ptl']);
    })
  }

  updateUser(id: number){
    this.router.navigate(['update-ptl-dialog',id]);
  }


}
