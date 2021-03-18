import { Injectable } from '@angular/core';
import {Hero} from './hero';
import {HEROES} from './moch-heroes';
import {Observable, of} from 'rxjs';
import {MessageService} from './message.service';
import {HttpClient} from '@angular/common/http';

@Injectable({  providedIn: 'root'})
export class HeroService {
  private heroesUrl = 'api/heroes';

  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);
    this.messageService.add('HeroService: fetched heroes');
    return heroes;
  }
  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  getHero(id: number): Observable<Hero> {
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(HEROES.find(hero => hero.id === id));
  }
  private log(message: string): void {
    this.messageService.add(`HeroService: ${message}`);
  }
}
