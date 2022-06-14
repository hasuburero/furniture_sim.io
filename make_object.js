function make_object(){
	console.log("furniture.length = " + furniture.length);
	if(furniture.legth == 0){
		window.alert("no object!!");
	}
	for(let i=0; i<furniture.length; ++i){
		if(furniture[i].type === "desk"){
			make_desk(i);
		}
		else if(furniture[i].type === "chair"){
			make_chair(i);
		}
		else if(furniture[i].type === "bed"){
			make_bed(i);
		}
		else if(furniture[i].type === "bookshelf"){
			make_bookshelf(i);
		}
		else if(furniture[i].type === "drawers"){
			make_drawers(i);
		}
		else if(furniture[i].type === "other"){
			make_othre(i);
		}
	}
}

function set_material(object){
	object.material.opacity = 0.5;
	object.material.transparent = true;
	object.material.depthTest = false;
	object.material.alphaToCoverage = true;
}

function camera_set(){
	camera = new THREE.PerspectiveCamera(90, aspect, 1, 50000);
	camera.updateProjectionMatrix();
	camera.position.set(0, 0, Math.sqrt(floor_x*floor_x+floor_y*floor_y+floor_z*floor_z)+1000);
	let max=floor_x;
	if(max < floor_y){
		max = floor_y;
	}
	else if(max<floor_z){
		max = floor_z;
	}

	controls = new THREE.OrbitControls(camera, canvasElement);
	controls.minDistance = 0;
	controls.maxDistance = 50000;
}

function make_floor(){
	startx = -floor_x/2;
	starty = -floor_y/2;
	startz = -floor_z/2;
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
	floor.material.opacity = 0.35;
	floor.material.transparent = true;
	floor.material.depthTest = false;
	floor.material.alphaToCoverage = true;

	scene.add(floor);
}

function make_desk(i){
	let group = new THREE.Group();
	let object;
	let leg_width	= 50;
	let leg_height	= furniture[i].height - 30;
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

		set_material(object);

		switch(i){
			//左上
			case 0:	object.position.x = startx+(furniture_x)+leg_width/2;
					object.position.y = starty+leg_height/2;
					object.position.z = startz+(furniture_z)+leg_depth/2;
					break;
			//左下
			case 1:	object.position.x = startx+(furniture_x)+leg_width/2;
					object.position.y = starty+(furniture_y)+leg_height/2;
					object.position.z = startz+(furniture_z+furniture_depth)-leg_depth;
					break;
			//右上
			case 2:	object.position.x = startx+(furniture_x+furniture_width)-leg_width/2;	
					object.position.y = starty+(furniture_y)+leg_height/2;
					object.position.z = startz+(furniture_z)+leg_depth/2;
					break;
			//右下
			case 3:	object.position.x = startx+(furniture_x+furniture_width)-leg_width/2;
					object.position.y = starty+(furniture_y)+furniture_height/2;
					object.position.z = startz+(furniture_z+furniture_depth)-leg_width/2;
					break;
		}
		group.add(object);
	}

	object = new THREE.Mesh(new THREE.BoxGeometry(furniture_width, 30, furniture_depth), new THREE.MeshStandardMaterial({
		color: 7734e30
	}));

	set_material(object);

	object.position.x = startx+furniture_width/2+furniture_x;
	object.position.y = starty+furniture_height-15;
	object.position.z = startz+furniture_depth/2+furniture_z;

	group.add(object);
	furniture3d.push(group);
	scene.add(furniture3d[i]);
	console.log("make");
	console.log(furniture3d);
}

