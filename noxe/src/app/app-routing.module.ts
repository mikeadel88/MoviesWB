import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { GenresComponent } from './genres/genres.component';
import { GuradGuard } from './gurad.guard';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { MoviesComponent } from './movies/movies.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { PersondetialisComponent } from './persondetialis/persondetialis.component';
import { SignupComponent } from './signup/signup.component';
import { TvDetailsComponent } from './tv-details/tv-details.component';

const routes: Routes = [
  {path:"",redirectTo:"home",pathMatch:"full"},
  {path:"home",canActivate:[GuradGuard],component:HomeComponent},
  {path:"about",canActivate:[GuradGuard],component:AboutComponent},
  {path:"login",component:LoginComponent},
  {path:"contact",canActivate:[GuradGuard],component:ContactComponent},
  {path:"signup",component:SignupComponent},
  {path:"movies",canActivate:[GuradGuard],component:MoviesComponent},
  {path:"movies/genres/:genreid",canActivate:[GuradGuard],component:MoviesComponent},
  {path:"movieDetails/:id",component:MovieDetailsComponent},
  {path:"tvDetails/:id",canActivate:[GuradGuard],component:TvDetailsComponent},
  {path:"personDetails/:id",canActivate:[GuradGuard],component:PersondetialisComponent},
  {path:"genres",canActivate:[GuradGuard],component:GenresComponent},
  {path:"settings",loadChildren: ()=> import("./settings/settings-routing.module").then((m)=>m.SettingsRoutingModule),canActivate:[GuradGuard]},
  {path:"**",component:NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
