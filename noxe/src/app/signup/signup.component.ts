import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  errors:string=""
  profileForm:FormGroup=new FormGroup({
    first_name:new FormControl("",[Validators.required,Validators.minLength(3),Validators.maxLength(10)]),
    last_name:new FormControl("",[Validators.required,Validators.minLength(3),Validators.maxLength(10)]),
    password:new FormControl("",[Validators.required]),
    email:new FormControl("",[Validators.email]),
    age:new FormControl("",[Validators.min(18),Validators.max(80),Validators.required]),
  });
  constructor(private _auth:AuthService ,private _route:Router) { }

  ngOnInit(): void {
  }
onSubmit(form: any){
  console.log(form);
  
  if(form.valid){
    this._auth.register(form.value).subscribe((response)=>{
      console.log(response);
      
      if(response.message =='success'){
        this._route.navigate(["login"])
      }
      else{
        this.errors=response.errors.email.message;
        
      }
    })
  }
  
}

}
