/**********************************************************************
***     File Name               :C8_input.js
***     Version                 :v1.0
***     Designer                :蓮原裕太
***     Date                    :2022.6.20
***     Purpose                 :入力ファイルの内容を格納
***     Function                :fileinput()
************************************************************************/

let result = document.getElementById('result');
let select = document.getElementById('select');
let button = document.getElementById('button');

/***********************************************************************
*** Function Name       :fileinput()
***     Designer        :蓮原裕太
*** Date                :2022.6.14
*** Function            :入力ファイルの内容を格納する．ファイル末尾に"\n"の有無で１ループ無駄に回る．isNaNで検知．
*** Return              :void
*************************************************************************/
function fileinput(reader){
	delete_furniture();
	let lineArr = reader.result.split("\n");
	let itemArr = [];
	for(let i=0; i<lineArr.length; ++i){
		itemArr[i] = lineArr[i].split(",");
		if(i==0){
			let x = parseInt(itemArr[i][0]);
			let y = parseInt(itemArr[i][1]);
			let z = parseInt(itemArr[i][2]);
			if(x>1000 || y>1000 || z>1000){
				return 1;
			}
			floor_x = parseInt(itemArr[i][0]);
			floor_y = parseInt(itemArr[i][1]);
			itemArr[i][2] = itemArr[i][2].replace("\r", "");
			floor_z = parseInt(itemArr[i][2]);
		}
		else{
			if(isNaN(parseInt(itemArr[i][0]))){
				break;
			}
			furniture.push(new furniture_class(parseInt(itemArr[i][0]), parseInt(itemArr[i][1]), parseInt(itemArr[i][2]), itemArr[i][3]));
			furniture[i-1].setx = parseInt(itemArr[i][4]);
			furniture[i-1].sety = parseInt(itemArr[i][5]);
			itemArr[i][6] = itemArr[i][6].replace("\r", "");
			itemArr[i][6] = itemArr[i][6].replace("\n", "");
			furniture[i-1].setz = parseInt(itemArr[i][6]);
		}
	}
	init3d();
}
