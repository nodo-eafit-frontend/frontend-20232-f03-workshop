import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipeListComponent } from './components/recipe-list/recipe-list.component';
import { RecipeEditorComponent } from './components/recipe-editor/recipe-editor.component';

const routes: Routes = [
  { path: '', component: RecipeListComponent },
  { path: 'edit', component: RecipeEditorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
