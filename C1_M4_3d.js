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

	const light = new THREE.AmbientLight(0xffffff, 1.0);
	scene.add(light);

	tick();
	function tick(){
		renderer.render(scene, camera);
		requestAnimationFrame(tick);
	}
}
