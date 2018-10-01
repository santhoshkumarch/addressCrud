import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Address } from './address';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const add_res = [
      { id: 1, firstname: 'Santhosh', lastname: 'Kumar', address1: '1299 Park Avenue', address2: 'Manhattan', city: 'Newyork City', state: "Newyork", pin: '100212' },
     
    ];
    return {add_res};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Address[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}
