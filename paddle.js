class Paddle{

	constructor(positionX, positionY, width, height) { 
		this.x = positionX;
		this.y = positionY;
		this.width = width;
		this.height = height;
}

 	render() {
		ctx.fillStyle = 'white';
		ctx.fillRect(this.x, this.y, this.width, this.height);
}

    moveUp() {
    	this.y -= 10;
    	
		
	}

    moveDown() {
    	this.y += 10;

} 
	collision() {
		this.y += 0;
	}

}