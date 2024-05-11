import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MarvelApiService } from '../../services/marvel-api.service';
import { ICharacter } from '../../interfaces/character';
import { CharacterPopupComponent } from '../character-popup/character-popup.component';


@Component({
  selector: 'app-characters',
  standalone: true,
  imports: [RouterLink,CommonModule,CharacterPopupComponent],
  templateUrl: './characters.component.html',
  styleUrl: './characters.component.css'
})
export class CharactersComponent {

  characterImageWidth:number = 250;
  characterImageHeight:number = 400;
  characterData:ICharacter|any
  selectedCharacter: ICharacter | null = null;
  isPopupVisible = false;

  constructor(private _marvelAPIService:MarvelApiService){}

  ngOnInit(){
    this.getCharacterDetails()
  }

  getCharacterDetails(){
    this._marvelAPIService.getCharacterDetails().subscribe(characterData =>
      { this.characterData = characterData
    });
  }

  getThumbnailUrl(thumbnail: { path: string; extension: string }): string {
    return `${thumbnail.path}.${thumbnail.extension}`;
  }

  showCharacterDetails(character: ICharacter) {
    console.log('Clicked comic:', character);
    this.selectedCharacter = character;
    this.isPopupVisible = true; 
  }

  closePopupHandler() {
    this.isPopupVisible = false;
  }
}
