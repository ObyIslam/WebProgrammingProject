import { Component,Input,Output,EventEmitter} from '@angular/core';
import { ICharacter } from '../../interfaces/character';
import { CommonModule } from '@angular/common';
import { MarvelApiService } from '../../services/marvel-api.service';

@Component({
  selector: 'app-character-popup',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './character-popup.component.html',
  styleUrl: './character-popup.component.css'
})
export class CharacterPopupComponent {
  @Input() character:ICharacter|null = null
  @Output() closePopupEvent: EventEmitter<void> = new EventEmitter<void>();

  characterImageWidth:number = 250;
  characterImageHeight:number = 400;

  getThumbnailUrl(thumbnail: { path: string; extension: string }): string {
    return `${thumbnail.path}.${thumbnail.extension}`;
  }

  closePopup() {
    this.closePopupEvent.emit();
  }

  constructor(private _marvelAPIService: MarvelApiService) {}

  saveCharacter() {
    if (this.character) {
      const characterDataToSave:ICharacter = {
        id: this.character.id,
        name: this.character.name,
        thumbnail: this.character.thumbnail,
      };
    
      this._marvelAPIService.saveCharacterDetails(characterDataToSave).subscribe(
        () => {
          console.log('Character data saved successfully');
        },
        (error) => {
          console.error('Error saving character data:', error);
        }
      );
    }
    
  
  }


}
