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
