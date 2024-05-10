import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MarvelApiService } from '../../services/marvel-api.service';
import { IComic,NewComic } from '../../interfaces/comics';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-comics',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './comics.component.html',
  styleUrl: './comics.component.css'
})
export class ComicsComponent {

  comicImageWidth:number = 250;
  comicImageHeight:number = 400;
  comicsData:IComic|any
  show:boolean = false
  constructor(private _marvelAPIService:MarvelApiService){}

  ngOnInit(){
    this.getComics()
  }

  getComics(){
    this._marvelAPIService.getComicsDetails().subscribe(comicsData =>
      { this.comicsData = comicsData
    });
  }

  getThumbnailUrl(thumbnail: { path: string; extension: string }): string {
    return `${thumbnail.path}.${thumbnail.extension}`;
  }

}
