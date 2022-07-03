/**********************************************************************
***	File Name		:index.js
***	Version			:v1.0
***	Designer		:山崎大晟
***	Date			:2022.
***	Purpose			:初期化し、家具を配置しなおす処理
***	Function			:make_object2d, make_floor2d, make_Rect2d, make_chair2d
************************************************************************/

let app = new PIXI.Application({
    width: floor_x+1000,
    height: floor_y+1000,
    backgroundColor: 0xffffff,
    autoDensity: true,
});

document.body.appendChild(app.view);

/***********************************************************************
*** Function Name	:make_floor2d()
***	Designer		:山崎大晟
*** Date			:2022.6.14
*** Function  		:２D間取り作成関数
*** Return 			:void
*************************************************************************/
function make_floor2d(){
		
	let floor2d = new PIXI.Graphics()

	.beginFill(0xd6f636,0.4)
	.drawPolygon([0,0 , 0+floor_x,0 , 0+floor_x,floor_y, 0,floor_y,])  
	.endFill();

	console.log("make");
	console.log("floor");

	app.stage.addChild(floor2d);
}

/***********************************************************************
*** Function Name       :delete_object2d()
***     Designer        :山崎大晟
*** Date                :2022.7.
*** Function            :2dモデルを配列からすべて削除する．
*** Return              :void
*************************************************************************/
function delete_object2d(){
	for(let i=0; i<furniture2d.length; ++i){
		app.stage.removeChild(furniture2d[i]);
	}
	let length = furniture2d.length;
	for(let i=0; i<length; ++i){
		furniture2d.pop(0);
	}
	console.log("delete");
}

/***********************************************************************
*** Function Name	:make_object2d()
***	Designer		:山崎大晟
*** Date			:2022.
*** Function  		:最初に呼び出される関数．配列furnitureのtypeによって処理を分岐させる．
*** Return 			:void
*************************************************************************/

function make_object2d(){
	console.log("furniture.length = " + furniture.length);
	for(let i=0; i<furniture.length; ++i){
		if(furniture[i].type === "chair" || furniture[i].type === "desk" || furniture[i].type === "bed" || furniture[i].type === "bookshelf" || furniture[i].type === "drawers" || furniture[i].type === "other"){
			make_Rect2d(i,furniture[i].type);
		}
	}
}

/***********************************************************************
*** Function Name	:make_Rect2d(i)
***	Designer		:山崎大晟
*** Date			:2022.7
*** Function  		:デスク作成関数．objectはGroupで管理．Groupはfurniture3dに格納後sceneに追加
*** Return 			:void
*************************************************************************/
function make_Rect2d(i,type){
	let color;
	if(type == "chair") color = 0x8e4fff;
	if(type == "desk") color = 0xf1cc92;
	if(type == "bed") color = 0x5f442c;
	if(type == "bookshelf") color = 0x8e4200;
	if(type == "drawers") color = 0x369a34;
	if(type == "other") color = 0x000000;

	let group = new PIXI.Graphics()
	.beginFill(color, 0.8)
	.drawPolygon([furniture[i].x, furniture[i].y,
				furniture[i].x + furniture[i].width, furniture[i].y,
				furniture[i].x + furniture[i].width, furniture[i].y + furniture[i].height,
				furniture[i].x, furniture[i].y + furniture[i].height])
	.endFill();

	console.log("make");
	console.log("furniture");

	furniture2d.push(group);

	app.stage.addChild(furniture2d[furniture2d.length-1]);

	Edit(i,group);
}

/***********************************************************************
*** Function Name	:delete_furniture2d(x)
***	Designer		:山崎大晟
*** Date			:2022.7
*** Function  		:削除ボタンが押されたらその家具を削除し、家具を再配置する
*** Return 			:void
*************************************************************************/
function delete_furniture2d(x){
	delete_object2d();
	furniture.splice(x,1);
	make_floor2d();
	make_object2d();
}

/***********************************************************************
*** Function Name	:Initialization()
***	Designer		:山崎大晟
*** Date			:2022.7
*** Function  	    :編集画面に移るときの初期化を行う
*** Return 			:void
*************************************************************************/
function Initialization(){
	delete_object2d();
	make_floor2d();
	make_object2d();
}
