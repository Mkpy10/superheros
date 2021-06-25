var canvas = new fabric.Canvas('myCanvas');

player_X = 300;
player_Y = 500;

Block_width = 30;
Block_height = 30;

var player = ""; 
var blocks = "";

function Player_Update(){
    fabric.Image.fromURL("player.png", function(Img){

        player = Img;

        
        player.scaleToWidth(100);
        player.scaleToHeight(500);
        player.set({
            top : player_Y, left : player_X });
            canvas.add(player);
    } );
}