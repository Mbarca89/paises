import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../Service/countries.service';
import { FavService } from '../Service/favs.service';
import { Country } from '../Models/Country.model';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.scss']
})
export class CountriesComponent implements OnInit {

  countries: Country[] = [];

  constructor(private countryService: CountriesService, private favService: FavService) { }

  addToFavorites(country: Country) {
    this.favService.addFav(country);
  }

  removeFromFavorites(country: Country) {
    this.favService.removeFav(country);
  }

  isCountryInFavorites(country: Country): boolean {
    return this.favService.isInFav(country);
  }

  getCountryName (country: Country):string {
    if (country.spanish || country.spanish === undefined) return country.translations.spa.common
    else return country.name.common
  }

  translate (country:Country) {
    if(country.spanish === undefined) country.spanish = false
    else country.spanish = !country.spanish
  }

  ngOnInit(): void {
    this.countryService.fetchCountries().subscribe((data) => {
      this.countries = data;
    })
  }

}
