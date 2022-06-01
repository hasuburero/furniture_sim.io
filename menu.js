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
CanvasFloor.style.display="none";
CanvasEdit.style.display="block";
CanvasAdd.style.display="none";
CanvasSave.style.display="none";
CanvasOpen.style.display="none";
console.log(a[0]);


menu.addEventListener("click", () => {
	if(nav.className === "navi"){
		nav.classList.add("open-menu");
		back.classList.add("open");
		menu.textContent = "閉じる";
	}else{
		nav.classList.remove("open-menu");
		back.classList.remove("open");
		menu.textContent = "menu";
	}
});

back.addEventListener("click", () =>{
	back.classList.remove("open");
	nav.classList.remove("open-menu");
	menu.textContent = "menu";
});

//CanvasFloor
a[0].addEventListener("click", () =>{
	if(CanvasEdit.style.display == "block" && CanvasAdd.style.display == "none"){
		CanvasAdd.style.display = "block";
		CanvasEdit.style.display = "none";
	}
	else{
		CanvasAdd.style.display = "none";
		CanvasEdit.style.display = "block";
	}
	nav.classList.remove("open-menu");
	back.classList.remove("open");
	menu.textContent = "menu";
});

a[1].addEventListener("click", () => {
	if(CanvasEdit.style.display == "block" && Canvas3d.style.display == "none"){
		a[1].textContent = "編集画面";
		Canvas3d.style.display = "block";
	}
	else{
		a[1].textContent = "3D";
		Canvas3d.style.display = "none";
	}
	nav.classList.remove("open-menu");
	back.classList.remove("open");
	menu.textContent = "menu";
});


