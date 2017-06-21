import { Component, OnInit } from '@angular/core';
import { Recipe } from "../recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Really Good Picture Of Toad', 'Take one picture of Toad. Add the powerful thighs of a man. Finish with an official retweet from Nintendo.', 'https://pbs.twimg.com/media/DAdJqrqXkAANpG1.png')
  ];

  constructor() { }

  ngOnInit() {
  }

}
