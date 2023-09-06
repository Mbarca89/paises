import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Country } from '../Models/country.model';
import { FavService } from '../Service/favs.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  constructor(private favService: FavService, private route: ActivatedRoute, private router: Router) { }

  countries: Country[] = this.favService.getFav()
  countryName: string = ''
  index: number = 0


  editForm: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    capital: new FormControl('', Validators.required),
    population: new FormControl('', [Validators.required, Validators.pattern("^[0-9]*$")]),
    currency: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z ]*')]),
    currencyCode: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z ]*'), Validators.maxLength(3)]),
    continent: new FormControl('', Validators.required),
  });

  ngOnInit(): void {

    this.countryName = this.route.snapshot.paramMap.get('name') || ''
    
    this.index = this.countries.findIndex(country => country.name.common === this.countryName)
    
    this.editForm = new FormGroup({
      name: new FormControl(this.countries[this.index].name.common, Validators.required),
      capital: new FormControl(this.countries[this.index].capital, Validators.required),
      population: new FormControl(this.countries[this.index].population, [Validators.required, Validators.pattern("^[0-9]*$")]),
      currency: new FormControl(this.countries[this.index].currencies[Object.keys(this.countries[this.index].currencies)[0]].name || '', [Validators.required, Validators.pattern('[a-zA-Z ]*')]),
      currencyCode: new FormControl(Object.keys(this.countries[this.index].currencies)[0], [Validators.required, Validators.pattern('[a-zA-Z ]*'), Validators.maxLength(3)]),
      continent: new FormControl(this.countries[this.index].region, Validators.required),
    });
  }

  edit() {

    let currencies = {
      [this.editForm.value.currencyCode]:{ name: this.editForm.value.currency, symbol: '' }
    }

    this.countries[this.index].name.common = this.editForm.value.name
    this.countries[this.index].capital = this.editForm.value.capital
    this.countries[this.index].population = this.editForm.value.population
    this.countries[this.index].currencies = currencies
    this.countries[this.index].region = this.editForm.value.continent

    this.router.navigate(['/favs']);
  }
}
