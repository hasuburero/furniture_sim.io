/**********************************************************************
***     File Name               :C2_M7M8_fileio.js
***     Version                 :v1.0
***     Designer                :蓮原裕太
***     Date                    :2022.6.20
***     Purpose                 :ファイルの入出力処理
***     Function                :select.addEventListener('change', function(e), saveButton.addEventListener('click', () => {})
************************************************************************/

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

/***********************************************************************
*** Function Name       :select.addEventListener('change', function(e))
***     Designer        :蓮原裕太
*** Date                :2022.6.20
*** Function            :ファイルが選択され，完了ボタンが押されたとき，ファイルを読み取る
*** Return              :void
*************************************************************************/
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

/***********************************************************************
*** Function Name       :saveButton.addEventListener('click', () => {})
***     Designer        :蓮原裕太
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
	Canvas_init();
	CanvasEdit.style.display = "block";
	a[1].textContent = "3D";
});
