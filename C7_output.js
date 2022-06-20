/**********************************************************************
***     File Name               :C7_output.js
***     Version                 :v1.0
***     Designer                :蓮原裕太
***     Date                    :2022.6.20
***     Purpose                 :保存用ファイルの作成
***     Function                :makefile()
************************************************************************/

let saveButton = document.getElementById('saveButton');

/***********************************************************************
*** Function Name       :make_object()
***     Designer        :蓮原裕太
*** Date                :2022.6.14
*** Function            :保存用ファイルの作成
*** Return              :blob
*************************************************************************/
function makefile(blob){
	let str = String(floor_x) + "," + String(floor_y) + "," + String(floor_z) + "\n";
	for(let i=0; i<furniture.length; ++i){
		str = str + String(furniture[i].width) + ",";
		str = str + String(furniture[i].height) + ",";
		str = str + String(furniture[i].depth) + ",";
		str = str + furniture[i].type + ",";
		str = str + String(furniture[i].x) + ",";
		str = str + String(furniture[i].y) + ",";
		str = str + String(furniture[i].z) + "\n";
	}
	return blob = new Blob([str], {type:"text/plain"});
}
