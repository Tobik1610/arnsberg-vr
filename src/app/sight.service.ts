import { Injectable } from '@angular/core';
import { Sight } from './sight';
import { SIGHTS } from './mock-sights';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SightService {

  constructor() { }

  getSights(): Observable<Sight[]> {
    return of(SIGHTS);
  }

  getSight(id: number): Observable<Sight>{
    return of(SIGHTS.find(sight => sight.id === id));
  }
}
