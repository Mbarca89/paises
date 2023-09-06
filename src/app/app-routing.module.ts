import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountriesComponent } from './countries/countries.component';
import { FavsComponent } from './favs/favs.component';
import { SearchComponent } from './search/search.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';

const routes: Routes = [
  { path: '', component: CountriesComponent},
  { path: 'favs', component: FavsComponent},
  { path: 'create', component: CreateComponent},
  { path: 'edit/:name', component: EditComponent},
  { path: 'search/:param', component: SearchComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [CountriesComponent, FavsComponent, CreateComponent]
