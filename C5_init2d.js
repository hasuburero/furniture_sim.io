/**********************************************************************
***     File Name               :C5_init2d.js
***     Version                 :v1.0
***     Designer                :蓮原裕太
***     Date                    :2022.6.20
***     Purpose                 :canvasの設定，2dモデルのアニメーションを制御．
***     Function                :init2d
************************************************************************/

/***********************************************************************
*** Function Name       :init2d()
***     Designer        :蓮原裕太
*** Date                :2022.6.20
*** Function            :canvasの初期化，モデルの制御．
*** Return              :void
*************************************************************************/
let renderer2d = new THREE.WebGLRenderer();
window.addEventListener('DOMContentLoaded', init2d);

function init2d(){
	const width = window.innerWidth;
	const height = window.innerHeight-50;

	aspect = width/height;	
	canvasElement2d = document.querySelector('#CanvasEdit');
	renderer2d = new THREE.WebGLRenderer({
		canvas: canvasElement2d,
		antialias: true,
		alpha: true,
		preserveDrawingBuffer: true,
	});

	renderer2d.setPixelRatio(window.devicePixelRatio);
	renderer2d.setSize(width, height);

	scene2d.background = new THREE.Color(0xfff0f0);

	//light
	const light = new THREE.AmbientLight(0xffffff, 1.0);

	scene2d.add(light);

	tick2d();

	function tick2d(){
		renderer2d.render(scene2d, camera2d);
		requestAnimationFrame(tick2d);
	}
}

