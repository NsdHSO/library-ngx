import { Component } from '@angular/core';
import {of} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'library';
  test = 'bg-primary';
  public showButtons: any;

  array = of([
    {
      "id": 1,
      "name": "John Doe",
      "age": 25
    },
    {
      "id": 2,
      "name": "Jane Smith",
      "age": 30
    },
    {
      "id": 3,
      "name": "David Johnson",
      "age": 35
    },
    {
      "id": 4,
      "name": "Emily Brown",
      "age": 28
    },
    {
      "id": 5,
      "name": "Michael Davis",
      "age": 32
    },
    {
      "id": 6,
      "name": "Sarah Wilson",
      "age": 29
    },
    {
      "id": 7,
      "name": "Robert Taylor",
      "age": 31
    },
    {
      "id": 8,
      "name": "Jennifer Anderson",
      "age": 27
    },
    {
      "id": 9,
      "name": "Christopher Martinez",
      "age": 33
    },
    {
      "id": 10,
      "name": "Amanda Thompson",
      "age": 26
    }
  ])
}
