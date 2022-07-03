/**********************************************************************
***	File Name		:make_2dobject.js
***	Version			:v1.1
***	Designer		:蓮原裕太
***	Date			:2022.6.28
***	Purpose			:3Dモデルの作成
***	Function			:make_object, set_material, camera_set, make_floor, make_desk, make_chair, make_bed, make_drawers, make_other, make_bookshelf
************************************************************************/

/***********************************************************************
*** Function Name	:make_object2d()
***	Designer		:蓮原裕太
*** Date			:2022.6.14
*** Function  		:3dモデル作成のために最初に呼び出される関数．配列furnitureのtypeによって処理を分岐させる．
*** Return 			:void
*************************************************************************/
function make_object2d(){
	console.log("furniture.length = " + furniture.length);
	for(let i=0; i<furniture.length; ++i){
		console.log("test");
		make2d(i);
	}
}

/***********************************************************************
*** Function Name	:set_material(object)
***	Designer		:蓮原裕太
*** Date			:2022.6.14
*** Function  		:各家具作成関数におけるショートカット
*** Return 			:void
*************************************************************************/
function set_material2d(object){
	object.material.opacity = 0.5;
	object.material.transparent = true;
	object.material.depthTest = false;
	object.material.alphaToCoverage = true;
}

/***********************************************************************
*** Function Name	:camera2d_set()
***	Designer		:蓮原裕太
*** Date			:2022.6.14
*** Function  		:カメラの初期化
*** Return 			:void
*************************************************************************/
function camera2d_set(){
	camera2d = new THREE.PerspectiveCamera(90, aspect, 1, 50000);
	camera2d.updateProjectionMatrix();
	let position = Math.sqrt(floor_x*floor_x+floor_z*floor_z);
	camera2d.position.set(0, 0, position+1000);
	let max=floor_x;
	let min=floor_x;
	if(max<floor_z){
		max = floor_z;
	}
	if(min > floor_z){
		min = floor_z;
	}

	controls2d = new THREE.OrbitControls(camera2d, canvasElement2d);
	controls2d.minDistance = min;
	controls2d.maxDistance = position+2000;
	controls2d.maxPolarAngle = Math.PI/2;
	controls2d.minPolarAngle = Math.PI/2;
	controls2d.maxAzimuthAngle = 0;
	controls2d.minAzimuthAngle = 0;
}

/***********************************************************************
*** Function Name	:make_2dfloor()
***	Designer		:蓮原裕太
*** Date			:2022.6.14
*** Function  		:間取り作成関数
*** Return 			:void
*************************************************************************/
function make_floor2d(){
	startx = -floor_x/2;
	starty = -floor_y/2;
	startz = -floor_z/2;
	const width = window.innerWidth;
	const height = window.innerHeight-50;

	const opacity = 0.7;
	const transparent = true;
	const depth_test = false;
	const alphaToCoverage = true;
	
	const geometry = new THREE.PlaneGeometry(floor_x, floor_z, 1, 1);
	const material = new THREE.MeshLambertMaterial({
		color: 0xf0f000
	});

	let floor = new THREE.Mesh(geometry, material);
	floor.material.opacity = 0.35;
	floor.material.transparent = true;
	floor.material.depthTest = false;
	floor.material.alphaToCoverage = true;

	scene2d.add(floor);
}

/***********************************************************************
*** Function Name	:make2d(i)
***	Designer		:蓮原裕太
*** Date			:2022.6.14
*** Function  		:デスク作成関数．objectはGroupで管理．Groupはfurniture3dに格納後sceneに追加
*** Return 			:void
*************************************************************************/
function make2d(i){
	let furniture_width = 	furniture[i].width;
	let furniture_depth = 	furniture[i].depth;
	let furniture_height = 	furniture[i].height;
	let furniture_x = furniture[i].x;
	let furniture_y = furniture[i].y;
	let furniture_z = furniture[i].z;

	let object = new THREE.Mesh(new THREE.PlaneGeometry(furniture_width, furniture_depth, 1, 1), new THREE.MeshLambertMaterial({
		color: 7734e30
	}));

	set_material(object);

	object.position.x = startx+furniture_width/2+furniture_x;
	object.position.y = -startz-furniture_depth/2-furniture_z;
	object.position.z = 1;

	furniture2d.push(object);
	scene2d.add(furniture2d[i]);
	console.log("make2d");
	console.log(furniture);
}

let transformControls = new THREE.TransformControls(
  camera2d, renderer2d.domElement
);
transformControls.addEventListener(
  'mouseDown', function(e){
    /// OrbitControls無効化
    controls2d.enablePan = false;
    controls2d.enableRotate = false;
  }.bind(this)
);
transformControls.addEventListener(
  'mouseUp', function(e){
    /// OrbitControls有効化
    controls2d.enablePan = true;
    controls2d.enableRotate = true;
  }.bind(this)
);
/// 移動対象のメッシュを指定
transformControls.attach( cube );
/// TransformControlsを追加
scene2d.add(transformControls);
