let furniture = []; //furniture.push()で格納，furniture.push()で削除
let furniture3d = [];
let x;
let y;
let z;
let floor_x = 3000;
let floor_y = 2350;
let floor_z = 5000;
let startx = 0;
let starty = 0;
let startz = 0;
let width;
let height;
let depth;
let type;

const scene = new THREE.Scene();
//camera
let camera = new THREE.PerspectiveCamera(90, 1, 1, 50000);
let aspect;
let controls;
let canvasElement;
//furniture.push(new furniture_class(1400, 720, 550, "desk"));
//furniture[0].setx = 0;
//furniture[0].sety = 0;
//furniture[0].setz = 3000;
//furniture.push(new furniture_class(500, 500, 500, "chair"));
//furniture[0].setx = 800;
//furniture[0].sety = 0;
//furniture[0].setz = 3300;

