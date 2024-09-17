import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { AdminModule } from './admin/admin.module';
import { UiModule } from './ui/ui.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,AdminModule,UiModule,RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ecommerceFrontEnd';
}
