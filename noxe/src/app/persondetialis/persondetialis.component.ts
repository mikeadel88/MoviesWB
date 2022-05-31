import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieDataService } from '../movie-data.service';
@Component({
  selector: 'app-persondetialis',
  templateUrl: './persondetialis.component.html',
  styleUrls: ['./persondetialis.component.css']
})
export class PersondetialisComponent implements OnInit {
  id:string='';
  personDetials:any={};
  imagePrfix:string="https://image.tmdb.org/t/p/w500/";
  constructor(private _activated:ActivatedRoute,private _movie:MovieDataService) {
  
   }

  ngOnInit(): void {
    this.id= this._activated.snapshot.params.id;
    this._movie.getdetials("person",this.id).subscribe((resopens)=>{
      this.personDetials=resopens;
    })

  }

}
