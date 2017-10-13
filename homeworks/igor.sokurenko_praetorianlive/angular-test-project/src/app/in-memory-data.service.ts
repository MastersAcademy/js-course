import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let heroes = [
        {id: 11, name: 'Mr. Nice', skill: 'Freeze time', avatar: '/src/assets/1.jpg'},
        {id: 12, name: 'Narco', skill: 'Warm', avatar: '/src/assets/2.jpg'},
        {id: 13, name: 'Bombasto', skill: 'Telepathy', avatar: '/src/assets/3.jpg'},
        {id: 14, name: 'Celeritas', skill: 'Telekines', avatar: '/src/assets/4.jpg'},
        {id: 15, name: 'Magneta', skill: 'Empath', avatar: '/src/assets/5.jpg'},
        {id: 16, name: 'RubberMan', skill: 'Flights', avatar: '/src/assets/6.jpg'},
        {id: 17, name: 'Dynama', skill: 'High jump', avatar: '/src/assets/7.jpg'},
        {id: 18, name: 'Dr IQ', skill: 'Laud voice', avatar: '/src/assets/8.jpg'},
        {id: 19, name: 'Magma', skill: 'Fireball', avatar: '/src/assets/9.jpg'},
        {id: 20, name: 'Tornado', skill: 'Teleport', avatar: '/src/assets/10.jpg'},
        {id: 21, name: 'Celeb', skill: 'Cupid power', avatar: '/src/assets/11.jpg'}
    ];
    return {heroes};
  }
}