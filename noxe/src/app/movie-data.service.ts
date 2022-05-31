import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieDataService {

  constructor(private _httpclint:HttpClient) { }
  getTrending(mediaType:string):Observable<any>{
    return this._httpclint.get(`https://api.themoviedb.org/3/trending/${mediaType}/day?api_key=5ab235cc9682a66562b8dedb728f4107`)
  }
  getpage(mediaType:string,page:number):Observable<any>{
    return this._httpclint.get(`https://api.themoviedb.org/3/trending/${mediaType}/day?api_key=5ab235cc9682a66562b8dedb728f4107&page=${page}`)
  }
  getvideos(mediaType:string,id:string):Observable<any>{
    return this._httpclint.get(`https://api.themoviedb.org/3/${mediaType}/${id}/videos?api_key=5ab235cc9682a66562b8dedb728f4107&language=en-US
    `)
  }
  getMovieBygener(id:string,page:number):Observable<any>{
    return this._httpclint.get(`https://api.themoviedb.org/3/discover/movie?with_genres=${id}&page=${page}&api_key=5ab235cc9682a66562b8dedb728f4107&language=en-Us`)
  }
  getgener():Observable<any>{
    return this._httpclint.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=5ab235cc9682a66562b8dedb728f4107&language=en-Us`)
  }
  getimage(id:string):Observable<any>{
    return this._httpclint.get(`https://api.themoviedb.org/3/movie/${id}/images?api_key=5ab235cc9682a66562b8dedb728f4107&language=en-US`)
  }
  getcredits(id:string):Observable<any>{
    return this._httpclint.get(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=5ab235cc9682a66562b8dedb728f4107&language=en-US`)
  }
  getsimilar(id:string):Observable<any>{
    return this._httpclint.get(`https://api.themoviedb.org/3/movie/${id}/similar?api_key=5ab235cc9682a66562b8dedb728f4107&language=en-US`)
  }
  getdetials(type:string,id:string):Observable<any>{
    return this._httpclint.get(`https://api.themoviedb.org/3/${type}/${id}?api_key=5ab235cc9682a66562b8dedb728f4107&language=en-US`)
  }
  searchMovie(page:number,searchValue:string):Observable<any>{
    return this._httpclint.get(`https://api.themoviedb.org/3/search/movie?api_key=5ab235cc9682a66562b8dedb728f4107&language=en-US&query=${searchValue}&page=${page}&include_adult=false`)
  }
}
