import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        let heroes = [
            { id: 11, name: 'Mr. Nice', img: 'https://upload.wikimedia.org/wikipedia/en/7/79/Mr._Nice.jpg' },
            { id: 12, name: 'Narco', img: 'https://s-media-cache-ak0.pinimg.com/236x/cb/1e/21/cb1e217af38d3c8e6658ff0322fca52b.jpg' },
            { id: 13, name: 'Bombasto', img: 'https://hydra-media.cursecdn.com/solsticearena.gamepedia.com/thumb/2/2e/Portrait_bombast.png/225px-Portrait_bombast.png?version=5684639074fe5ec7f58083d0b9e1e04e'},
            { id: 14, name: 'Celeritas', img: 'http://www.cardiacathletes.com/images/superheroes/superhero-3.png' },
            { id: 15, name: 'Magneta', img: 'http://vignette4.wikia.nocookie.net/marveldatabase/images/f/fd/MC2_Magneta.png/revision/latest?cb=20120409045056' },
            { id: 16, name: 'RubberMan', img: 'http://images.buycostumes.com/mgen/merchandiser/802980.jpg?zm=1600,1600,1,0,0' },
            { id: 17, name: 'Dynama', img: 'http://orig10.deviantart.net/ad33/f/2008/275/7/6/dynamo_via_hero_creator_by_gwhitmore.png' },
            { id: 18, name: 'Dr IQ', img: 'http://dresdencodak.com/images/costume/drstrange' },
            { id: 19, name: 'Magma', img: 'http://1.bp.blogspot.com/-3kcOLFqmjfg/VHavDweTvqI/AAAAAAAABJ0/TWUql7iB-1o/s1600/279.png' },
            { id: 20, name: 'Tornado', img: 'http://i283.photobucket.com/albums/kk286/skarth7/Renders/GreatTornado.png' }
        ];
        return {heroes};
    }
}