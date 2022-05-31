export interface Movie{
 poster_path : string ,
 profile_path : string ,
 title :  string ,
 name:string,
 video : boolean,
 vote_average : number,
 overview : string ,
 release_date :  number ,
 adult : boolean,
 backdrop_path :  string ,
 vote_count : number,
 id : number,
 original_language :  string ,
 original_title : string ,
 popularity : number,
 media_type :  string 
}
export interface Image{
    backdrops:{
        file_path:string;
    }[]
}