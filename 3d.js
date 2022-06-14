window.addEventListener('DOMContentLoaded', init);

function init(){
	const width = window.innerWidth;
	const height = window.innerHeight-50;

	aspect = width/height;	
	canvasElement = document.querySelector('#Canvas3d');
	const renderer = new THREE.WebGLRenderer({
		canvas: canvasElement,
		antialias: true,
		alpha: true,
		preserveDrawingBuffer: true,
	});

	renderer.setPixelRatio(window.devicePixelRatio);
	renderer.setSize(width, height);

	scene.background = new THREE.Color(0xfff0f0);

	//light
	const light = new THREE.AmbientLight(0xffffff, 1.0);

	scene.add(light);

	//const camera = new THREE.PerspectiveCamera(90, aspect, 1, 50000);
	//camera.position.set(0, 0, Math.sqrt(x*x+y*y+z*z)+1000);
	//console.log(camera.position);


	//let max=x;
	//if(max < y){
	//	max = y;
	//}
	//else if(max < z){
	//	max = z;
	//}
	//else{
	//}
	//const controls = new THREE.OrbitControls(camera, canvasElement)
	//controls.minDistance = max;
	//controls.maxDistance = 50000;

	tick();

	function tick(){

		//box.rotation.x += 0.01;
		//box.rotation.y += 0.01;

		renderer.render(scene, camera);
		requestAnimationFrame(tick);
	}
}

