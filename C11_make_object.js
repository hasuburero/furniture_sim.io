/**********************************************************************
***	File Name		:make_object.js
***	Version			:v1.1
***	Designer		:蓮原裕太
***	Date			:2022.6.28
***	Purpose			:3Dモデルの作成
***	Function			:make_object, set_material, camera_set, make_floor, make_desk, make_chair, make_bed, make_drawers, make_other, make_bookshelf, init3d
************************************************************************/

/***********************************************************************
*** Function Name	:make_object()
***	Designer		:蓮原裕太
*** Date			:2022.6.14
*** Function  		:3dモデル作成のために最初に呼び出される関数．配列furnitureのtypeによって処理を分岐させる．
*** Return 			:void
*************************************************************************/
function make_object(){
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
			make_other(i);
		}
	}
}

/***********************************************************************
*** Function Name	:set_material(object)
***	Designer		:蓮原裕太
*** Date			:2022.6.14
*** Function  		:各家具作成関数におけるショートカット
*** Return 			:void
*************************************************************************/
function set_material(object){
	object.material.opacity = 0.5;
	object.material.transparent = true;
	object.material.depthTest = false;
	object.material.alphaToCoverage = true;
}

/***********************************************************************
*** Function Name	:camera_set()
***	Designer		:蓮原裕太
*** Date			:2022.6.14
*** Function  		:カメラの初期化
*** Return 			:void
*************************************************************************/
function camera_set(){
	camera = new THREE.PerspectiveCamera(90, aspect, 1, 50000);
	camera.updateProjectionMatrix();
	let position = Math.sqrt(floor_x*floor_x+floor_y*floor_y+floor_z*floor_z);
	camera.position.set(0, 0, position+1000);
	let max=floor_x;
	let min=floor_x;
	if(max < floor_y){
		max = floor_y;
	}
	else if(max<floor_z){
		max = floor_z;
	}
	if(min > floor_y){
		min = floor_y;
	}
	else if(min > floor_z){
		min = floor_z;
	}

	controls = new THREE.OrbitControls(camera, canvasElement);
	controls.minDistance = min;
	controls.maxDistance = position+2000;
}

/***********************************************************************
*** Function Name	:make_floor()
***	Designer		:蓮原裕太
*** Date			:2022.6.14
*** Function  		:間取り作成関数
*** Return 			:void
*************************************************************************/
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

/***********************************************************************
*** Function Name	:make_desk(i)
***	Designer		:蓮原裕太
*** Date			:2022.6.14
*** Function  		:デスク作成関数．objectはGroupで管理．Groupはfurniture3dに格納後sceneに追加
*** Return 			:void
*************************************************************************/
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
}

