import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Country } from '../Models/country.model';
import { FavService } from '../Service/favs.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent {

  constructor(private favService: FavService, private router: Router) { }

  
  createForm: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    capital: new FormControl('', Validators.required),
    population: new FormControl('', [Validators.required, Validators.pattern("^[0-9]*$")]),
    currency: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z ]*')]),
    currencyCode: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z ]*'),Validators.maxLength(3)]),
    continent: new FormControl('', Validators.required),
  });
  
  newCountry: Country = {
    name: {
      common:''
    },
    translations:{
      spa:{common:''}
    },
    capital:'',
    population:0,
    region:'',
    flags:{png:''},
    maps:{googleMaps:''},
    currencies: {},
    spanish: true,
    custom:true
  }

  create() {
    this.newCountry.name.common = this.createForm.value.name
    this.newCountry.capital = this.createForm.value.capital
    this.newCountry.population = this.createForm.value.population
    this.newCountry.currencies[this.createForm.value.currencyCode] = {name: this.createForm.value.currency, symbol:''}
    this.newCountry.region = this.createForm.value.continent

    this.favService.addFav(this.newCountry);

    this.router.navigate(['/favs']);

  }
}
