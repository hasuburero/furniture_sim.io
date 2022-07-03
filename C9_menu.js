/***********************************************************************
***		File Name		:C9_menu.js
***		Version			:v1.0
***		Designer		:蓮原裕太
***		Date			:2022.
***		Purpose			:画面遷移の制御
***		Function		:Canvas_init, close_menu, menu.addEventListener("click", () => {, back.addEventListener("click", () =>{, a[0].addEventListener("click", () =>{, a[1].addEventListener("click", () =>{, a[2].addEventListener("click", () =>{, a[3].addEventListener("click", () =>{, a[4].addEventListener("click", () =>{, 
***********************************************************************/

const menu = document.getElementById("menu");
const back = document.getElementById("back");
const nav = document.getElementById("nav");
const a =	document.getElementsByTagName('a'); 
const Canvas3d=document.getElementById("Canvas3d");
const CanvasFloor = document.getElementById("CanvasFloor");
const CanvasEdit = document.getElementById("CanvasEdit");
const CanvasAdd = document.getElementById("CanvasAdd");
const CanvasSave = document.getElementById("CanvasSave");
const CanvasOpen = document.getElementById("CanvasOpen");
const app = document.getElementById("app");
Canvas3d.style.display="none";
CanvasFloor.style.display="block";
CanvasEdit.style.display="none";
CanvasAdd.style.display="none";
CanvasSave.style.display="none";
CanvasOpen.style.display="none";
app.style.display = "none";

/***********************************************************************
*** Function Name		:Canvas_init
***	Designer			:蓮原裕太
***	Date				:2022.6.28
***	Function			:画面の初期化．すべての画面を非表示にする．
***	Return				:void
***********************************************************************/
function Canvas_init(){
	Canvas3d.style.display		= "none";
	CanvasFloor.style.display	= "none";
	CanvasEdit.style.display	= "none";
	CanvasAdd.style.display		= "none";
	CanvasSave.style.display	= "none";
	CanvasOpen.style.display	= "none";
}

/***********************************************************************
*** Function Name       :Canvas_init
*** Designer            :蓮原裕太
*** Date                :2022.6.28
*** Function            :メニューが画面を閉じる．
*** Return              :void
***********************************************************************/
function close_menu(){
	nav.classList.remove("open-menu");
	back.classList.remove("open");
	menu.textContent = "menu";
}

/***********************************************************************
*** Function Name       :menu.addEventListener("click", () =>{
*** Designer            :蓮原裕太
*** Date                :2022.6.28
*** Function            :メニュー画面を開く，または閉じる．
*** Return              :void
***********************************************************************/
menu.addEventListener("click", () => {
	if(nav.className === "navi"){
		nav.classList.add("open-menu");
		back.classList.add("open");
		menu.textContent = "閉じる";
	}else{
		close_menu();
	}
});

/***********************************************************************
*** Function Name       :back.addEventListener("click", () =>{
*** Designer            :蓮原裕太
*** Date                :2022.6.28
*** Function            :メニュー画面外がクリックされた際に，メニュー画面を閉じる
*** Return              :void
***********************************************************************/
back.addEventListener("click", () =>{
	close_menu();
});

/***********************************************************************
*** Function Name       :a[0].addEventListener("click", () =>{
*** Designer            :蓮原裕太
*** Date                :2022.6.28
*** Function            :「追加」が押されたときに，家具追加画面を表示．または既に表示済みなら閉じる
*** Return              :void
***********************************************************************/
a[0].addEventListener("click", () =>{
	if((CanvasEdit.style.display === "block" || Canvas3d.style.display === "block" || CanvasOpen.style.display === "block" || CanvasSave.style.display === "block") && CanvasAdd.style.display === "none"){
		Canvas_init();
		a[1].textContent = "編集画面";
		CanvasAdd.style.display = "block";
	}
	else if(CanvasEdit.style.display === "none" && CanvasAdd.style.display === "block"){
		Canvas_init();
		a[1].textContent = "3D";
		CanvasEdit.style.display = "block";
	}
	close_menu();
});

