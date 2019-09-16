import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

// Third party imports
import { NgxLoadingModule } from 'ngx-loading';
import { NgbModule, NgbDateAdapter } from '@ng-bootstrap/ng-bootstrap';

// App imports
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { EntryEditorComponent } from './entry-editor/entry-editor.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { WorkoutsComponent } from './workouts/workouts.component';
import { WorkoutsAPIService } from './services/workouts-api.service';
import { DateStringAdapterService } from './services/date-string-adapter.service';
import { PerformanceTargetsModalComponent } from './performance-targets-modal/performance-targets-modal.component';
import { AdminComponent } from './admin/admin.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EntryEditorComponent,
    NavMenuComponent,
    WorkoutsComponent,
    PerformanceTargetsModalComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxLoadingModule.forRoot({}),
    FormsModule,
    NgbModule
  ],
  providers: [
    WorkoutsAPIService,
    { provide: NgbDateAdapter, useClass: DateStringAdapterService }
  ],
  entryComponents: [
    PerformanceTargetsModalComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
