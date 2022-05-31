import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from '../model/movie';
import { MovieDataService } from '../movie-data.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  movies:Movie[]=[]
  imagePrfix:string="https://image.tmdb.org/t/p/w300/";
  id:string="";
  searchValue:string=""

  constructor(private _movies:MovieDataService,private _active:ActivatedRoute) { }

  ngOnInit(): void {
    this.id=this._active.snapshot.params.genreid
    if(this.id){
      this._movies.getMovieBygener(this.id,1).subscribe((res)=>{
        this.movies=res.results
      })
    }
    else
    this._movies.getTrending("movie").subscribe((res)=>{
       this.movies=res.results
    })
    this._movies.searchMovie(1,this.searchValue).subscribe((res)=>{
      this.movies=res.results
    })
  }
  paginate(event:any){
    if(this.id){
      this._movies.getMovieBygener(this.id,event.page+1).subscribe((res)=>{
        this.movies=res.results
      })
    }
    this._movies.getpage("movie",event.page+1).subscribe((res)=>{
      this.movies=res.results
    })
    this._movies.searchMovie(event.page+1,this.searchValue).subscribe((res)=>{
      this.movies=res.results
    })
    
  }
  changeSearch(){
    if (this.searchValue){
      this._movies.searchMovie(1,this.searchValue).subscribe((res)=>{
        this.movies=res.results
      })
    }
    this._movies.getTrending("movie").subscribe((res)=>{
      this.movies=res.results
   })
  
  }
}