function make_chair(i){
	let group = new THREE.Group();
	let object;
	let leg_width	= 50;
	let leg_height	= furniture[i].height - 30;
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

		set_material(object);

		switch(i){
			//左上
			case 0:	object.position.x = startx+(furniture_x)+leg_width/2+(furniture_width/2-furniture_width/2*Math.cos(Math.PI/4));
					object.position.y = starty+leg_height/2;
					object.position.z = startz+(furniture_z)+leg_depth/2+(furniture_width/2-furniture_width/2*Math.cos(Math.PI/4));
					break;
			//左下
			case 1:	object.position.x = startx+(furniture_x)+leg_width/2+(furniture_width/2-furniture_width/2*Math.cos(Math.PI/4));
					object.position.y = starty+(furniture_y)+leg_height/2;
					object.position.z = startz+(furniture_z+furniture_depth)-leg_depth/2-(furniture_width/2-furniture_width/2*Math.cos(Math.PI/4));
					break;
			//右上
			case 2:	object.position.x = startx+(furniture_x+furniture_width)-leg_width/2-(furniture_width/2-furniture_width/2*Math.cos(Math.PI/4));	
					object.position.y = starty+(furniture_y)+leg_height/2;
					object.position.z = startz+(furniture_z)+leg_depth/2+(furniture_width/2-furniture_width/2*Math.cos(Math.PI/4));
					break;
			//右下
			case 3:	object.position.x = startx+(furniture_x+furniture_width)-leg_width/2-(furniture_width/2-furniture_width/2*Math.cos(Math.PI/4));
					object.position.y = starty+(furniture_y)+furniture_height/2;
					object.position.z = startz+(furniture_z+furniture_depth)-leg_width/2-(furniture_width/2-furniture_width/2*Math.cos(Math.PI/4));
					break;
		}
		group.add(object);
	}

	object = new THREE.Mesh(new THREE.CylinderGeometry(furniture_width/2, furniture_width/2, 30, 20), new THREE.MeshStandardMaterial({
		color: 7734e30
	}));

	set_material(object);

	object.position.x = startx+furniture_width/2+furniture_x;
	object.position.y = starty+furniture_height-15;
	object.position.z = startz+furniture_depth/2+furniture_z;

	group.add(object);
	furniture3d.push(group);
	scene.add(furniture3d[i]);
}

function make_bed(i){
	let group = new THREE.Group();
	let object;
	let furniture_width = 	furniture[i].width;
	let furniture_depth = 	furniture[i].depth;
	let furniture_height = 	furniture[i].height;
	let furniture_x = furniture[i].x;
	let furniture_y = furniture[i].y;
	let furniture_z = furniture[i].z;
	let leg_width	= 100;
	let leg_depth	= 100;
	let leg_height;
	if(furniture_height < 100){
		leg_height	= 0;
	}
	else if(furniture_height < 200){
		leg_height	= 50;
	}
	else if(furniture_height < 250){
		leg_height 	= 100;
	}
	else{
		leg_height 	= 200;
	}

	for(let i=0; i<4; ++i){
		object = new THREE.Mesh(new THREE.CylinderGeometry(leg_width/2, leg_width/2, leg_height, 30, 20), new THREE.MeshStandardMaterial({
			color: 7734e30
		}));

		set_material(object);

		switch(i){
			//左上
			case 0:	object.position.x = startx+(furniture_x)+leg_width/2;
					object.position.y = starty+leg_height/2;
					object.position.z = startz+(furniture_z)+leg_depth/2;
					break;
			//左下
			case 1:	object.position.x = startx+(furniture_x)+leg_width/2;
					object.position.y = starty+(furniture_y)+leg_height/2;
					object.position.z = startz+(furniture_z+furniture_depth)-leg_depth/2;
					break;
			//右上
			case 2:	object.position.x = startx+(furniture_x+furniture_width)-leg_width/2;	
					object.position.y = starty+(furniture_y)+leg_height/2;
					object.position.z = startz+(furniture_z)+leg_depth/2;
					break;
			//右下
			case 3:	object.position.x = startx+(furniture_x+furniture_width)-leg_width/2;
					object.position.y = starty+(furniture_y)+leg_height/2;
					object.position.z = startz+(furniture_z+furniture_depth)-leg_width/2;
					break;
		}
		group.add(object);
	}

	object = new THREE.Mesh(new THREE.BoxGeometry(furniture_width, furniture_height-leg_height, furniture_depth), new THREE.MeshStandardMaterial({
		color: 7734e30
	}));

	set_material(object);

	object.position.x = startx+furniture_width/2+furniture_x;
	object.position.y = starty+furniture_height-(furniture_height-leg_height)/2;
	object.position.z = startz+furniture_depth/2+furniture_z;

	group.add(object);
	furniture3d.push(group);
	scene.add(furniture3d[i]);
}

