import { Component,Input,Output,EventEmitter} from '@angular/core';
import { IComic } from '../../interfaces/comics';
import { CommonModule } from '@angular/common';
import { MarvelApiService } from '../../services/marvel-api.service';

@Component({
  selector: 'app-comic-popup',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './comic-popup.component.html',
  styleUrl: './comic-popup.component.css'
})
export class ComicPopupComponent {
  @Input() comic:IComic|null = null
  @Output() closePopupEvent: EventEmitter<void> = new EventEmitter<void>();

  comicImageWidth:number = 250;
  comicImageHeight:number = 400;

  getThumbnailUrl(thumbnail: { path: string; extension: string }): string {
    return `${thumbnail.path}.${thumbnail.extension}`;
  }

  closePopup() {
    this.closePopupEvent.emit();
  }

  constructor(private _marvelAPIService: MarvelApiService) {}

  saveComic() {
    if (this.comic) {
      const comicDataToSave: IComic = {
        id: this.comic.id,
        title: this.comic.title,
        thumbnail: this.comic.thumbnail,
        pageCount: this.comic.pageCount,
        modified: this.comic.modified,
        creators: this.comic.creators
      };
  
      this._marvelAPIService.saveComicDetails(comicDataToSave).subscribe(
        () => {
          console.log('Comic data saved successfully');
        },
        (error) => {
          console.error('Error saving comic data:', error);
        }
      );
    }
  }
  

}
