'use strict';

import Player from "./player";

let player1 = new Player('Player 1');
let player2 = new Player('Player 2');

class CrissCross {
    winComb: any;
    scoreboard1: any;
    scoreboard2: any;
    game: any;
    el: any;
    gameNam: number = 1;
    activeCell: number = 4;
    private x: boolean;
    constructor() {
        this.winComb = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8],
            [0, 3, 6], [1, 4, 7], [2, 5, 8],
            [0, 4, 8], [2, 4, 6]
        ];
        this.scoreboard1 = document.getElementById("player1");
        this.scoreboard2 = document.getElementById("player2");
        this.game = document.getElementById("game");
        this.el = document.getElementsByTagName("td");
        document.addEventListener("keyup", this.move.bind(this));
        this.getPlayers();
    }

    static getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    getPlayers() {
        if (CrissCross.getRandomInt(0, 1) == 0) {
            player1.symbol = "X";
            player1.active = true;
            player2.symbol = "O";
            player2.active = false;
        } else {
            player1.symbol = "O";
            player1.active = false;
            player2.symbol = "X";
            player2.active = true;
        }

        this.scoreboard1.innerHTML = "player 1 <br>" + player1.symbol + "<br> win " + player1.winner;
        this.scoreboard2.innerHTML = "player 2 <br>" + player2.symbol + "<br> win " + player2.winner;
        this.game.innerHTML = "Game " + this.gameNam;
        this.gameNam++;
    }

    move(e) {
        if (player2.active) {
            if (e.keyCode == 37 && this.activeCell > 0 && this.activeCell <= 8) {
                this.el[this.activeCell].removeAttribute('id');
                this.el[this.activeCell - 1].setAttribute('id', 'active');
                this.activeCell--;
            } else if (e.keyCode == 39 && this.activeCell >= 0 && this.activeCell < 8) {
                this.el[this.activeCell].removeAttribute('id');
                this.el[this.activeCell + 1].setAttribute('id', 'active');
                this.activeCell++;
            } else if (e.keyCode == 38 && this.activeCell > 2 && this.activeCell <= 8) {
                this.el[this.activeCell].removeAttribute('id');
                this.el[this.activeCell - 3].setAttribute('id', 'active');
                this.activeCell = this.activeCell - 3;
            } else if (e.keyCode == 40 && this.activeCell >= 0 && this.activeCell < 6) {
                this.el[this.activeCell].removeAttribute('id');
                this.el[this.activeCell + 3].setAttribute('id', 'active');
                this.activeCell = this.activeCell + 3;
            } else if (e.keyCode == 57 && this.el[this.activeCell].innerHTML != "O" && this.el[this.activeCell].innerHTML != "X") {
                this.el[this.activeCell].innerHTML = player2.symbol;
                this.checkWin(player2.symbol);
            } else;
        } else if (player1.active) {
            if (e.keyCode == 65 && this.activeCell > 0 && this.activeCell <= 8) {
                this.el[this.activeCell].removeAttribute('id');
                this.el[this.activeCell - 1].setAttribute('id', 'active');
                this.activeCell--;
            } else if (e.keyCode == 68 && this.activeCell >= 0 && this.activeCell < 8) {
                this.el[this.activeCell].removeAttribute('id');
                this.el[this.activeCell + 1].setAttribute('id', 'active');
                this.activeCell++;
            } else if (e.keyCode == 87 && this.activeCell > 2 && this.activeCell <= 8) {
                this.el[this.activeCell].removeAttribute('id');
                this.el[this.activeCell - 3].setAttribute('id', 'active');
                this.activeCell = this.activeCell - 3;
            } else if (e.keyCode == 83 && this.activeCell >= 0 && this.activeCell < 6) {
                this.el[this.activeCell].removeAttribute('id');
                this.el[this.activeCell + 3].setAttribute('id', 'active');
                this.activeCell = this.activeCell + 3;
            } else if (e.keyCode == 90 && this.el[this.activeCell].innerHTML != "O" && this.el[this.activeCell].innerHTML != "X") {
                this.el[this.activeCell].innerHTML = player1.symbol;
                this.checkWin(player1.symbol);
            } else;
        } else;
    }

    clear(){
        for (let j = 0; j < this.el.length; j++) {
            this.el[j].innerHTML = '';
            this.el[j].style.color = "black";
        }
        this.el[this.activeCell].removeAttribute('id');
        this.el[4].setAttribute('id', 'active');
        this.activeCell = 4;
        if (player1.active)
            player1.winner++;
        else
            player2.winner++;
        this.getPlayers();
    }

    checkWin(simbol) {
        for (let i = 0; i < this.winComb.length; i++) {
            if (this.el[this.winComb[i][0]].innerHTML == simbol && this.el[this.winComb[i][1]].innerHTML == simbol && this.el[this.winComb[i][2]].innerHTML == simbol) {
                this.el[this.winComb[i][0]].style.color = "red";
                this.el[this.winComb[i][1]].style.color = "red";
                this.el[this.winComb[i][2]].style.color = "red";
                setTimeout(this.clear.bind(this), 1000);
                return;
            }
        }

        if (player1.active) {
            player1.active = false;
            player2.active = true;
        }else {
            player1.active = true;
            player2.active = false;
        }
    }
}
export default CrissCross;