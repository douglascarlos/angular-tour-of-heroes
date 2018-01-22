import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
        new Hero(101, 'Goku'),
        new Hero(102, 'Vegeta'),
        new Hero(103, 'Naruto'),
        new Hero(104, 'Superman'),
        new Hero(105, 'Batman'),
        new Hero(106, 'Green Arrow'),
        new Hero(107, 'Iron Man'),
        new Hero(108, 'Hulk'),
        new Hero(109, 'Wolverine'),
        new Hero(110, 'Thor'),
    ];
    return {heroes};
  }
}