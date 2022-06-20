//if(window.File){
//	window.alert("all the file APIs are supported");
//}
//else{
//	window.alert("no");
//}

//if(typeof Blob !== "undefined"){
//	alert("ok");
//}
//else{
//	alert("no");
//}


select.addEventListener('change', function(e) {
	button.addEventListener('click', ()=>{
		let fileData = e.target.files[0];
		let reader = new FileReader();
		reader.readAsText(fileData);
		reader.onerror = function(){
			alert('ファイルの読み取りに失敗しました');
		}
		reader.onload = function(){
			fileinput(reader);
		}
		Canvas_init();
		CanvasEdit.style.display = "block";
		a[1].textContent = "3D";
	});
});

saveButton.addEventListener('click', () => {
	let blob;
	blob = makefile(blob);
	let link = document.createElement('a');
	link.href = URL.createObjectURL(blob);
	let nameText = document.getElementById('fileName');
	let filename = nameText.value + ".txt";
	link.download = filename;
	link.click();
	Canvas_init();
	CanvasEdit.style.display = "block";
	a[1].textContent = "3D";
});
