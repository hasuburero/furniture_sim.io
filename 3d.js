window.addEventListener('DOMContentLoaded', init);


function init(){
	console.log("test");
	const width = window.innerWidth;
	const height = window.innerHeight-50;

	const OPACITY = 0.7;
	const TRANSPARENT = true;
	const DEPTH_TEST = false;
	//let loader = new GLTFLoader();

		
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

	scene.background = new THREE.Color(0xffffff);
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
	//const material = new THREE.MeshStandardMaterial({
	//	color: 0x0000ff
	//});
	const material = new THREE.MeshNormalMaterial();
	const box = new THREE.Mesh(geometry, material);
	scene.add(box);

	const light = new THREE.AmbientLight(0xffffff, 1.0);
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

