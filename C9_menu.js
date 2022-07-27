const menu = document.getElementById("menu");
const back = document.getElementById("back");
const nav = document.getElementById("nav");
const a =	document.getElementsByTagName('a'); 
const Canvas3d=document.getElementById("Canvas3d");
const CanvasFloor = document.getElementById("CanvasFloor");
const CanvasAdd = document.getElementById("CanvasAdd");
const CanvasSave = document.getElementById("CanvasSave");
const CanvasOpen = document.getElementById("CanvasOpen");
Canvas3d.style.display="none";
CanvasFloor.style.display="block";
CanvasAdd.style.display="none";
CanvasSave.style.display="none";
CanvasOpen.style.display="none";

function Canvas_init(){
	Canvas3d.style.display		= "none";
	CanvasFloor.style.display	= "none";
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

a[0].addEventListener("click", () =>{
	if(CanvasAdd.style.display === "none" && CanvasFloor.style.display === "none"){
		Canvas_init();
		CanvasAdd.style.display = "block";
	}
	else if(Canvas3d.style.display === "none" && CanvasAdd.style.display === "block"){
		Canvas_init();
		Canvas3d.style.display = "block";
	}
	close_menu();
});

a[1].addEventListener("click", () => {
	if(CanvasFloor.style.display === "none" || Canvas3d.style.display == "none"){
		Canvas_init();
		Canvas3d.style.display = "block";
	}
	else if(CanvasFloor.style.display === "block"){
		if(flag==1){
			window.alert("間取りを入力してください");
			flag = 0;
		}
		else{
			Canvas_init();
			Canvas3d.style.display = "block";
		}
	}
	close_menu();
});

a[2].addEventListener("click", () => {
	if(CanvasSave.style.display === "none"){
		Canvas_init();
		CanvasSave.style.display = "block";
	}
	else{
		Canvas_init();
		Canvas3d.style.display = "block";
	}
	close_menu();
});

a[3].addEventListener("click", () => {
	if(CanvasOpen.style.display === "none"){
		Canvas_init();
		CanvasOpen.style.display = "block";
		if(window.File && window.FileReader && window.FileList && window.Blob){
		}
		else{
			window.alert("no file api");
		}
	}
	else{
		Canvas_init();
		Canvas3d.style.display = "block";
	}
	close_menu();
});

a[4].addEventListener("click", () => {
	if(CanvasFloor.style.display === "none"){
		Canvas_init();
		CanvasFloor.style.display = "block";
		window.alert("完了を押すと保存されていないデータは消えます．");
	}
	else{
		Canvas_init();
		Canvas3d.style.display = "block";
	}
	close_menu();
});
