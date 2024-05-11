import { Component } from '@angular/core';
import { RouterOutlet,RouterLink,RouterLinkActive } from '@angular/router';
import { ComicsComponent } from './components/comics/comics.component';
import { CharactersComponent } from './components/characters/characters.component';
import { HttpClientModule } from '@angular/common/http';
import { ComicPopupComponent } from './components/comic-popup/comic-popup.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ComicsComponent,HttpClientModule,RouterLink,RouterLinkActive,CharactersComponent,ComicPopupComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'WebProgrammingProject';
}
