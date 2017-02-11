import { Hero } from './hero';
    
const PATH_TO_IMAGES = 'src/images/';
export const ANTIHEROES: string[]  = ["Spawn", "Deadpool", "Wolverine", "Punisher", "Ghost Rider", "Rorschach", "Blade", "Venom", "Deathstroke", "John Constantine"  ]; 
export const HEROES: Hero[] = [
    { id: 11, name: 'Mr. Nice', photo: PATH_TO_IMAGES  + "Nice.jpg", antihero: ANTIHEROES[0] },
    { id: 12, name: 'Narco', photo: PATH_TO_IMAGES  + "Narco.jpg", antihero: ANTIHEROES[1] },
    { id: 13, name: 'Bombasto', photo: PATH_TO_IMAGES  + "Bombasto.jpg", antihero: ANTIHEROES[2] },
    { id: 14, name: 'Celeritas', photo: PATH_TO_IMAGES + "Celeritas.jpg", antihero: ANTIHEROES[3] },
    { id: 15, name: 'Magneta', photo: PATH_TO_IMAGES  + "Magneta.jpg", antihero: ANTIHEROES[4] },
    { id: 16, name: 'RubberMan', photo: PATH_TO_IMAGES + "RubberMan.jpg", antihero: ANTIHEROES[5] },
    { id: 17, name: 'Dynama', photo: PATH_TO_IMAGES + "Dynama.jpg", antihero: ANTIHEROES[6] },
    { id: 18, name: 'Dr IQ', photo: PATH_TO_IMAGES + "DrIQ.jpg", antihero: ANTIHEROES[7] },
    { id: 19, name: 'Magma', photo: PATH_TO_IMAGES + "Magma.jpg", antihero: ANTIHEROES[8] },
    { id: 20, name: 'Tornado', photo: PATH_TO_IMAGES + "Tornado.jpg", antihero: ANTIHEROES[9] }
];