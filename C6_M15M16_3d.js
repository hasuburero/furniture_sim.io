/**********************************************************************
***     File Name               :C6_M15M16_3d.js
***     Version                 :v1.0
***     Designer                :蓮原裕太
***     Date                    :2022.6.20
***     Purpose                 :canvasの設定，3dモデルのアニメーションを制御．
***     Function                :init 
************************************************************************/

/***********************************************************************
*** Function Name       :init3d()
***     Designer        :蓮原裕太
*** Date                :2022.6.20
*** Function            :canvasの初期化，モデルの制御．
*** Return              :void
*************************************************************************/
window.addEventListener('DOMContentLoaded', init3d);

function init3d(){
	const width = window.innerWidth;
	const height = window.innerHeight-50;

	aspect = width/height;	
	canvasElement3d = document.querySelector('#Canvas3d');
	const renderer = new THREE.WebGLRenderer({
		canvas: canvasElement3d,
		antialias: true,
		alpha: true,
		preserveDrawingBuffer: true,
	});

	renderer.setPixelRatio(window.devicePixelRatio);
	renderer.setSize(width, height);

	scene3d.background = new THREE.Color(0xfff0f0);

	//light
	const light = new THREE.AmbientLight(0xffffff, 1.0);

	scene3d.add(light);

	tick3d();

	function tick3d(){
		renderer.render(scene3d, camera3d);
		requestAnimationFrame(tick3d);
	}
}
