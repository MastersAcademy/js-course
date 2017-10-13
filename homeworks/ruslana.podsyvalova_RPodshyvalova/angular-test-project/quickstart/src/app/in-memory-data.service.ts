import { InMemoryDbService } from 'angular-in-memory-web-api';
const PATH_TO_IMAGES = 'src/images/';

export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        let heroes = [
            { id: 11, name: 'Mr. Nice', photo: PATH_TO_IMAGES  + "Nice.jpg", antihero: "Spawn" },
            { id: 12, name: 'Narco', photo: PATH_TO_IMAGES  + "Narco.jpg", antihero: "Deadpool" },
            { id: 13, name: 'Bombasto', photo: PATH_TO_IMAGES  + "Bombasto.jpg", antihero: "Wolverine" },
            { id: 14, name: 'Celeritas', photo: PATH_TO_IMAGES + "Celeritas.jpg", antihero: "Punisher" },
            { id: 15, name: 'Magneta', photo: PATH_TO_IMAGES  + "Magneta.jpg", antihero: "Ghost Rider" },
            { id: 16, name: 'RubberMan', photo: PATH_TO_IMAGES + "RubberMan.jpg", antihero: "Rorschach" },
            { id: 17, name: 'Dynama', photo: PATH_TO_IMAGES + "Dynama.jpg", antihero: "Blade" },
            { id: 18, name: 'Dr IQ', photo: PATH_TO_IMAGES + "DrIQ.jpg", antihero: "Venom" },
            { id: 19, name: 'Magma', photo: PATH_TO_IMAGES + "Magma.jpg", antihero: "Deathstroke" },
            { id: 20, name: 'Tornado', photo: PATH_TO_IMAGES + "Tornado.jpg", antihero: "John Constantine" }
        ];
        return {heroes};
    }
}
