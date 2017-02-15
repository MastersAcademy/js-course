import {InMemoryDbService} from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        let heroes = [
            {
                "id": 1,
                "name": "Beast",
                "image": "https://marvelheroes.com/sites/default/files/styles/character_profile_266x405/public/character/image/Store_Beast_Uncanny.png?itok=4tPURTc7",
                "address": {
                    "street": "1",
                    "city": "2",
                    "state": "CA",
                    "zip": "4"
                }
            },
            {
                "id": 2,
                "name": "Black Widow",
                "image": "https://marvelheroes.com/sites/default/files/styles/character_profile_266x405/public/character/image/Store_BlackWidow_Avengers.png?itok=U2_QkHJ7",
                "address": {
                    "street": "5",
                    "city": "6",
                    "state": "VA",
                    "zip": "8"
                }
            },
            {
                "id": 3,
                "name": "Cable",
                "image": "https://marvelheroes.com/sites/default/files/styles/character_profile_266x405/public/character/image/Store_Cable_Modern.png?itok=Lub3012a",
                "address": {
                    "street": "",
                    "city": "",
                    "state": "",
                    "zip": ""
                }
            },
            {
                "id": 4,
                "name": "Blade",
                "image": "https://marvelheroes.com/sites/default/files/styles/character_profile_266x405/public/character/image/Store_Blade_UndeadAgain.png?itok=tz3n9ZRU",
                "address": {
                    "street": "",
                    "city": "",
                    "state": "",
                    "zip": ""
                }
            },
            {
                "id": 5,
                "name": "Elektra",
                "image": "https://marvelheroes.com/sites/default/files/styles/character_profile_266x405/public/character/image/Elektra_Classic3%20-%20Copy.png?itok=ctRmTzif",
                "address": {
                    "street": "",
                    "city": "",
                    "state": "",
                    "zip": ""
                }
            },
            {
                "id": 6,
                "name": "Ghost Rider",
                "image": "https://marvelheroes.com/sites/default/files/styles/character_profile_266x405/public/character/image/GhostRiderModern.png?itok=ZGQSzpr1",
                "address": {
                    "street": "",
                    "city": "",
                    "state": "",
                    "zip": ""
                }
            },
            {
                "id": 7,
                "name": "Hulk",
                "image": "https://marvelheroes.com/sites/default/files/styles/character_profile_266x405/public/character/image/Store_Hulk_Classic.png?itok=UpoIiaIR",
                "address": {
                    "street": "",
                    "city": "",
                    "state": "",
                    "zip": ""
                }
            },
            {
                "id": 8,
                "name": "Iron Man",
                "image": "https://marvelheroes.com/sites/default/files/styles/character_profile_266x405/public/character/image/Store_IronMan_Extremis.png?itok=bupMBSfF",
                "address": {
                    "street": "",
                    "city": "",
                    "state": "",
                    "zip": ""
                }
            },
            {
                "id": 9,
                "name": "Jean Grey",
                "image": "https://marvelheroes.com/sites/default/files/styles/character_profile_266x405/public/character/image/Store_JeanGrey_Phoenix_VU.png?itok=3HJK7o0V",
                "address": {
                    "street": "",
                    "city": "",
                    "state": "",
                    "zip": ""
                }
            },
            {
                "id": 10,
                "name": "Loki",
                "image": "https://marvelheroes.com/sites/default/files/styles/character_profile_266x405/public/character/image/Store_Loki_Traveling.png?itok=YP-hV7ms",
                "address": {
                    "street": "",
                    "city": "",
                    "state": "",
                    "zip": ""
                }
            },
            {
                "id": 11,
                "name": "Thor",
                "image": "https://marvelheroes.com/sites/default/files/styles/character_profile_266x405/public/character/image/Store_Thor_Modern.png?itok=ky_Xd0nm",
                "address": {
                    "street": "",
                    "city": "",
                    "state": "",
                    "zip": ""
                }
            }
        ];
        return {heroes};
    }
}