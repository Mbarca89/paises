import { Injectable } from "@angular/core"
import { Country } from "../Models/Country.model"

@Injectable({
  providedIn: 'root'
})
export class FavService {
  private favoriteCountries: Country[] = [];

  constructor() {
    const savedFavorites = localStorage.getItem('favoriteCountries');
    if (savedFavorites) this.favoriteCountries = JSON.parse(savedFavorites);
  }

  addFav(country: Country) {
    if (!this.favoriteCountries.some((c) => c.name.common === country.name.common)){
      console.log(this.favoriteCountries,country)
      this.favoriteCountries.push(country)

    }
    this.saveFav()
  }

  removeFav(country: Country) {
    const index = this.favoriteCountries.findIndex((c) => c.name.common === country.name.common)
    if (index !== -1) this.favoriteCountries.splice(index, 1)
    this.saveFav()
  }

  getFav() {
    return this.favoriteCountries
  }

  isInFav(country: Country) {
    return (this.favoriteCountries.some((c) => c.name.common === country.name.common))
   
  }

  private saveFav() {
    localStorage.setItem('favoriteCountries', JSON.stringify(this.favoriteCountries))
  }
}