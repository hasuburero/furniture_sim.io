const menu = document.getElementById("menu");
const back = document.getElementById("back");
const nav = document.getElementById("nav");
const a =	document.getElementsByTagName('a'); 
const Canvas3d=document.getElementById("Canvas3d");
const Test = document.getElementById("test");
Canvas3d.style.display="none";
test.style.display="block";
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

a[1].addEventListener("click", () => {
	if(Canvas3d.style.display == "none"){
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


back.addEventListener("click", () =>{
	back.classList.remove("open");
	nav.classList.remove("open-menu");
	menu.textContent = "menu";
});
