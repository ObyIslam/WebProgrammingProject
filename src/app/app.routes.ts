import { Routes } from '@angular/router';
import { CharactersComponent } from './components/characters/characters.component';
import { ComicsComponent } from './components/comics/comics.component';


export const routes: Routes = [
    {path:'',component:ComicsComponent},
    {path:'characters',component:CharactersComponent},
];
