import { Component } from '@angular/core';
import { BlogsComponent } from "../blogs/blogs.component";

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [BlogsComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent {

}
