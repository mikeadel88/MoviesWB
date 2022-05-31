import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm:FormGroup=new FormGroup({
    password:new FormControl("",[Validators.required]),
    email:new FormControl("",[Validators.email]),
  });

  constructor(private _auth:AuthService, private _router:Router ) {}
  Login(form: any){
    if(form.valid){
      this._auth.login(form.value).subscribe((respones)=>{ 
        console.log(respones);
        

        if(respones.message =="success")
        {
          localStorage.setItem("userToken",respones.token)
          this._auth.saveUserDate();
          this._router.navigate(['home'])
        }
      })
    }
  }
  ngOnInit(): void {
  }

}
