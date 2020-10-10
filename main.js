var canvas=new fabric.Canvas('myCanvas');
var hammer_X=10;
var hammer_Y=10;
var block_width=30;
var block_height=30;
var hammer_object="";
var block_object="";

function player_update(){
    fabric.Image.fromURL("hammer.png",function(Img){
    hammer_object=Img;
    hammer_object.scaleToWidth(150);
    hammer_object.scaleToHeight(140);
    hammer_object.set({
        top:hammer_Y,
        left:hammer_X
    });
    canvas.add(hammer_object);
});

}

function new_image(getImage){
    fabric.Image.fromURL(getImage,function(Img){
    block_object=Img;
    block_object.scaleToHeight(block_height);
    block_object.scaleToWidth(block_width);
    block_object.set({
        top:hammer_Y,
        left:hammer_X
    });
    canvas.add(block_object);
});
}

window.addEventListener("keydown", key_pressed);

function key_pressed(e){
    var key_name=e.keyCode;
    console.log(key_name);

    if (e.shiftKey == true && key_name == '80'){
        console.log("Shift and P have been pressed");
        block_height=block_height+10;
        block_width=block_width+10;
        document.getElementById("current_width").innerHTML=block_width;
        document.getElementById("current_height").innerHTML=block_height;
    }

    if (e.shiftKey == true && key_name == '77'){
        console.log("Shift and M have been pressed");
        block_height=block_height-10;
        block_width=block_width-10;
        document.getElementById("current_width").innerHTML=block_width;
        document.getElementById("current_height").innerHTML=block_height;
    }

    if (key_name == '38'){
        Up();
        console.log("Up");
    }

    if (key_name == '340'){
        Down();
        console.log("Down");
    }
    
    if (key_name == '39'){
        Right();
        console.log("Right");
    }

    if (key_name == '37'){
        Left();
        console.log("Left");
    }

//Left Hand
    if (key_name == '76'){
        new_image('lefthand.png');
        console.log("Left Hand-L");
    }

//Right Hand
if (key_name == '82'){
    new_image('right hand.png');
    console.log("Right Hand-R");
}

//Left Leg
if (key_name == '71'){
    new_image('left leg.png');
    console.log("Left Leg-G");
}

//Right Leg
if (key_name == '83'){
    new_image('right leg.png');
    console.log("Right Leg-S");
}

//Head
if (key_name == '70'){
    new_image('face.png');
    console.log("Face-F");
}

//Body
if (key_name == '66'){
    new_image('body.png');
    console.log("Body-B");
}
        
}

