declare var google:any;
import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomeService } from '../../shared/services/home.service';
import { IAssociate } from '../../shared/models/associate.interface';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  private router = inject(Router);
  homeService = inject(HomeService);

  //associateDetails: IAssociate[] = [];

 ngOnInit(): void {
     google.accounts.id.initialize({
      client_id: environment.googleClientId,
      callback:(resp:any) =>this.handleLogin(resp),
     });

     google.accounts.id.renderButton(document.getElementById("google-btn"), {
      theme: 'filled_blue',
      size: 'large',
      shape: 'rectangle',
      width:350
     });    
 }

 private decodeToken(token:string){
  return JSON.parse(atob(token.split(".")[1]));
 }

  handleLogin(response: any) {
    if (response) {
      // decode the token
      const payload = this.decodeToken(response.credential);

      // Fetching the associate details data from the service
      this.homeService.getAssociateDetailsByEmail(payload.email)
        .subscribe(resp => {          
          // add additional fields
          const extendedPayload = {
            ...payload,            
            associateId: (resp.result[0]?.associateId) || '',
            associateName: (resp.result[0]?.name) || '',
            associateRole: (resp.result[0]?.role) || '',
            associateCity: (resp.result[0]?.city) || '',
          };

          console.log("Extended Payload = ", extendedPayload);
          // store the session
          sessionStorage.setItem("loggedInUser", JSON.stringify(extendedPayload));
          // navigate to home page
          this.router.navigate(['home']);
        });
    }
  }

  // handleLogin(response: any){
  //   if(response) {
  //     //decode the token
  //     const payload = this.decodeToken(response.credential);
  //     //store the session
  //     sessionStorage.setItem("loggedInUser",JSON.stringify(payload));
  //     //navigate to home page
  //     this.router.navigate(['home']);
  //   }
  // }

}
