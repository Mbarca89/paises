import { HttpClient } from '@angular/common/http'
import { Injectable } from "@angular/core"
import { Observable, throwError  } from "rxjs"
import { Country } from '../Models/country.model';
import { catchError } from 'rxjs/operators';

@Injectable({ providedIn: "root" })

export class CountriesService {

    constructor(private http: HttpClient) {
    }

    private apiUrl = 'https://restcountries.com/v3.1';

    fetchCountries(): Observable<Country[]> {
        return this.http.get<any[]>(`${this.apiUrl}/all`);
    }

    fetchCountriesByName(param:string): Observable<Country[]> {
        return this.http.get<any[]>(`${this.apiUrl}/name/${param}`).pipe(
            catchError((error) => {
              if (error.status === 404) {
                return [];
              } else {
                return throwError(error);
              }
            })
          );
    }
}