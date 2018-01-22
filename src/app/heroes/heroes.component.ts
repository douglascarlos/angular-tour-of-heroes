import { Component, OnInit } from '@angular/core';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  public heroes: Hero[];

  constructor(
    private heroService: HeroService
  ) { }

  ngOnInit() {
    this.getHeroes();
  }

  public getHeroes(): void {
    this.heroService.getHeroes().
      subscribe(heroes => this.heroes = heroes);
  }

  public add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    let newHero = new Hero(null, name);
    this.heroService.addHero(newHero)
      .subscribe(hero => {
        this.heroes.push(hero);
      });
  }

}
