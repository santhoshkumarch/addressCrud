import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { AppRoutingModule }     from './app-routing.module';

import { AppComponent }         from './app.component';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { HeroesComponent }      from './heroes/heroes.component';
import { SidebarComponent } from './sidebar/sidebar.component';

//Material-Module
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatIconModule,MatSidenavModule, MatCardModule, MatInputModule, MatButtonModule,MatListModule, MatBottomSheetModule, MatDialogModule } from "@angular/material";
import { EditModalComponent } from './edit-modal/edit-modal.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    MatIconModule,
    MatSidenavModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatListModule,
    MatBottomSheetModule,
    MatDialogModule,
    BrowserAnimationsModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    HeroesComponent,
    SidebarComponent,
    EditModalComponent
  ],
  entryComponents: [EditModalComponent],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
