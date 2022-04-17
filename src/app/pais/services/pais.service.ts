import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { catchError, Observable, of, tap } from 'rxjs';
import { Country } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private baseUrl: string = 'https://restcountries.com/v2';
  
  get httpParams(){
    return new HttpParams().set('fields', 'name,capital,alpha2Code,flag,population');
  }

  constructor(private http: HttpClient) { }

  buscarPais(termino: string): Observable<Country[]> {
    const url = `${this.baseUrl}/name/${termino}`;
    /* return this.http.get(url).pipe(catchError(err => of([]))); */
    return this.http.get<Country[]>(url, {params:this.httpParams});
  }

  buscarCapital(termino: string): Observable<Country[]> {
    const url = `${this.baseUrl}/capital/${termino}`;
    /* return this.http.get(url).pipe(catchError(err => of([]))); */
    return this.http.get<Country[]>(url, {params:this.httpParams});
  }

  verPaisbyAlpha(id: string): Observable<Country> {
    const url = `${this.baseUrl}/alpha/${id}`;
    /* return this.http.get(url).pipe(catchError(err => of([]))); */
    return this.http.get<Country>(url);
  }

  buscarPaisesPorRegion(termino: string): Observable<Country[]> {
    const url = `${this.baseUrl}/regionalbloc/${termino}?`;
    /* return this.http.get(url).pipe(catchError(err => of([]))); */
    return this.http.get<Country[]>(url, {params:this.httpParams}).pipe(tap(console.log));
  }

}
