import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { ImageComponent } from './components/image/image.component';
import { RecipeListComponent } from './components/recipe-list/recipe-list.component';
import { RecipeEditorComponent } from './components/recipe-editor/recipe-editor.component';

@NgModule({
  declarations: [AppComponent, ImageComponent, RecipeListComponent, RecipeEditorComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
