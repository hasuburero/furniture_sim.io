function Edit(i,group){ 
    group.x = 0;
    group.y = 0;
    
    group.interactive = true;
    group.buttonMode = true;
    
    group.on('pointerdown', onFurniturePointerDown)
                   .on('pointerup', onFurniturePointerUp);
    
    function onFurniturePointerDown(){
        group.on('pointermove', moveFurniture);
    }
    
    function moveFurniture(e){
        let position = e.data.getLocalPosition(app.stage);
    
        group.x = position.x;
        group.y = position.y;
    }
    
    function onFurniturePointerUp(){
        group.off('pointermove', moveFurniture);
        if(group.y>floor_y||group.x>floor_x){
            delete_furniture2d(i);
        }
    }
    
    
}