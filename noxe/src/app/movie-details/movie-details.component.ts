import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Image, Movie } from '../model/movie';
import { MovieDataService } from '../movie-data.service';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
  id:string='';
  moviesDetials:any= [];
  moviesVideo:any=[];
  moviesimage:Image|null=null;
  moviescredits:any=[]
  getsimilar:any=[]
  imagePrfix:string="https://image.tmdb.org/t/p/w500/";
  

  constructor(private _activated:ActivatedRoute,private _movie:MovieDataService) { 
  }
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 6
      },
      940: {
        items: 8
      }
    },
    nav: true
  }
  ngOnInit(): void {
    this.id= this._activated.snapshot.params.id;
    this._movie.getdetials("movie",this.id).subscribe((resopens)=>{
      this.moviesDetials=resopens;
    })
    this._movie.getvideos("movie",this.id).subscribe((resopens)=>{
      this.moviesVideo=resopens.results
    })
    this._movie.getimage(this.id).subscribe((resopens)=>{
      this.moviesimage=resopens
      console.log(this.moviesimage)
    })
    this._movie.getcredits(this.id).subscribe((resopens)=>{
      this.moviescredits=resopens
    })
    this._movie.getsimilar(this.id).subscribe((resopens)=>{
      this.getsimilar=resopens
    })
   
  }

  
  
}

