function make_object(scene){
	const width = window.innerWidth;
	const height = window.innerHeight-50;
	
	const geometry = new THREE.BoxGeometry(floor_x, floor_y, floor_z);
	const material = new THREE.MeshStandardMaterial({
		color: 0xf0f000
	});

	let floor = new THREE.Mesh(geometry, material);
	floor.material.opacity = 0.5;
	floor.material.transparent = true;
	floor.material.depthTest = false;
	floor.material.alphaToCoverage = true;

	let startx = -floor_x/2;
	let starty = -floor_y/2;
	let startz = floor_z/2;

	scene.add(floor);
}
