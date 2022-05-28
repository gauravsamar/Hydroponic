import { Component, OnInit, Inject} from '@angular/core';
import { MatDialogRef, MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SocialAuthService, GoogleLoginProvider, FacebookLoginProvider } from 'angularx-social-login';
import {MatInputModule} from '@angular/material/input';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<LoginComponent>,
    @Inject(MAT_DIALOG_DATA) public data: null, 
    private socialAuthService:SocialAuthService) { }

  onNoClick(): void 
  {
      this.dialogRef.close();
  }

  ngOnInit(): void {
  }
  onGoogleSignIn():void
  {
    this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID).then(
      (user)=>{
        console.log(user);
      }
    );
  }

}
