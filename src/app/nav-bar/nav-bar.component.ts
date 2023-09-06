import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {

  constructor (private router: Router) {}

  searchForm: FormGroup = new FormGroup({
    param: new FormControl('', Validators.required),
  });

  search(){
    this.router.navigate([`/search/${this.searchForm.value.param}`])
  }

}
