import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import {Observable, of} from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private msgService:MessageService) { }

  getHeroes(): Observable<Hero[]>{
    this.msgService.add('Hero service: fetched heroes');
    return of(HEROES);
  }

  getHeroe(id: number): Observable<Hero>{
    this.msgService.add(`HeroService: fetched hero id=${id}`);
    return of(HEROES.find(hero => hero.id === id));
  }
}
