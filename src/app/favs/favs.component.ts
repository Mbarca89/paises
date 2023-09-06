import { Component } from '@angular/core';
import { FavService } from '../Service/favs.service';
import { Country } from '../Models/country.model';

@Component({
  selector: 'app-favs',
  templateUrl: './favs.component.html',
  styleUrls: ['./favs.component.scss']
})
export class FavsComponent {

  constructor(private favService: FavService) {}

  favoriteCountries: Country[] = this.favService.getFav();

  removeFromFavorites(country: Country) {
    this.favService.removeFav(country);
  }

}
