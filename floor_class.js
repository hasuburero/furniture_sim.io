let furniture_class = class{
	constructor(x, y, z){
		this.x = x;
		this.y = y;
		this.z = z;
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
