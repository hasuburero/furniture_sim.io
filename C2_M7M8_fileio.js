/**********************************************************************
***     File Name               :C2_M7M8_fileio.js
***     Version                 :v1.0
***     Designer                :山崎大晟，目黒風流人
***     Date                    :2022.6.21
***     Purpose                 :ファイルの入出力処理
***     Function                :select.addEventListener('change', function(e), saveButton.addEventListener('click', () => {})
************************************************************************/

/***********************************************************************
*** Function Name       :select.addEventListener('change', function(e))
*** Designer       　　 :山崎大晟
*** Date                :2022.6.21
*** Function            :ファイルが選択され，完了ボタンが押されたとき，ファイルを読み取る
*** Return              :void
*************************************************************************/
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

/***********************************************************************
*** Function Name       :saveButton.addEventListener('click', () => {})
*** Designer       　　 :目黒風流人
*** Date                :2022.6.20
*** Function            :ボタンが押されたとき，入力された名前を付けてファイルをダウンロードする．
*** Return              :void
*************************************************************************/
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
