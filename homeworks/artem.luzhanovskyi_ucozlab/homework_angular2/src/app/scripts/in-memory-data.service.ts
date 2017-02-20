import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        let heroes = [
            {
                id: 11,
                name: 'Mr. Nice',
                age: 25,
                skill: "Dark Magic",
                image: "./public/hero-images/DestructiveMagic_DemonicFlame.gif",
                addresses: [
                    {street: '123 Main',  city: 'Anywhere', state: 'CA',  zip: '94801'},
                    {street: '456 Maple', city: 'Somewhere', state: 'VA', zip: '23226'},
                ]
            },
            {
                id: 12,
                name: 'Narco',
                age: 28,
                skill: "Destructive Magic",
                image: "./public/hero-images/Offence_Frenzy.gif",
                addresses: [
                    {street: '789 Elm',  city: 'Smallville', state: 'OH',  zip: '04501'},
                ]
            },
            {
                id: 13,
                name: 'Bombasto',
                age: 45,
                skill: "Logistics",
                image: "./public/hero-images/DestructiveMagic_MasterOfLightnings.gif",
                addresses: [ ]
            },
            {
                id: 14,
                name: 'Celeritas',
                age: 125,
                skill: "Enlightenment",
                image: "./public/hero-images/Gating_AbsoluteGating.gif",
                addresses: [
                    {street: '123 Main',  city: 'Anywhere', state: 'CA',  zip: '94801'},
                    {street: '456 Maple', city: 'Somewhere', state: 'VA', zip: '23226'},
                ]
            },
            {
                id: 15,
                name: 'Magneta',
                age: 34,
                skill: "Sorcery",
                image: "./public/hero-images/Learning_DarkRevelation.gif",
                addresses: [
                    {street: '123 Main',  city: 'Anywhere', state: 'CA',  zip: '94801'},
                    {street: '456 Maple', city: 'Somewhere', state: 'VA', zip: '23226'},
                ]
            },
            {
                id: 16,
                name: 'RubberMan',
                age: 17,
                skill: "Summoning Magic",
                image: "./public/hero-images/Learning_EagleEye.gif",
                addresses: [
                    {street: '123 Main',  city: 'Anywhere', state: 'CA',  zip: '94801'},
                    {street: '456 Maple', city: 'Somewhere', state: 'VA', zip: '23226'},
                ]
            },
            {
                id: 17,
                name: 'Dynama',
                age: 325,
                skill: "War Machines",
                image: "./public/hero-images/Learning_Intelligence.gif",
                addresses: [
                    {street: '123 Main',  city: 'Anywhere', state: 'CA',  zip: '94801'},
                    {street: '456 Maple', city: 'Somewhere', state: 'VA', zip: '23226'},
                ]
            },
            {
                id: 18,
                name: 'Dr IQ',
                age: 26,
                skill: "Leadership",
                image: "./public/hero-images/LightMagic_MasterOfAbjuration.gif",
                addresses: [
                    {street: '123 Main',  city: 'Anywhere', state: 'CA',  zip: '94801'},
                    {street: '456 Maple', city: 'Somewhere', state: 'VA', zip: '23226'},
                ]
            },
            {
                id: 19,
                name: 'Magma',
                age: 28,
                skill: "Attack",
                image: "./public/hero-images/Logistics_TeleportAssault.gif",
                addresses: [
                    {street: '123 Main',  city: 'Anywhere', state: 'CA',  zip: '94801'},
                    {street: '456 Maple', city: 'Somewhere', state: 'VA', zip: '23226'},
                ]
            },
            {
                id: 20,
                name: 'Tornado',
                age: 21,
                skill: "Defence",
                image: "./public/hero-images/DestructiveMagic_MasterOfIce.gif",
                addresses: [
                    {street: '123 Main',  city: 'Anywhere', state: 'CA',  zip: '94801'},
                    {street: '456 Maple', city: 'Somewhere', state: 'VA', zip: '23226'},
                ]
            }
        ];
        return {heroes};
    }
}