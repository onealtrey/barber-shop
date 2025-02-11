import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ImageWheelComponent } from './image-wheel/image-wheel.component';
import { ServicesComponent } from './services/services.component';
import { NavigationComponent } from './navigation/navigation.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    ImageWheelComponent,
    ServicesComponent,
    NavigationComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'barber-shop';
}
