import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ComicsComponent } from './components/comics/comics.component';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ComicsComponent,HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'WebProgrammingProject';
}
