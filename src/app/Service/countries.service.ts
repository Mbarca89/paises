import { HttpClient } from '@angular/common/http'
import { Injectable } from "@angular/core"
import { Observable } from "rxjs"
import { Country } from '../Models/Country.model';

@Injectable({ providedIn: "root" })

export class CountriesService {

    constructor(private http: HttpClient) {
    }

    private apiUrl = 'https://restcountries.com/v3.1/all';

    fetchCountries(): Observable<Country[]> {
        return this.http.get<any[]>(this.apiUrl);
    }
}