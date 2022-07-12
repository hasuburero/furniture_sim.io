/**************************************************************************
***		File Name		:C10_delete_object.js
***		Version 		:v1.0
***		Designer		:蓮原裕太
***		Date			:2022.6.20
***		Purpose			:家具情報の削除
***		Function		:delete_object(), delete_furniture()
**************************************************************************/

/***********************************************************************
*** Function Name       :delete_furniture()
***     Designer        :蓮原裕太
*** Date                :2022.6.20
*** Function            :家具情報を格納した配列を初期する．
*** Return              :void
*************************************************************************/
function delete_furniture(){
	let length = furniture.length;
	for(let i=0; i<length; ++i){
		furniture.pop(0);
	}
}
