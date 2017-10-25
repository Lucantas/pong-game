const canvas = document.getElementById("canvas");
const context = canvas.getContext('2d');
let movement = [3, 3];

class Game {

	constructor(){
		this.canvas = canvas;
		this.ball = new Ball([15, 15], 5);
		this.ball.render(this.context);

		const height = 90;
		let positionY = (this.canvas.clientHeight / 2) - height / 2;

		this.paddle1 = new Paddle(0, positionY, 10, height);
		this.paddle1.render(this.context);
		this.paddle2 = new Paddle(this.canvas.clientWidth-10, positionY, 10, height);
		this.paddle2.render(this.context);
		
		document.addEventListener('keydown', function(event) {
			
				switch(event.keyCode) {
					case 38:
						this.paddle2.moveUp();
						break;
					case 40:
						this.paddle2.moveDown();
						break;
					case 81:
						this.paddle1.moveUp();
						break;
					case 65:
						this.paddle1.moveDown();
						break;
				}		
			}.bind(this));
}

	resetCanvas() {
		context.fillStyle = "#000000";
		context.fillRect(0, 0, this.canvas.clientWidth, this.canvas.clientHeight);
}

    collisions(movement) {
    	
    	if(this.ball.x < this.ball.radius || this.ball.x > this.canvas.clientWidth-this.ball.radius) {
    		if(this.ball.y > this.paddle2.y && this.ball.y < this.paddle2.y + this.paddle2.height){
    			movement[0] = -movement[0];
    			this.ball.move(movement);
    		}
    		else if(this.ball.y > this.paddle1.y && this.ball.y < this.paddle1.y + this.paddle1.height){
    			movement[0] = -movement[0];
    			this.ball.move(movement);
    	}else{
    		this.ball = new Ball([300, 200], 5);
			this.ball.render(this.context);
    		movement[0] = -movement[0];
		}
		}else if(this.ball.y < this.ball.radius || this.ball.y > this.canvas.clientHeight-this.ball.radius) {
			movement[1] = -movement[1];
			this.ball.move(movement);
		}else {
			this.ball.move(movement);
		}	
	}




	play() {
		setInterval(function() {
			this.resetCanvas();
			this.ball.render(this.context);
			this.paddle1.render(this.context);
			this.paddle2.render(this.context);
			this.collisions(movement);
		}.bind(this), 17);
	};

}

const game = new Game(canvas);

game.resetCanvas();

game.play();


