import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Test Recipe 1', 'Test desciption for Recipe 1', 'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_1280.jpg'),
    new Recipe('Test Recipe 2', 'Test desciption for Recipe 2', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuzQahCPMt6LONlt4n46IQ_Wmn7WnOeXxL3g&usqp=CAU')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
