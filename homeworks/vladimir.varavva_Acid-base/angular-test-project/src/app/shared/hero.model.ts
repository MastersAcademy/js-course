export interface Hero {
    id: number;
    name: string;
    img?: string;
    skills: string[];
}
export class Hero implements Hero {
    id: number;
    name = '';
    img? = '';
    skills: string[];
}
