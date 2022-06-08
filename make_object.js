let startx = -floor_x/2;
let starty = -floor_y/2;
let startz = -floor_z/2;

function make_object(scene){
	const width = window.innerWidth;
	const height = window.innerHeight-50;

	const opacity = 0.7;
	const transparent = true;
	const depth_test = false;
	const alphaToCoverage = true;
	
	const geometry = new THREE.BoxGeometry(floor_x, floor_y, floor_z);
	const material = new THREE.MeshStandardMaterial({
		color: 0xf0f000
	});

	let floor = new THREE.Mesh(geometry, material);
	floor.material.opacity = 0.5;
	floor.material.transparent = true;
	floor.material.depthTest = false;
	floor.material.alphaToCoverage = true;


	scene.add(floor);

	for(let i=0; i<furniture.length; ++i){
		if(furniture[i].type === "desk"){
			make_desk(scene, i);
		}
	}
}

function make_desk(scene, i){
	let group = new THREE.Group();
	let object;
	let leg_width	= 50;
	let leg_height	= furniture[i].height - 20;
	let leg_depth	= 50;

	let furniture_width = 	furniture[i].width;
	let furniture_depth = 	furniture[i].depth;
	let furniture_height = 	furniture[i].height;
	let furniture_x = furniture[i].x;
	let furniture_y = furniture[i].y;
	let furniture_z = furniture[i].z;

	for(let i=0; i<4; ++i){
		object = new THREE.Mesh(new THREE.BoxGeometry(leg_width, leg_height, leg_depth), new THREE.MeshStandardMaterial({
			color: 7734e30
		}));
		object.material.opacity = 0.7;
		object.material.transparent = true;
		object.material.depthTest = false;
		object.material.alphaToCoverage = true;

		switch(i){
			//左上
			case 0:	object.position.x = startx+(furniture.x)+furniture.width/2+leg_width/2;
					object.position.y = starty+(furniture.y)+furniture.height/2+leg_height/2;
					object.position.z = startz+(furniture.z)+furniture.depth/2+leg_depth/2;
					break;
			//左下
			case 1:	object.position.x = startx+(furniture.x)+furniture.width/2+leg_width/2;
					object.position.y = starty+(furniture.y)+furniture.height/2+leg_height/2;
					object.position.z = startz+(furniture.z+furniture.depth)-furniture.depth/2;
					break;
			//右上
			case 2:	object.position.x = startx+(furniture.x+furniture.width)+furniture.width/2-leg_width/2;	
					object.position.y = starty+(furniture.y)+furniture.height/2+leg_height/2;
					object.position.z = startz+(furniture.z)+furniture.depth/2+leg_height/2;
					break;
			case 3:	object.position.x = startx+(furniture.x+furniture.width)+furniture.width/2-leg_width/2;
					object.position.y = starty+(furniture.y)+furniture.height/2+leg_height/2;
					object.position.z = startz+(furniture.z+furniture.depth)+furniture.depth/2-leg_width;
					break;
		}
		scene.add(object);
		group.add(object);
	}

	object = new THREE.Mesh(new THREE.BoxGeometry(furniture_width, 30, furniture_depth), new THREE.MeshStandardMaterial({
		color: 7734e30
	}));
	object.material.opacity = 0.7;
	object.material.transparent = true;
	object.material.depthTest = false;
	object.material.alphaToCoverage = true;

	scene.add(object);
	furniture3d.push(group);
}
