import { Component } from '@angular/core';

export interface Post {
  title: string;
  text: string;
  id?: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  posts: Post[] = [
    {title: 'Хочу виучить Angular component', text: 'Балушик товстун', id: 1},
    {title: 'Следущий блок', text: 'Будет про дерективы', id: 2}
  ];
}

