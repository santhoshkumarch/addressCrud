import { Component, OnInit } from '@angular/core';

import { Address } from './../address';
import { HeroService } from '../hero.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  add_ress: Address[];

  constructor(private heroService: HeroService, private router: Router) { }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
    .subscribe(addr => this.add_ress = addr);
  }

  add(firstname: string, lastname: string, address1: string, address2: string, city: string, state: string, pin: string): void {
    this.heroService.addHero({ firstname, lastname, address1, address2, city, state, pin } as Address)
      .subscribe(hero => {
        this.add_ress.push(hero);
        console.log(hero)
        this.router.navigate(['/dashboard'])
      });
  }

  delete(address: Address): void {
    this.add_ress = this.add_ress.filter(h => h !== address);
    this.heroService.deleteHero(address).subscribe();
  }

}
