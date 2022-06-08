window.addEventListener('DOMContentLoaded', init);


function init(){
	const width = window.innerWidth;
	const height = window.innerHeight-50;

		
	const canvasElement = document.querySelector('#Canvas3d');
	const renderer = new THREE.WebGLRenderer({
		canvas: canvasElement,
		antialias: true,
		alpha: true,
		preserveDrawingBuffer: true,
	});

	renderer.setSize(width, height);
	renderer.setPixelRatio(window.devicePixelRatio);


	const scene = new THREE.Scene();

	make_object(scene);
	for(let i=0; i<furniture3d.length; ++i){
		console.log(i);
	}

	scene.background = new THREE.Color(0xfff0f0);
	///////////////////////////////////////////////
	let aspect = width/height;
	/////////////////////////////////////////////



	let x=5000;
	let y=3000;
	let z=4000;
	
	//make box
	let box2_width = 2000;
	let box2_height = 1200;
	let box2_depth = 1700;
	//let box2= new THREE.Mesh(new THREE.BoxGeometry(box2_width, box2_height, box2_depth), new THREE.MeshStandardMaterial({
	//	color: 0xff0000
	//}));

	//light
	const light = new THREE.AmbientLight(0xffffff, 1.0);

	const OPACITY = 0.5;
	const TRANSPARENT = true;
	const DEPTH_TEST = false;
	const alphaToCoverage = true;



	let startx=-x/2;
	let starty=-y/2;
	let startz=z/2;

	//box2.material.opacity = 1.0;
	//box2.material.transparent = true;
	//box2.material.depthTest = false;
	//box2.material.alphaToCoverage = true;

	//box2.position.x = startx+box2_width/2;
	//box2.position.y = starty+box2_height/2;
	//box2.position.z = startz - box2_depth/2;
	//box2.rotation.y = Math.PI/2;

	//scene.add(box2);

	//const light = new THREE.DirectionalLight(0xffffff);
	//light.intensity=2;
	//light.position.set(1, 1, 1);
	scene.add(light);

	const camera = new THREE.PerspectiveCamera(90, aspect, 1, 50000);
	camera.position.set(0, 0, Math.sqrt(x*x+y*y+z*z)+1000);
	console.log(camera.position);


	/////////////////////////////////////////////
	let max=x;
	if(max < y){
		max = y;
	}
	else if(max < z){
		max = z;
	}
	else{
	}
	const controls = new THREE.OrbitControls(camera, canvasElement)
	controls.minDistance = max;
	controls.maxDistance = 50000;
	////////////////////////////////////

	tick();

	function tick(){

		//box.rotation.x += 0.01;
		//box.rotation.y += 0.01;

		renderer.render(scene, camera);
		requestAnimationFrame(tick);
	}
}

