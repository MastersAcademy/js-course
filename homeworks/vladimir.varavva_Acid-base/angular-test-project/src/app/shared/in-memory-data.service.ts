import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        let heroes = [
            {
                id: 1,
                name: 'Deadpool',
                img: 'http://i.imgur.com/R076K0l.jpg',
                skills: [
                    'Regenerative healing factor',
                    'Master martial artist, swordsman, and marksman',
                    'Extended longevity'
                ]
            },
            {
                id: 2,
                name: 'Daredevil',
                img: 'https://i.annihil.us/u/prod/marvel/i/mg/3/00/55084b4f107e0/landscape_xlarge.jpg',
                skills: [
                    'Superhuman senses',
                    'Peak human physical and mental condition',
                    'Radar sense'
                ]
            },
            {
                id: 3,
                name: 'Doctor Strange',
                img: 'https://i.annihil.us/u/prod/marvel/i/mg/f/d0/568acf89abd5b.jpg',
                skills: [
                    'Mastery of magic',
                    'Trained physician'
                ]
            },
            {
                id: 4,
                name: 'Ghost Rider',
                img: 'http://www.loseternautas.com/wp-content/uploads/2011/07/ghostriderr.jpg',
                skills: [
                    'Immense superhuman strength',
                    'Invulnerability to fire, heat, lava and flames'
                ]
            },
            { id: 5, name: 'Mr. Nice', skills: [] },
            { id: 6, name: 'Narco', skills: [] },
            { id: 7, name: 'Bombasto', skills: [] },
            { id: 8, name: 'Celeritas', skills: [] },
            { id: 9, name: 'Magneta', skills: [] }
        ];
        return { heroes };
    }
}
