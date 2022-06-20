let saveButton = document.getElementById('saveButton');

function makefile(blob){
	let str = String(floor_x) + "," + String(floor_y) + "," + String(floor_z) + "\n";
	for(let i=0; i<furniture.length; ++i){
		str = str + String(furniture[i].width) + ",";
		str = str + String(furniture[i].height) + ",";
		str = str + String(furniture[i].depth) + ",";
		str = str + furniture[i].type + ",";
		str = str + String(furniture[i].x) + ",";
		str = str + String(furniture[i].y) + ",";
		str = str + String(furniture[i].z) + "\n";
	}
	return blob = new Blob([str], {type:"text/plain"});
}
