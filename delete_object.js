function delete_object(){
	for(let i=0; i<furniture3d.length; ++i){
		scene.remove(furniture3d[i]);
		//furniture3d[i].material.dispose();
		//furniture3d[i].geometry.dispose();
	}
	let length = furniture3d.length;
	for(let i=0; i<length; ++i){
		furniture3d.pop(0);
	}
}

function delete_furniture(){
	for(let i=0; i<furniture.legth; ++i){
		furniture.pop(0);
		console.log("pop");
	}
}

