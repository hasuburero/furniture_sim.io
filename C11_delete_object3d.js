/**************************************************************************
***     File Name       :C11_delete_object3d.js
***     Version         :v1.0
***     Designer        :蓮原裕太
***     Date            :2022.7.12
***     Purpose         :３ｄモデルの削除
***     Function        :delete_object()
**************************************************************************/

/***********************************************************************
*** Function Name       :delete_object()
***     Designer        :蓮原裕太
*** Date                :2022.6.20
*** Function            :3dモデルを配列からすべて削除する．
*** Return              :void
*************************************************************************/
function delete_object(){
    scene.remove(floor3d);
    for(let i=0; i<furniture3d.length; ++i){
        scene.remove(furniture3d[i]);
    }
    let length = furniture3d.length;
    for(let i=0; i<length; ++i){
        furniture3d.pop(0);
    }
}
