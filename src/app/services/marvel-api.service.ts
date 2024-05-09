import { Injectable } from '@angular/core';
import { HttpClient,HttpErrorResponse } from '@angular/common/http';
import { Observable,catchError,tap } from 'rxjs';
import { IComic } from '../interfaces/marvel';


@Injectable({
  providedIn: 'root'
})
export class MarvelApiService {

  constructor(private _http:HttpClient) { }
  private _siteURL = "https://gateway.marvel.com/v1/public/comics?ts=1&apikey=9ed9bf569fd0fca6d6fdaca36b07b42f&hash=01b9a592754d76c35b74098c10bd0911";

  getComicsDetails():Observable<any>{

    console.log("express url:" + this._siteURL)
    return this._http.get<IComic>(this._siteURL)
    .pipe(
      tap(data => console.log('car data/error' + JSON.stringify(data))
    ),
    catchError(this.handleError)
    );
  }

  private handleError (err:HttpErrorResponse) {
    console.log('CarApiService: ' + err.message);
    return err.message;
  }
  
}