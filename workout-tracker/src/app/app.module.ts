import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Third party imports
import { NgxLoadingModule } from 'ngx-loading';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { EntryEditorComponent } from './entry-editor/entry-editor.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { WorkoutsComponent } from './workouts/workouts.component';
import { HttpClientModule } from '@angular/common/http';
import { WorkoutsAPIService } from './services/workouts-api.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EntryEditorComponent,
    NavMenuComponent,
    WorkoutsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxLoadingModule.forRoot({})
  ],
  providers: [
    WorkoutsAPIService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
