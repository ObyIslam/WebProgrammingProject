import { Injectable } from '@angular/core';
import { HttpClient,HttpErrorResponse } from '@angular/common/http';
import { Observable,catchError,tap } from 'rxjs';
import { IComic } from '../interfaces/comics';


@Injectable({
  providedIn: 'root'
})
export class MarvelApiService {

  constructor(private _http:HttpClient) { }
  private _siteURL = "https://gateway.marvel.com/v1/public/comics?ts=1&apikey=9ed9bf569fd0fca6d6fdaca36b07b42f&hash=01b9a592754d76c35b74098c10bd0911";
  private _siteURL2 = "https://gateway.marvel.com/v1/public/characters?ts=1&apikey=9ed9bf569fd0fca6d6fdaca36b07b42f&hash=01b9a592754d76c35b74098c10bd0911";
  private _siteURL3 = "http://localhost:5050/marvelStuff"

  getComicsDetails():Observable<any>{

    console.log("express url:" + this._siteURL)
    return this._http.get<IComic>(this._siteURL)
    .pipe(
      tap(data => console.log('comic data/error' + JSON.stringify(data))
    ),
    catchError(this.handleError)
    );
  }

  getCharacterDetails():Observable<any>{

    console.log("express url:" + this._siteURL2)
    return this._http.get<IComic>(this._siteURL2)
    .pipe(
      tap(data => console.log('character data/error' + JSON.stringify(data))
    ),
    catchError(this.handleError)
    );
  }

  private handleError (err:HttpErrorResponse) {
    console.log('CarApiService: ' + err.message);
    return err.message;
  }

  saveComicDetails(comic: IComic): Observable<any> {
    return this._http.post<any>(this._siteURL3, comic);
  }

  
  
}
