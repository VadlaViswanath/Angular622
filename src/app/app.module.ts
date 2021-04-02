import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';


import { AppComponent } from './app.component';
import { Ang6CompComponent } from './ang6-comp/ang6-comp.component';
import { Ang6ServiceService } from './services/ang6-service.service';
import { Ang62Component } from './ang62/ang62.component';
import { DependentSelectComponent } from './dependent-select/dependent-select.component';
import { CountryService } from './services/country.service';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { SubjectComponent } from './components/subject/subject.component';
import { Subject2Component } from './components/subject2/subject2.component';
import { GoogleSearchComponent } from './google-search/google-search.component';
import { RxjsComponent } from './components/rxjs/rxjs.component';
import { OfFromComponent } from './components/of-from/of-from.component';
import { MergeMapComponent } from './components/merge-map/merge-map.component';
import { ConcatMapComponent } from './components/concat-map/concat-map.component';
import { ListBooksComponent } from './components/list-books/list-books.component';
import { UserModule } from './modules/user/user.module';
import { MarkdownDirective } from './directives/markdown.directive';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DashboardService } from './services/dashboard.service';
import { HeaderComponent } from './components/header/header.component';
import { TableComponent } from './components/table/table.component';
import { SortPipe } from './pipes/sort.pipe';
import { Login2Component } from './components/login2/login2.component';
import { ItemsListComponent } from './components/items-list/items-list.component';
import { ItemsDetailsComponent } from './components/items-details/items-details.component';
import { ItemsService } from './services/items.service';

@NgModule({
  declarations: [
    AppComponent,
    Ang6CompComponent,
    Ang62Component,
    DependentSelectComponent,
    SubjectComponent,
    Subject2Component,
    GoogleSearchComponent,
    RxjsComponent,
    OfFromComponent,
    MergeMapComponent,
    ConcatMapComponent,
    ListBooksComponent,
    MarkdownDirective,
    LoginComponent,
    DashboardComponent,
    HeaderComponent,
    TableComponent,
    SortPipe,
    Login2Component,
    ItemsListComponent,
    ItemsDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,
    UserModule
  ],
  providers: [Ang6ServiceService,CountryService,DashboardService,ItemsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
