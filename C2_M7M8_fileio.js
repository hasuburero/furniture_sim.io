select.addEventListener('change', function(e) {
	file = e;
});

button.addEventListener('click', ()=>{
	let fileData = file.target.files[0];
	let reader = new FileReader();
	reader.readAsText(fileData);
	reader.onerror = function(){
		alert('ファイルの読み取りに失敗しました');
	}
	reader.onload = function(){
		fileinput(reader);
	}
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
	init3d();
	Canvas_init();
	Canvas3d.style.display = "block";
});
