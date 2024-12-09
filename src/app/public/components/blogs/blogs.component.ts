import { Component } from '@angular/core';
import { Article } from './article.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-blogs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './blogs.component.html',
  styleUrl: './blogs.component.scss'
})
export class BlogsComponent {
  articles: Article[] = [
    new Article('assets/homepage.jpg', 'How To Travel With Paper Map', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.', 'Read More'),
    new Article('assets/homepage.jpg', 'Stay Always Hydrated While Travelling', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.', 'Read More'),
    new Article('assets/homepage.jpg', 'Things You Need In Your Bag Before Travelling', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.', 'Read More')
  ];
}
