import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  isLogin:boolean=false;
  constructor(private _auth:AuthService) { }
  logout(){
    this._auth.logout();
  }
  ngOnInit(): void {
  this._auth.userDAte.subscribe(()=>{
    if(this._auth.userDAte.getValue()!=null){
      this.isLogin=true
    }
    else{
      this.isLogin=false;
    }
  })
  }

}
