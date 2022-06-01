window.addEventListener('DOMContentLoaded', init);


function init(){
	console.log("test");
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

	scene.background = new THREE.Color(0xfff0f0);
	///////////////////////////////////////////////
	let aspect = width/height;
	/////////////////////////////////////////////

	const camera = new THREE.PerspectiveCamera(45, aspect);
	camera.position.set(0, 0, 1000);

	/////////////////////////////////////////////
	const controls = new THREE.OrbitControls(camera, canvasElement)
	controls.minDistance = 200;
	controls.maxDistance = 1500;
	////////////////////////////////////

	const geometry = new THREE.BoxGeometry(100, 100, 100);
	const material = new THREE.MeshStandardMaterial({
		color: 0xf0f000
	});
	
	//make box
	//const material = new THREE.MeshNormalMaterial();
	const box = new THREE.Mesh(geometry, material);
	scene.add(box);

	//light
	const light = new THREE.AmbientLight(0xffffff, 1.0);

	const OPACITY = 0.6;
	const TRANSPARENT = true;
	const DEPTH_TEST = false;
	const alphaToCoverage = true;


	console.log(box.material.opacity = OPACITY);
	console.log(box.material.transparent = TRANSPARENT);
	console.log(box.material.depthTest = DEPTH_TEST);
	console.log(box.material.alphaToCoverage = alphaToCoverage);



	//const light = new THREE.DirectionalLight(0xffffff);
	//light.intensity=2;
	//light.position.set(1, 1, 1);
	scene.add(light);

	tick();

	function tick(){

		//box.rotation.x += 0.01;
		//box.rotation.y += 0.01;

		renderer.render(scene, camera);
		requestAnimationFrame(tick);
	}
}

