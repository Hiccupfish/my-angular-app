import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// import { example } from './app/components/example'
import { ExampleComponent } from './components/example/example.component';
import {HeaderComponentComponent} from './components/header.component/header.component.component'
import { HomeComponent } from './home/home.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HeaderComponentComponent, ExampleComponent,HomeComponent],
  template: `<main>
                <header class="brand-name">
                    <img class="brand-logo" src="/assets/logo.svg" alt="logo" aria-hidden="true" /> 
                </header>
                <section>
                  <h1>This is the Parent app component</h1>
                  <app-home />
                </section>
            </main>`,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-angular-app';
}
