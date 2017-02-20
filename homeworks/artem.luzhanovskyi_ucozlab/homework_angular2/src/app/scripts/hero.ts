export class Hero {
    id: number;
    name: string;
    image: string;
    age: number;
    skill: string;
    addresses: Address[];
}

export class Address {
    street = '';
    city   = '';
    state  = '';
    zip    = '';
}

export const states = ['CA', 'MD', 'OH', 'VA'];