/***********************************************************************
*** Function Name	:make_chair(i)
***	Designer		:蓮原裕太
*** Date			:2022.6.28
*** Function  		:椅子作成関数．objectはGroupで管理．Groupはfurniture3dに格納後sceneに追加
*** Return 			:void
*************************************************************************/
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

	let offset = 20;

	for(let i=0; i<4; ++i){
		object = new THREE.Mesh(new THREE.BoxGeometry(leg_width, leg_height, leg_depth), new THREE.MeshStandardMaterial({
			color: 7734e30
		}));

		set_material(object);

		switch(i){
			//左上
			case 0:	object.position.x = startx+(furniture_x)+leg_width/2+offset;
					object.position.y = starty+leg_height/2;
					object.position.z = startz+(furniture_z)+leg_depth/2+offset;
					break;
			//左下
			case 1:	object.position.x = startx+(furniture_x)+leg_width/2+offset;
					object.position.y = starty+(furniture_y)+leg_height/2;
					object.position.z = startz+(furniture_z+furniture_depth)-leg_depth/2-offset;
					break;
			//右上
			case 2:	object.position.x = startx+(furniture_x+furniture_width)-leg_width/2-offset;	
					object.position.y = starty+(furniture_y)+leg_height/2;
					object.position.z = startz+(furniture_z)+leg_depth/2+offset;
					break;
			//右下
			case 3:	object.position.x = startx+(furniture_x+furniture_width)-leg_width/2-offset;
					object.position.y = starty+(furniture_y)+furniture_height/2;
					object.position.z = startz+(furniture_z+furniture_depth)-leg_width/2-offset;
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
}

/***********************************************************************
*** Function Name	:make_bed(i)
***	Designer		:蓮原裕太
*** Date			:2022.6.14
*** Function  		:ベッド作成関数．objectはGroupで管理．Groupはfurniture3dに格納後sceneに追加
*** Return 			:void
*************************************************************************/
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

/***********************************************************************
*** Function Name	:make_drawers(i)
***	Designer		:蓮原裕太
*** Date			:2022.6.14
*** Function  		:タンス作成関数．objectはGroupで管理．Groupはfurniture3dに格納後sceneに追加
*** Return 			:void
*************************************************************************/
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

/***********************************************************************
*** Function Name	:make_other(i)
***	Designer		:蓮原裕太
*** Date			:2022.6.14
*** Function  		:その他作成関数．objectはGroupで管理．Groupはfurniture3dに格納後sceneに追加
*** Return 			:void
*************************************************************************/
function make_other(i){
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

/***********************************************************************
*** Function Name	:make_bookshelf(i)
***	Designer		:蓮原裕太
*** Date			:2022.6.14
*** Function  		:その他作成関数．objectはGroupで管理．Groupはfurniture3dに格納後sceneに追加
*** Return 			:void
*************************************************************************/
function make_bookshelf(i){
	let group = new THREE.Group();
	let object;
	let furniture_width = 	furniture[i].width;
	let furniture_depth = 	furniture[i].depth;
	let furniture_height = 	20;
	let furniture_x = furniture[i].x;
	let furniture_y = furniture[i].y;
	let furniture_z = furniture[i].z;
	let leg_width	= 50;
	let leg_depth	= 50;
	let leg_height 	= furniture[i].height;

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
					object.position.y = starty+(furniture_y)+leg_height/2;
					object.position.z = startz+(furniture_z+furniture_depth)-leg_width/2;
					break;
		}
		group.add(object);
	}

	for(let i=0; i<5; ++i){
		object = new THREE.Mesh(new THREE.BoxGeometry(furniture_width-100, furniture_height, furniture_depth-100), new THREE.MeshStandardMaterial({
			color: 7734e30
		}));

		set_material(object);

		switch(i){
			//左上
			case 0:	object.position.x = startx+(furniture_x)+furniture_width/2;
					object.position.y = starty-furniture_height/2+50;
					object.position.z = startz+(furniture_z)+furniture_depth/2;
					break;
			//左下
			case 1:	object.position.x = startx+(furniture_x)+furniture_width/2;
					object.position.y = starty+((leg_height-60)/4+60)-furniture_height/2;
					object.position.z = startz+(furniture_z)+furniture_depth/2;
					break;
			//右上
			case 2:	object.position.x = startx+(furniture_x)+furniture_width/2;	
					object.position.y = starty+((leg_height-60)/2+60)-furniture_height/2;
					object.position.z = startz+(furniture_z)+furniture_depth/2;
					break;
			//右下
			case 3:	object.position.x = startx+(furniture_x)+furniture_width/2;
					object.position.y = starty+((leg_height-60)*3/4+60)-furniture_height/2;
					object.position.z = startz+(furniture_z)+furniture_depth/2;
					break;
			case 4:	object.position.x = startx+(furniture_x)+furniture_width/2;
					object.position.y = starty+(leg_height)-furniture_height/2;
					object.position.z = startz+(furniture_z)+furniture_depth/2;
		}
		group.add(object);
	}
	furniture3d.push(group);
	scene.add(furniture3d[i]);
}

/***********************************************************************
*** Function Name	:init3d()
***	Designer		:蓮原裕太
*** Date			:2022.6.14
*** Function  		:3dモデルの初期化関数
*** Return 			:void
*************************************************************************/
function init3d(){
	delete_object();
	make_floor();
	make_object();
	camera_set();
}
