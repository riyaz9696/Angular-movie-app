import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AppConfig } from './../config/config.constant';

import { catchError, map, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';



@Injectable()
export class TmdbApiService {
 
  constructor(private http: HttpClient) { }


getMovies(value:string){
   return this.http.get(AppConfig.search_api+value)
 }

favMovies(data){
   return this.http.post(AppConfig.jsonApi,data)
 }

 deleteMovies(movieId){
  return this.http.delete(AppConfig.delApiByID+movieId)
 }

getMoviesfromjson(){
  return this.http.get(AppConfig.getMovies);
}

// getMoviesbyName(value:string): void {
//   return this.http.get(AppConfig.getMovies+value);
//   }


 getFavouriteOnModel(movieId){ 
   return this.http.get(AppConfig.getByID+movieId);   
 }

updateMovieOnModel(movie){
  return this.http.put(AppConfig.editMovie+movie.id, movie)


  }

 
}






 





