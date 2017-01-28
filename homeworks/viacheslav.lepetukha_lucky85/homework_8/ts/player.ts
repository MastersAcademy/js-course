class Player {
    name: string;
    symbol: string;
    winner: number;
    active: boolean;
    constructor(name: string){
        this.name = name;
        this.symbol = "X";
        this.winner = 0;
        this.active;
    }
}
export default Player;
