import { Component, OnInit } from '@angular/core';
import { TmdbApiService } from './../../services/tmdb-api.service';

@Component({
  selector: 'app-favmovies',
  templateUrl: './favmovies.component.html',
  styleUrls: ['./favmovies.component.css'],
  providers:[ TmdbApiService ]
  })
export class FavmoviesComponent implements OnInit {
  public movies : any=[];
  public moviesValue : any;
  public Value="http://image.tmdb.org/t/p/w185/";
  constructor(
    private tmdbApiService:TmdbApiService
    ) { }

  ngOnInit(): void {
      this.getMoviesfromjson();
  }
  


  getMoviesfromjson(): void{
  
    this.tmdbApiService.getMoviesfromjson().subscribe(response=>{
      // console.log(JSON.stringify(response['data']))
  
      this.movies=response;
    
       console.log(JSON.stringify(this.movies));
      },error=>{
        console.log(error);
        });

  }

 
  getMovies():void{
   this.tmdbApiService.getMovies(this.moviesValue).subscribe(response=>{

    },error=>{
      console.log(error);
      });
 }


 favdeleteMovies(movieId):void{
  console.log("iddd"+movieId);
  this.tmdbApiService.deleteMovies(movieId)
  .subscribe(response=>{
    this.getMoviesfromjson();
    },error=>{
      console.log(error);
      });

}

}










