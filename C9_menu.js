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
Canvas3d.style.display="none";
CanvasFloor.style.display="block";
CanvasEdit.style.display="none";
CanvasAdd.style.display="none";
CanvasSave.style.display="none";
CanvasOpen.style.display="none";

function Canvas_init(){
	Canvas3d.style.display		= "none";
	CanvasFloor.style.display	= "none";
	CanvasEdit.style.display	= "none";
	CanvasAdd.style.display		= "none";
	CanvasSave.style.display	= "none";
	CanvasOpen.style.display	= "none";
}

function close_menu(){
	nav.classList.remove("open-menu");
	back.classList.remove("open");
	menu.textContent = "menu";
}

menu.addEventListener("click", () => {
	if(nav.className === "navi"){
		nav.classList.add("open-menu");
		back.classList.add("open");
		menu.textContent = "閉じる";
	}else{
		close_menu();
	}
});

back.addEventListener("click", () =>{
	close_menu();
});

//CanvasFloor
a[0].addEventListener("click", () =>{
	if((CanvasEdit.style.display === "block" || Canvas3d.style.display === "block" || CanvasOpen.style.display === "block" || CanvasSave.style.display === "block") && CanvasAdd.style.display === "none"){
		Canvas_init();
		CanvasAdd.style.display = "block";
	}
	else if(CanvasEdit.style.display === "none" && CanvasAdd.style.display === "block"){
		Canvas_init();
		CanvasEdit.style.display = "block";
	}
	close_menu();
});


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
		console.log("before");
		console.log(furniture);
		console.log("after");
		console.log(furniture);
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
		CanvasEdit.style.display = "block";
	}
	close_menu();
});

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
