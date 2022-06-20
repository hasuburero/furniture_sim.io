let furniture_class = class{
	constructor(width, height, depth, type){
		this.width = width;
		this.height = height;
		this.depth = depth;
		this.type = type;
	}
	set setwidth(width){
		this.width = width;
	}
	set setheight(height){
		this.height = height;
	}
	set setheight(height){
		this.depth = depth;
	}
	get getwidth(){
		return this.width;
	}
	get getheight(){
		return this.height;
	}
	get getdepth(){
		return this.depth;
	}
	set setx(x){
		this.x = x;
	}
	get getx(){
		return this.x;
	}
	set sety(y){
		this.y = y;
	}
	get gety(){
		return this.y;
	}
	set setz(z){
		this.z = z;
	}
	get getz(){
		return this.z;
	}
	set setType(type){
		this.type = type;
	}
	get getType(){
		return this.type;
	}
}
