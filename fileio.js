//if(window.File){
//	window.alert("all the file APIs are supported");
//}
//else{
//	window.alert("no");
//}


select.addEventListener('change', function(e) {
	console.log("1");
	button.addEventListener('click', () =>{
		console.log("2");
		delete_furniture();
		console.log("deleted");
		console.log(furniture);
		let fileData = e.target.files[0];
		console.log(fileData);
		let reader = new FileReader();
		reader.onerror = function(){
			alert('ファイルの読み取りに失敗しました');
		}
		reader.onload = function(){
			fileinput(reader);
			//let lineArr = reader.result.split("\n");
			//let itemArr = [];
			//for(let i=0; i<lineArr.length; ++i){
			//	itemArr[i] = lineArr[i].split(",");
			//	if(i==0){
			//		floor_x = parseInt(itemArr[i][0]);
			//		floor_y = parseInt(itemArr[i][1]);
			//		itemArr[i][2] = itemArr[i][2].replace("\r", "");
			//	}
			//	else{
			//		furniture.push(new furniture_class(parseInt(itemArr[i][0]), parseInt(itemArr[i][1]), parseInt(itemArr[i][2]), itemArr[i][3]));
			//		furniture[i-1].setx = parseInt(itemArr[i][4]);
			//		furniture[i-1].sety = parseInt(itemArr[i][5]);
			//		furniture[i-1].setz = parseInt(itemArr[i][6]);
			//		console.log(itemArr[i]);
			//		console.log(furniture[i-1]);
			//	}
			//}
		}
		reader.readAsText(fileData);
	});
});