function make_drawers(i){
	let group = new THREE.Group();
	let object;
	let furniture_width = 	furniture[i].width;
	let furniture_depth = 	furniture[i].depth;
	let furniture_height = 	furniture[i].height;
	let furniture_x = furniture[i].x;
	let furniture_y = furniture[i].y;
	let furniture_z = furniture[i].z;
	let leg_width	= furniture_width - 20;
	let leg_depth	= furniture_depth - 20;
	let leg_height	= 50;
	let unit_height = (furniture_height - leg_height - 40)/3;

	for(let i=0; i<3; ++i){
		object = new THREE.Mesh(new THREE.BoxGeometry(furniture_width, unit_height, furniture_depth), new THREE.MeshStandardMaterial({
			color: 7734e30
		}));

		set_material(object);

		switch(i){
			//１段目
			case 0:	object.position.x = startx+(furniture_x)+furniture_width/2;
					object.position.y = starty+leg_height+unit_height/2;
					object.position.z = startz+(furniture_z)+furniture_depth/2;
					break;
			//２段目
			case 1:	object.position.x = startx+(furniture_x)+furniture_width/2;
					object.position.y = starty+leg_height+unit_height+20+unit_height/2;
					object.position.z = startz+(furniture_z)+furniture_depth/2;
					break;
			//３段目
			case 2:	object.position.x = startx+(furniture_x)+furniture_width/2;	
					object.position.y = starty+(furniture_y)+leg_height+unit_height+20+unit_height+20+unit_height/2;
					object.position.z = startz+(furniture_z)+furniture_depth/2;
					break;
		}
		group.add(object);
	}

	object = new THREE.Mesh(new THREE.BoxGeometry(leg_width, leg_height, leg_depth), new THREE.MeshStandardMaterial({
		color: 7734e30
	}));
	object.material.opacity = 0.5;
	object.material.transparent = true;
	object.material.depthTest = false;
	object.material.alphaToCoverage = true;
	object.position.x = startx+furniture_width/2+furniture_x;
	object.position.y = starty+leg_height/2;
	object.position.z = startz+furniture_depth/2+furniture_z;

	group.add(object);

	for(let i=0; i<2; ++i){
		object = new THREE.Mesh(new THREE.BoxGeometry(leg_width, 20, leg_depth), new THREE.MeshStandardMaterial({
			color: 7734e30
		}));

		set_material(object);

		object.position.x = startx+furniture_width/2+furniture_x;
		object.position.z = startz+furniture_depth/2+furniture_z;
		switch(i){
			case 0:	object.position.y = starty+leg_height+unit_height+20/2;
					break;
			case 1:	object.position.y = starty+leg_height+unit_height+20+unit_height+10/2;
					break;
		}

		group.add(object);
	}
	furniture3d.push(group);
	scene.add(furniture3d[i]);
}

function make_othre(i){
	let group = new THREE.Group();
	let object;
	let furniture_width = 	furniture[i].width;
	let furniture_depth = 	furniture[i].depth;
	let furniture_height = 	furniture[i].height;
	let furniture_x = furniture[i].x;
	let furniture_y = furniture[i].y;
	let furniture_z = furniture[i].z;

	object = new THREE.Mesh(new THREE.BoxGeometry(furniture_width, furniture_height, furniture_depth), new THREE.MeshStandardMaterial({
		color: 7734e30
	}));
	set_material(object);
	object.position.x = startx+furniture_width/2+furniture_x;
	object.position.y = starty+furniture_height/2;
	object.position.z = startz+furniture_depth/2+furniture_z;

	furniture3d.push(object);
	scene.add(furniture3d[i]);
}

