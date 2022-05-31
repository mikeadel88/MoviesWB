import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieDataService } from '../movie-data.service';



@Component({
  selector: 'app-tv-details',
  templateUrl: './tv-details.component.html',
  styleUrls: ['./tv-details.component.css']
})
export class TvDetailsComponent implements OnInit {
  id:string='';
  tvDetials:any={};
  imagePrfix:string="https://image.tmdb.org/t/p/w500/";
  constructor(private _activated:ActivatedRoute,private _movie:MovieDataService) {
  
   }

  ngOnInit(): void {
    this.id= this._activated.snapshot.params.id;
    this._movie.getdetials("tv",this.id).subscribe((resopens)=>{
      this.tvDetials=resopens;
    })

  }

}
