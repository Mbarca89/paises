import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../Service/countries.service';
import { FavService } from '../Service/favs.service';
import { Country } from '../Models/country.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  countries: Country[] = [];

  constructor(private countryService: CountriesService, private favService: FavService, private route: ActivatedRoute) { }

  params:string = ''

  getCountryName (country: Country):string {
    if (country.spanish || country.spanish === undefined) return country.translations.spa.common
    else return country.name.common
  }

  translate (country:Country) {
    if(country.spanish === undefined) country.spanish = false
    else country.spanish = !country.spanish
  }

  updateCountryList() {
    this.countryService.fetchCountriesByName(this.params).subscribe(data => {
      this.countries = data;
    });
  }

  addToFavorites(country: Country) {
    this.favService.addFav(country);
  }

  removeFromFavorites(country: Country) {
    this.favService.removeFav(country);
  }

  isCountryInFavorites(country: Country): boolean {
    return this.favService.isInFav(country);
  }

  ngOnInit(): void {

    this.route.paramMap.subscribe(params => {
      this.params = params.get('param') || '';
      this.updateCountryList();
    });

    this.updateCountryList()
  }

}
