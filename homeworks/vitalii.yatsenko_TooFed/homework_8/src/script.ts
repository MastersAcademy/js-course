interface Player {
	name: string;
	mark: string;
	wins: number;
	move: boolean;
	symb: string;
}

class Player implements Player {
	wins: number = 0;
	symb: string;
	constructor(name: string) {
		this.name = name;
		this.wins = 0;
	}
}

let players = [];
players.push(new Player('Player 1'));
players.push(new Player('Player 2'));

class Game {
	players: Player[];
	names = [];
	table;
	wins;
	gamefield;
	//first = this.firstStep();
	//chosenCell;
	//nextCell;

	constructor() {
		this.names.push(document.querySelector('[data-player-one]'));
		this.names.push(document.querySelector('[data-player-two]'));
		this.players = players;
		this.table = document.querySelector('.table');
		this.gamefield = document.querySelector('.gamefield');
		this.wins = document.querySelectorAll('[data-wins]');
		this.setName();
		this.step(this.firstStep());
	}

	setName() {
		for (let i = 0; i < this.names.length; i++) {
			this.names[i].innerHTML = this.players[i].name;
			this.wins[i].innerHTML = this.players[i].wins;
			console.log(this.players[i].wins);
		}
	}

	firstStep() {
		let playerId = Math.floor(Math.random() * (1 + 1));
		let currentSymb = document.querySelectorAll('[data-move]');
		//console.log(playerId);
		if (playerId == 1) {
			this.players[playerId].symb = 'X';
			this.players[0].symb = 'O';
			currentSymb[0].innerHTML = 'O';
			currentSymb[1].innerHTML = 'X';
			//console.log();
		}
		else {
			this.players[playerId].symb = 'X';
			this.players[1].symb = 'O';
			currentSymb[0].innerHTML = 'X';
			currentSymb[1].innerHTML = 'O';
		}
		return playerId;
	}

	mark(symb: string) {
		let chosenCell = this.table.querySelector('.chosen');
		if (chosenCell.innerHTML == '') {
			chosenCell.innerHTML = symb;
			return true;
		}
		else return false;
	}

	checkWin() {
		//let chosenCell = this.table.querySelector('.chosen');
		for(let i=0; i<=this.players.length-1; i++){
			if(this.lookWinRow(this.players[i].symb)===true || this.lookWinLine(this.players[i].symb)===true || this.lookWinMainDiag(this.players[i].symb)===true || this.lookWinAntiDiag(this.players[i].symb)===true){
				this.players[i].wins++;
				console.log(this.players[i].name + '=' + this.players[i].wins);
			}
		}

	}

	lookWinMainDiag(winSymb: string){
		let count: number = 0;
		for (let i=0; i<=this.table.rows.length-1; i++){
			this.table.rows[i].cells[i];			
			if (this.table.rows[i].cells[i].innerHTML == winSymb) {
				count++;
				if (count === this.table.rows.length) {
					alert('win-'+ winSymb);
					this.reload();
					return true;
					//break;
				}
			}
		}
	}

	lookWinAntiDiag(winSymb: string){
		let count: number = 0;
		let lastIndex=this.table.rows.length-1;
		for (let i=0; i<=this.table.rows.length-1; i++){
			if (this.table.rows[i].cells[lastIndex-i].innerHTML == winSymb) {
					count++;
					if (count === this.table.rows.length) {
						alert('anti-win-' + winSymb);
						this.reload();
						return true;//break;
					}
				}
		}
	}
	lookWinLine(winSymb: string) {
		let count: number;
		let limit = this.table.rows.length-1;
		for(let row=0; row<=limit; row++){
			count=0;
			for(let cell=0; cell<=limit; cell++){
				if (this.table.rows[row].cells[cell].innerHTML === winSymb){
					count++;
					console.log('im here');
					if(count==limit+1){
						alert('WinLine');
						this.reload();
						return true;//break;
					}
				}
				else break;
			}
		}
	}
	
	lookWinRow(winSymb: string) {
		let count: number;
		let limit = this.table.rows.length-1;
		for(let cell=0; cell<=limit; cell++){
			count=0;
			for(let row=0; row<=limit; row++){
				if (this.table.rows[row].cells[cell].innerHTML === winSymb){
					count++;
					//console.log('im here');
						console.log(count);
					if(count==limit+1){
						alert('WinRows');
						this.reload();
						return true;//break;
					}
				}
				else break;
			}
		}
	}

