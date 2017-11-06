class Ball {

	constructor(position, radius){
		this.x = position[0];
		this.y = position[1];
		this.radius = radius;
	}

	render(){
		ctx.beginPath();
		ctx.arc(this.x, this.y, this.radius, 0, 2*Math.PI, false);
		ctx.fillStyle = 'white';
		ctx.fill();
		ctx.closePath();
	}

	move(){
		this.x += movement[0];
		this.y += movement[1];
	}

}