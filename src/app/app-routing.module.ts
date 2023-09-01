import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountriesComponent } from './countries/countries.component';
import { FavsComponent } from './favs/favs.component';
import { SearchComponent } from './search/search.component';
import { CreateComponent } from './create/create.component';

const routes: Routes = [
  { path: 'countries', component: CountriesComponent},
  { path: 'favs', component: FavsComponent},
  { path: 'create', component: CreateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [CountriesComponent, FavsComponent, CreateComponent]
