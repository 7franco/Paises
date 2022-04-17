import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, of } from 'rxjs';
import { Country } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private baseUrl: string = 'https://restcountries.com/v2';

  constructor(private http: HttpClient) { }

  buscarPais(termino: string): Observable<Country[]> {
    const url = `${this.baseUrl}/name/${termino}`;
    /* return this.http.get(url).pipe(catchError(err => of([]))); */
    return this.http.get<Country[]>(url);
  }

  buscarCapital(termino: string): Observable<Country[]> {
    const url = `${this.baseUrl}/capital/${termino}`;
    /* return this.http.get(url).pipe(catchError(err => of([]))); */
    return this.http.get<Country[]>(url);
  }

  verPaisbyAlpha(id: string): Observable<Country> {
    const url = `${this.baseUrl}/alpha/${id}`;
    /* return this.http.get(url).pipe(catchError(err => of([]))); */
    return this.http.get<Country>(url);
  }

  buscarPaisesPorRegion(termino: string): Observable<Country[]> {
    const url = `${this.baseUrl}/regionalbloc/${termino}`;
    /* return this.http.get(url).pipe(catchError(err => of([]))); */
    return this.http.get<Country[]>(url);
  }

}
