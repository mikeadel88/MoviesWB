import { Component, OnInit } from '@angular/core';
import { Movie } from '../model/movie';
import { MovieDataService } from '../movie-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private _movie:MovieDataService) { }
  trendingMovie:Movie[]=[]
  trendingTv:Movie[]=[]
  trendingPeople:Movie[]=[]
  imagePrfix:string="https://image.tmdb.org/t/p/w342/";
  ngOnInit(): void {
    this._movie.getTrending("movie").subscribe((response)=>{
      this.trendingMovie=response.results.slice(0,10);
    })
    this._movie.getTrending("tv").subscribe((response)=>{
      this.trendingTv=response.results.slice(0,10);
    })
    this._movie.getTrending("person").subscribe((response)=>{
      this.trendingPeople=response.results.slice(0,10);
    })
  }

}
