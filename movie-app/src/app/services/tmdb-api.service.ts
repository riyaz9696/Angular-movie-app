import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AppConfig } from './../config/config.constant';

import { catchError, map, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';



@Injectable()
export class TmdbApiService {
 
  constructor(private http: HttpClient) { }
//   getMovies(movieName: String): Observable<movie> {
//   const url = `${urlValue}`;
//   return this.http.get<movie>(url).pipe(
//     tap(_ => this.log(movie)),
//     catchError(this.handleError<movie>())
//   );
// }

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

}






 





