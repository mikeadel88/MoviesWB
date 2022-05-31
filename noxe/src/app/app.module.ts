import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { MoviesComponent } from './movies/movies.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import {HttpClientModule} from '@angular/common/http';
import { HeaderComponent } from './header/header.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { TvDetailsComponent } from './tv-details/tv-details.component';
import { PersondetialisComponent } from './persondetialis/persondetialis.component';
import {PaginatorModule} from 'primeng/paginator';
import {TabViewModule} from 'primeng/tabview';
import { EmbedVideoComponent } from './embed-video/embed-video.component';
import {ImageModule} from 'primeng/image';
import { GenresComponent } from './genres/genres.component';
import {InputTextModule} from 'primeng/inputtext';







@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    LoginComponent,
    SignupComponent,
    MoviesComponent,
    MovieDetailsComponent,
    NotfoundComponent,
    NavBarComponent,
    HeaderComponent,
    TvDetailsComponent,
    PersondetialisComponent,
    EmbedVideoComponent,
    GenresComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CarouselModule,
    PaginatorModule,
    TabViewModule,
    ImageModule,
    InputTextModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
