/**************************************************************************
***     File Name       :C4_furnitureInputOpe.js
***     Version         :v1.0
***     Designer        :森田明日香
***     Date            :2022.6.21
***     Purpose         :家具情報の取得
***     Function        :furnitureInputOpe
**************************************************************************/

/**************************************************************************
***     Function Name   :furnitureInputOpe()
***     Designer        :森田明日香
***     Date            :2022.6.21
***     Function        :家具情報を取得し配列に格納する
***     Return          :boolean
**************************************************************************/

const addbutton = document.getElementById("addbutton");
addbutton.addEventListener('click', () => {
    const type = document.getElementById("add_type").value; /*家具タイプ取得*/
    if((add_width.value == "") || (add_height.value == "") || (add_depth.value == "")){
        alert("入力がされていません");
        return false; /*エラー処理*/
    }
    const width = document.getElementById("add_width").value;   /*家具大きさ取得*/
    const height = document.getElementById("add_height").value;
    const depth = document.getElementById("add_depth").value
    if((width>100000) || (height>100000) || (depth>100000)){
        alert("入力は100000以下にして下さい");
        return false; /*エラー処理*/
    }else if((width<=0) || (height<=0) || (depth<=0)){
        alert("入力は0より大きくして下さい");
        return false; /*エラー処理*/
    }else{
        console.log(furniture);
        furniture.push(new furniture_class(parseInt(depth), parseInt(height), parseInt(width), type)); /*配列格納*/
        furniture[furniture.length-1].setx = 0; 
        furniture[furniture.length-1].sety = 0;
        furniture[furniture.length-1].setz = 0;
        console.log(furniture);
		Canvas_init();
		CanvasEdit.style.display = "block";
    }
});
