import { Component, OnInit } from '@angular/core';
import { TmdbApiService } from './../../../services/tmdb-api.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css'],
  providers:[ TmdbApiService ]
  })
export class MoviesComponent implements OnInit {
  public movies : any;
  public moviesValue : any;

  public Value="http://image.tmdb.org/t/p/w185/";
  constructor(
    private tmdbApiService:TmdbApiService,
    private toastr: ToastrService
    ) { }

  ngOnInit() {
    // this.getMoviesValue();
  }


//get Plans data based on id 
getMoviesValue():void {
  this.tmdbApiService.getMovies(this.moviesValue)
  .subscribe(response=>{
   
    this.movies=response['results']
    
    },error=>{
      console.log(error);
      });
}

favMoviesValue(data):void {
  this.tmdbApiService.favMovies(data)
  .subscribe(response=>{
    },error=>{
      console.log(error);
      });
}

  /*favdeleteMovies(movieId):void{
    console.log("iddd"+movieId);
    this.tmdbApiService.deleteMovies(movieId)
    .subscribe(response=>{

      },error=>{
        console.log(error);
        });
        }*/

// testVlaue()
// {
//   console.log("getting value"+this.moviesValue)
// }



}







