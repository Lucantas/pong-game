
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext('2d');
let movement = [3, 3];

window.onload = function() {
	const game = new Game(canvas);
	game.resetCanvas();
	game.play();
}



class Game {

	constructor(){

		this.bgImage = document.getElementById('bg-image');

		this.canvas = canvas;
		this.ball = new Ball([15, 15], 5);
		this.ball.render(this.ctx);

		const height = 90;
		let positionY = (this.canvas.clientHeight / 2) - height / 2;

		this.paddle1 = new Paddle(0, positionY, 10, height);
		this.paddle1.render(this.ctx);
		this.paddle2 = new Paddle(this.canvas.clientWidth-10, positionY, 10, height);
		this.paddle2.render(this.ctx);
		
		document.addEventListener('keydown', function(event) {
			
				switch(event.keyCode) {
					case 87:
						this.paddle1.moveUp();
						break;
					case 83:
						this.paddle1.moveDown();
						break;
					case 38:
						this.paddle2.moveUp();
						break;
					case 40:
						this.paddle2.moveDown();
						break;
					
				}		
			}.bind(this));
}

	resetCanvas() {
		ctx.fillStyle = "#000000";
		ctx.drawImage(this.bgImage,0,0,canvas.clientWidth,canvas.clientHeight);
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
			this.ball.render(this.ctx);
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
			this.ball.render(this.ctx);
			this.paddle1.render(this.ctx);
			this.paddle2.render(this.ctx);
			this.collisions(movement);
		}.bind(this), 17);
	};

}




