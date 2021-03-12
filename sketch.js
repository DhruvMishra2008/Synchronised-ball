var ball;
var database;
var locationRef;
var position;


function setup(){
    createCanvas(500,500);
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";


    database  = firebase.database();
    
    locationRef = database.ref("Ball/Position");

    locationRef.on("value",readPosition);

}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        changePosition(-5,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        changePosition(5,0);
    }
    else if(keyDown(UP_ARROW)){
        changePosition(0,-5);
    }
    else if(keyDown(DOWN_ARROW)){
        changePosition(0,+5);
    }
    drawSprites();
}

function readPosition(data){
    position = data.val();
    ball.x = position.X;
    ball.y = position.Y
}

function changePosition(x,y){
database.ref("Ball/Position").set({
    X : ball.x + x,
    Y : ball.y + y
})

    //ball.x = ball.x + x;
   // ball.y = ball.y + y;
}
