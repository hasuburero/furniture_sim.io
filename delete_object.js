function delete_object(){
	for(let i=0; i<furniture3d.length; ++i){
		scene.remove(furniture3d[i]);
		//furniture3d[i].material.dispose();
		//furniture3d[i].geometry.dispose();
	}
}

