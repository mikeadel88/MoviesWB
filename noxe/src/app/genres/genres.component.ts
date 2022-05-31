import { Component, OnInit } from '@angular/core';
import { Gener } from '../gener';
import { MovieDataService } from '../movie-data.service';

@Component({
  selector: 'app-genres',
  templateUrl: './genres.component.html',
  styleUrls: ['./genres.component.css']
})
export class GenresComponent implements OnInit {
  geners:Gener[] =[]
  constructor(private _movie:MovieDataService) { }

  ngOnInit(): void {
    this._movie.getgener().subscribe((respons)=>{
      this.geners=respons.genres
    })
  }

}