	reload(){
		for(let i=0; i<=this.table.rows.length-1; i++){
			for (let j=0; j<=this.table.rows.length-1; j++){
				this.table.rows[i].cells[j].innerHTML = '';
			}
		}
		this.wins[0].innerHTML = this.players[0].wins;
		this.wins[1].innerHTML = this.players[1].wins;
		//this.setName();
		this.firstStep();
	}


	step(activePlayer: number) {
		document.addEventListener('keydown', event => {
			if (this.players[0] === this.players[activePlayer]) {
				if (event.keyCode === 68) {
					this.goRight();
				}
				if (event.keyCode === 65) {
					this.goLeft();
				}
				if (event.keyCode === 87) {
					this.goUp();
				}
				if (event.keyCode === 83) {
					this.goDown();
				}
				if (event.keyCode === 88) {
					if (this.mark(this.players[activePlayer].symb)) {
						activePlayer = 1;
						this.checkWin();
					}
				}
			}
			else {
				if (event.keyCode === 39) {
					this.goRight();
				}
				if (event.keyCode === 37) {
					this.goLeft();
				}
				if (event.keyCode === 38) {
					this.goUp();
				}
				if (event.keyCode === 40) {
					this.goDown();
				}
				if (event.keyCode === 57) {
					if (this.mark(this.players[activePlayer].symb)) {
						activePlayer = 0;
						this.checkWin();
					}
				}
			}


		});
	}

	goUp() {
		//if (event.keyCode === key) {
		let chosenCell = this.table.querySelector('.chosen');
		let nextCell;
		if ((chosenCell.parentNode.rowIndex - 1) < 0) {

			nextCell = this.table.rows[2].cells[chosenCell.cellIndex];
			nextCell.classList.add('chosen');
			chosenCell.classList.remove('chosen');

		}
		else {
			nextCell = this.table.rows[chosenCell.parentNode.rowIndex - 1].cells[chosenCell.cellIndex];
			nextCell.classList.add('chosen');
			chosenCell.classList.remove('chosen');
		}
		//}
	}

	goDown() {
		let chosenCell = this.table.querySelector('.chosen');
		let nextCell;
		if (this.table.rows.length <= (chosenCell.parentNode.rowIndex + 1)) {
			nextCell = this.table.rows[0].cells[chosenCell.cellIndex];
			nextCell.classList.add('chosen');
			chosenCell.classList.remove('chosen');
		}
		else {
			nextCell = this.table.rows[chosenCell.parentNode.rowIndex + 1].cells[chosenCell.cellIndex];
			nextCell.classList.add('chosen');
			chosenCell.classList.remove('chosen');
		}
	}

	goLeft() {
		let chosenCell = this.table.querySelector('.chosen');
		let nextCell;
		if ((chosenCell.cellIndex - 1) < 0) {
			if ((chosenCell.parentNode.rowIndex - 1) < 0) {
				nextCell = this.table.rows[2].cells[2];
				nextCell.classList.add('chosen');
				chosenCell.classList.remove('chosen');
			}
			else {
				nextCell = this.table.rows[chosenCell.parentNode.rowIndex - 1].cells[2];
				nextCell.classList.add('chosen');
				chosenCell.classList.remove('chosen');
			}
		}
		else {
			nextCell = chosenCell.parentNode.cells[chosenCell.cellIndex - 1];
			nextCell.classList.add('chosen');
			chosenCell.classList.remove('chosen');
		}
	}

	goRight() {
		let chosenCell = this.table.querySelector('.chosen');
		let nextCell;
		if (chosenCell.parentNode.cells.length <= (chosenCell.cellIndex + 1)) {
			if (this.table.rows.length <= (chosenCell.parentNode.rowIndex + 1)) {
				nextCell = this.table.rows[0].cells[0];
				nextCell.classList.add('chosen');
				chosenCell.classList.remove('chosen');
			}
			else {
				nextCell = this.table.rows[chosenCell.parentNode.rowIndex + 1].cells[0]
				nextCell.classList.add('chosen');
				chosenCell.classList.remove('chosen');
			}
		}
		else {
			nextCell = chosenCell.parentNode.cells[chosenCell.cellIndex + 1];
			nextCell.classList.add('chosen');
			chosenCell.classList.remove('chosen');
		}
	}
}

export = Game;