/***********************************************************************
*** Function Name       :a[1].addEventListener("click", () =>{
*** Designer            :蓮原裕太
*** Date                :2022.6.28
*** Function            :「3D」が押されたとき，もしくは「編集画面」が押されたときに，3D画面の初期化と表示，または閉じて編集画面を表示する．また>は既に表示済みなら編集画面に戻る
*** Return              :void
***********************************************************************/
a[1].addEventListener("click", () => {
	if(CanvasEdit.style.display == "block" && Canvas3d.style.display == "none"){
		delete_object();
		make_floor();	//make_floor()は間取り完成後に実行がいいかも
		make_object();	//これは家具配置関数
		camera_set();
		a[1].textContent = "編集画面";
		Canvas_init();
		Canvas3d.style.display = "block";
	}
	else if(CanvasEdit.style.display === "none" && Canvas3d.style.display === "block"){
		a[1].textContent = "3D";
		Canvas_init();
		CanvasEdit.style.display = "block";
	}
	else if(CanvasEdit.style.display === "none" && CanvasOpen.style.display === "block"){
		Canvas_init();
		CanvasEdit.style.display = "block";
	}
	else if(CanvasEdit.style.display === "none" && CanvasAdd.style.display === "block"){
		Canvas_init();
		a[1].textContent = "3D";
		CanvasEdit.style.display = "block";
	}
	else if(CanvasEdit.style.display === "none" && CanvasFloor.style.display === "block"){
		if(a[1].textContent === "3D"){
			window.alert("間取りを入力してください");
		}
		else{
			Canvas_init();
			a[1].textContent = "3D";
			CanvasEdit.style.display = "block";
		}
	}
	close_menu();
});

/***********************************************************************
*** Function Name       :a[2].addEventListener("click", () =>{
*** Designer            :蓮原裕太
*** Date                :2022.6.28
*** Function            :「保存」が押されたときに，保存画面を表示．また>は既に表示済みなら閉じる
*** Return              :void
***********************************************************************/
a[2].addEventListener("click", () => {
	if(CanvasSave.style.display === "none"){
		Canvas_init();
		CanvasSave.style.display = "block";
		a[1].textContent = "編集画面";
	}
	else{
		Canvas_init();
		CanvasEdit.style.display = "block";
		a[1].textContent = "3D";
	}
	close_menu();
});

/***********************************************************************
*** Function Name       :a[3].addEventListener("click", () =>{
*** Designer            :蓮原裕太
*** Date                :2022.6.28
*** Function            :「開く」が押されたときに，ファイルを開く画面を表示．また>は既に表示済みなら閉じる
*** Return              :void
***********************************************************************/
a[3].addEventListener("click", () => {
	if(CanvasOpen.style.display === "none"){
		console.log(furniture);
		Canvas_init();
		CanvasOpen.style.display = "block";
		a[1].textContent = "編集画面";
		if(window.File && window.FileReader && window.FileList && window.Blob){
		}
		else{
			window.alert("no file api");
		}
	}
	else{
		Canvas_init();
		CanvasEdit.style.display = "block";
		a[1].textContent = "3D";
	}
	close_menu();
});

/***********************************************************************
*** Function Name       :a[4].addEventListener("click", () =>{
*** Designer            :蓮原裕太
*** Date                :2022.6.28
*** Function            :「新規作成」が押されたときに，間取り入力画面を表示．また>は既に表示済みなら閉じる
*** Return              :void
***********************************************************************/
a[4].addEventListener("click", () => {
	if(CanvasFloor.style.display === "none"){
		Canvas_init();
		CanvasFloor.style.display = "block";
		a[1].textContent = "編集画面";
		window.alert("完了を押すと保存されていないデータは消えます．");
	}
	else{
		Canvas_init();
		CanvasEdit.style.display = "block";
		a[1].textContent = "3D";
	}
	close_menu();
});
