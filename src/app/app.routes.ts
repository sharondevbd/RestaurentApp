import { Routes } from '@angular/router';
import { RecipeComponent } from './Pages/recipe/recipe.component';
import { RecipeFormComponent } from './Pages/recipe-form/recipe-form.component';

export const routes: Routes = [
    {path:"recipe", component:RecipeComponent},
    {
        path: 'recipe',
        children: [
          { path: '', component: RecipeComponent },
          { path: 'add', component: RecipeFormComponent },
          { path: 'add/:id', component: RecipeComponent },
        ],
        // canActivate: [authGuard],
      },
];
