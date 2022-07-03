/*************************************************************************
***		File Name		:hensu.js
***		Version			:v1.0
***		Designer		:蓮原裕太	
***		Date			:2022.6.14
***		Purpose			:グローバル変数や配列の宣言
*************************************************************************/

let furniture = []; //furniture.push(new furniture_class(x, y, z, type))で格納，furniture.pop(i)で削除.
let furniture2d = [];
let furniture3d = []; //furniture3d.push(object)で3dオブジェクトもしくはグループを格納．furniture.pop(i)で削除．
let x; //家具のx座標の一時保存場
let y; //家具のy座標の一時保存場
let z; //家具のz座標の一時保存場
let floor_x=800; //間取りのx座標の格納場所
let floor_y=600; //間取りのy座標の格納場所
let floor_z; //間取りのz座標の格納場所
let startx = 0; //3dモデル配置時のスタート位置を決めるための変数
let starty = 0; //3dモデル配置時のスタート位置を決めるための変数
let startz = 0; //3dモデル配置時のスタート位置を決めるための変数
let width; //家具の横の一時保存場
let height; //家具の横の一時保存場
let depth; //家具の横の一時保存場
let type; //家具のtypeの一時保存場

const scene3d = new THREE.Scene(); //3dモデルを格納するsceneオブジェクトの生成
const scene2d = new THREE.Scene(); //2dモデルを格納するsceneオブジェクトの生成

//以下camera用
let camera3d = new THREE.PerspectiveCamera(90, 1, 1, 50000); //cameraオブジェクトの生成
let camera2d = new THREE.PerspectiveCamera(90, 1, 1, 50000); //cameraオブジェクトの生成
let aspect; //アス比
let controls3d; //カメラコントロール用オブジェクトの生成用
let controls2d; //カメラコントロール用オブジェクトの生成用
let canvasElement3d; //3dキャンバスの要素オブジェクト格納用 
let canvasElement2d; //2dキャンバスの要素オブジェクト格納用 

