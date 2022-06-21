/**************************************************************************
***     File Name       :C3_FloorInfoOpe.js
***     Version         :v1.0
***     Designer        :森田明日香
***     Date            :2022.6.21
***     Purpose         :間取りの取得
***     Function        :FloorInfoOpe
**************************************************************************/

/**************************************************************************
***     Function Name   :FloorInfoOpe()
***     Designer        :森田明日香
***     Date            :2022.6.21
***     Function        :間取り情報を取得し変数に代入する
***     Return          :boolean
**************************************************************************/

function FloorInfoOpe(){
    if((Floor_x.value == "") || (Floor_y.value == "") || (Floor_z.value == "")){
        alert("入力がされていません");
        return false; /*エラー処理*/
    }
    const x = document.getElementById("Floor_x").value; /*間取り情報取得*/
    const y = document.getElementById("Floor_y").value;
    const z = document.getElementById("Floor_z").value
    if((x>100000) || (y>100000) || (z>100000)){
        alert("入力は100000以下にして下さい");
        return false; /*エラー処理*/
    }else if((x<=0) || (y<=0) || (z<=0)){
        alert("入力は0より大きくして下さい");
        return false; /*エラー処理*/
    }else{
        floor_x = parseInt(x); /*変数代入*/
        floor_y = parseInt(y);
        floor_z = parseInt(z);
        return true; /*通常処理*/
    }
}