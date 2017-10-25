class Ball {

	constructor(position, radius){
		this.x = position[0];
		this.y = position[1];
		this.radius = radius;
	}

	render(){
		context.beginPath();
		context.arc(this.x, this.y, this.radius, 0, 2*Math.PI, false);
		context.fillStyle = 'white';
		context.fill();
		context.closePath();
	}

	move(){
		this.x += movement[0];
		this.y += movement[1];
	}

}