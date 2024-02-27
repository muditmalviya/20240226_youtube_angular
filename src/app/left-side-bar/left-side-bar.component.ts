import { Component } from '@angular/core';
import { SubcriptionComponent } from '../subcription/subcription.component';

@Component({
  selector: 'app-left-side-bar',
  standalone: true,
  imports: [SubcriptionComponent],
  templateUrl: './left-side-bar.component.html',
  styleUrl: './left-side-bar.component.css'
})
export class LeftSideBarComponent {

}
