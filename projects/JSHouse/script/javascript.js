var canvas = document.getElementById("house");
var ctx = canvas.getContext("2d");
var change = 0;

//sky
function background() {
    ctx.beginPath();
    var sky = ctx.createLinearGradient(300, 188, 0, 0);
    sky.addColorStop(0, "#5c9eff");
    sky.addColorStop(0.38, "#92beff");
    sky.addColorStop(0.69, "#c9deff");
    ctx.fillStyle = sky;
    ctx.fillRect(0, 0, 300, 188);  
    ctx.closePath();
    ctx.fill();
}

//the sun
function yellowSun() {
    ctx.beginPath();
    ctx.fillStyle = "yellow";
    ctx.arc(0, 0, 50, 0, 2 * Math.PI);
    ctx.fill();
    ctx.closePath();
}

//green lawn
function ground() {
    ctx.beginPath();
    var ground_color = ctx.createLinearGradient(0, 300, 300, 188);
    ground_color.addColorStop(0, "#e3f6be");
    ground_color.addColorStop(0.02, "#9ccd78");
    ground_color.addColorStop(0.03, "#9ccd78");
    ground_color.addColorStop(0.09, "#afdc98");
    ground_color.addColorStop(0.15, "#afdc98");
    ground_color.addColorStop(0.42, "#add77b");
    ground_color.addColorStop(0.68, "#add77b");
    ground_color.addColorStop(0.69, "#97c869");
    ground_color.addColorStop(0.69, "#97c869");
    ground_color.addColorStop(0.85, "#caeba1");
    ground_color.addColorStop(1, "#caeba1");
    ctx.fillStyle = ground_color;
    ctx.fillRect(0, 188, 300, 300);
    ctx.closePath();
    ctx.fill();
}

//wall of the house
function wall() {
    
    //window wall
    ctx.beginPath();
    ctx.moveTo(94, 237);
    ctx.lineTo(94, 145);
    ctx.lineTo(58, 75);
    ctx.lineTo(33, 123);
    ctx.lineTo(33, 210);
	var window_wall_grd = ctx.createLinearGradient(58, 75, 94, 237);
    window_wall_grd.addColorStop(0, "#B8C8C1");
    window_wall_grd.addColorStop(1, "#DBE4EB");
    ctx.fillStyle = window_wall_grd;
    ctx.fill();
    
    ctx.beginPath();
    ctx.moveTo(33,124);
    ctx.lineTo(93,145);
    ctx.strokeStyle = "#838485";
    ctx.lineWidth = "0.5";
    ctx.stroke();
    
    ctx.beginPath();
    ctx.moveTo(32,124);
    ctx.lineTo(92,145);
    ctx.strokeStyle = "#FFFFFF";
    ctx.lineWidth = "0.5";
    ctx.stroke();
                
    //front door wall
    ctx.beginPath();
    ctx.moveTo(102, 152);
    ctx.lineTo(102, 237);
    ctx.lineTo(200, 213);
    ctx.lineTo(200, 174);
    ctx.lineTo(209, 163);
    ctx.lineTo(220, 158);
    ctx.lineTo(220, 133);
	var wall_grd = ctx.createLinearGradient(102, 152, 220, 133);
    wall_grd.addColorStop(0, "#CCD5DC");
    wall_grd.addColorStop(1, "#97A19E");
    ctx.fillStyle = wall_grd;
    ctx.fill();
}

//house frame on the buttom
function buttom_frame() {
    
    //left
    ctx.beginPath();
    ctx.moveTo(29, 209);
    ctx.lineTo(29, 221);
    ctx.lineTo(98, 251);
    ctx.lineTo(98, 238);
	var left_grd = ctx.createLinearGradient(29, 221, 98, 238);
    left_grd.addColorStop(0, "#838485");
    left_grd.addColorStop(1, "#B0A6A4");
    ctx.fillStyle = left_grd;	
    ctx.fill();
    
    //right
    ctx.beginPath();
    ctx.moveTo(98, 251);
    ctx.lineTo(98, 238);
    ctx.lineTo(200, 213);
    ctx.lineTo(200, 225);   
	var right_grd = ctx.createLinearGradient(98, 238, 200, 225);
    right_grd.addColorStop(0, "#838485");
    right_grd.addColorStop(1, "#B0A6A4");
    ctx.fillStyle = right_grd;	
    ctx.fill();
}

//vertical house frame 
function vertical_frame() {
    
    //left frame
    ctx.beginPath();
    ctx.moveTo(29, 209);
    ctx.lineTo(33, 211);
    ctx.lineTo(33, 117);
    ctx.lineTo(29, 120); 
	ctx.fillStyle = "#838485";
    ctx.fill();
    
    //middle frame
    ctx.beginPath();
    ctx.moveTo(94, 237);
    ctx.lineTo(94, 147.5);
    ctx.lineTo(102, 152);
    ctx.lineTo(102, 240);  
	ctx.fillStyle = "#B0A6A4";	
    ctx.fill();
    
    ctx.beginPath();
    ctx.moveTo(98, 152);
    ctx.lineTo(98, 239);
    ctx.lineTo(102, 239);
    ctx.lineTo(102, 152);      
	ctx.fillStyle = "#838485";	
    ctx.fill();
    
    //right frame
    ctx.beginPath();
    ctx.moveTo(225, 128);
    ctx.lineTo(225, 158);
    ctx.lineTo(220, 158);
    ctx.lineTo(219, 130);
	ctx.fillStyle = "#838485";
    ctx.fill();
}

function roof() {
    
    //front-roof 
    ctx.beginPath();
    ctx.moveTo(56, 71);
    ctx.lineTo(190, 53);
    ctx.lineTo(235, 130);
    ctx.lineTo(98, 152);
    ctx.closePath();
	var roof_grd = ctx.createLinearGradient(190, 53, 98, 152);
    roof_grd.addColorStop(0, "#820709");
    roof_grd.addColorStop(1, "#E5282E");
    ctx.fillStyle = roof_grd; 
    ctx.fill();
    
    //left-roof
    ctx.beginPath();
    ctx.moveTo(57, 70);
    ctx.lineTo(25, 127);
    ctx.lineTo(30, 129);
    ctx.lineTo(62, 72);
    ctx.closePath();
	ctx.fillStyle = "#BB0207";
    ctx.fill();
}

function garage() {
    
    //garage frame
    ctx.beginPath();
    ctx.moveTo(205, 228);
    ctx.lineTo(205, 175);
    ctx.lineTo(216, 162);
    ctx.lineTo(272, 150);
    ctx.lineTo(280, 160);
    ctx.lineTo(280, 207);   
	ctx.fillStyle = "#A3A4A5";	
    ctx.fill();
                
    //top of garage
    ctx.beginPath();
    ctx.moveTo(225, 157);
    ctx.lineTo(211, 160);
    ctx.lineTo(200, 174);
    ctx.lineTo(200, 225);                
    ctx.lineTo(205, 228);                
    ctx.lineTo(205, 175);  
    ctx.lineTo(216, 162);                
    ctx.lineTo(270, 150);              
    ctx.lineTo(225, 138);
	ctx.fillStyle = "#667071";
    ctx.fill(); 
}

function door() {
    
    //door
    ctx.beginPath();
    ctx.moveTo(150, 238);
    ctx.lineTo(150, 188);
    ctx.lineTo(175, 183);
    ctx.lineTo(175, 232);
	var door_grd = ctx.createLinearGradient(150, 188, 175, 232);
    door_grd.addColorStop(0, "#6F675A");
    door_grd.addColorStop(1, "#353229");
    ctx.fillStyle = door_grd;
    ctx.fill();
    
    //doorknob      
    ctx.beginPath();
    ctx.arc(170, 211, 2, 0, 1.5*Math.PI);
	ctx.fillStyle = "grey";
    ctx.fill();	
    
    //garage door
    ctx.beginPath();
    ctx.moveTo(215, 175);
    ctx.lineTo(215, 225);
    ctx.lineTo(272, 210);
    ctx.lineTo(272, 160);
	ctx.fillStyle = "#D0D1D2";
    ctx.fill();
    
    for(var i=0; i<50; i+=5){
        ctx.beginPath();
        ctx.strokeStyle = "#FFFFFF";
        ctx.lineWidth = "0.5";
        ctx.moveTo(215, 180+i);
        ctx.lineTo(272, 165+i);
        ctx.stroke();
    }
}

function chimney() {
    
    //one side
    ctx.beginPath();
    ctx.moveTo(29, 125);
    ctx.lineTo(29, 64);
    ctx.lineTo(49, 70);
    ctx.lineTo(58, 118);
    var chimney_grd = ctx.createLinearGradient(49, 70, 29, 64);
    chimney_grd.addColorStop(0, "#87988D");
    chimney_grd.addColorStop(1, "#BBC5C6");
    ctx.fillStyle = chimney_grd;
    ctx.fill();
    
    //another side      
    ctx.beginPath();
    ctx.moveTo(49, 70);
    ctx.lineTo(58, 64);
    ctx.lineTo(58, 118);
    ctx.lineTo(49, 118);
    ctx.fillStyle = "#B8C2C3";
    ctx.fill();
    
    //top of chimney 
    ctx.beginPath();
    ctx.moveTo(29, 64);
    ctx.lineTo(48, 70);
    ctx.lineTo(49, 70);
    ctx.lineTo(58, 64);
    ctx.lineTo(39, 59);
    ctx.lineWidth = 3;	
    ctx.strokeStyle = "#DBE3EA";
    ctx.stroke();
	var top_chimney_grd = ctx.createLinearGradient(49, 70, 38, 59);
    top_chimney_grd.addColorStop(0, "#808080");
    top_chimney_grd.addColorStop(0.7, "#C0C0C0");
    ctx.fillStyle = top_chimney_grd;
    ctx.fill();
}

function windows() {
    
    //left window  
    ctx.beginPath();
    ctx.moveTo(42, 135);
    ctx.lineTo(42, 201);
    ctx.lineTo(56, 208);
    ctx.lineTo(56, 140);
    var left_window_grd = ctx.createLinearGradient(42, 135, 56, 208);
    left_window_grd.addColorStop(0, "#D9E9FA"); 
    left_window_grd.addColorStop(1, "#FFFFFF");
    ctx.fillStyle = left_window_grd; 
    ctx.fill();
    
    //frame    
    ctx.beginPath();
    ctx.moveTo(48, 137);
    ctx.lineTo(48, 204);
    ctx.moveTo(42, 168);
    ctx.lineTo(56, 173);
    ctx.strokeStyle = "#85888A";
    ctx.lineWidth = "1";
    ctx.stroke();
    
    //right window
    ctx.beginPath();
    ctx.moveTo(69, 145);
    ctx.lineTo(69, 213);
    ctx.lineTo(83, 219);
    ctx.lineTo(83, 150);
    var right_window_grd = ctx.createLinearGradient(69, 145, 83, 219);
    right_window_grd.addColorStop(0, "#D9E9FA");
    right_window_grd.addColorStop(1, "#FFFFFF");
    ctx.fillStyle = right_window_grd;
    ctx.fill();
    
    //frame   
    ctx.beginPath();
    ctx.moveTo(76, 148);
    ctx.lineTo(76, 216);
    ctx.moveTo(69, 178);
    ctx.lineTo(83, 183);
    ctx.strokeStyle = "#85888A";
    ctx.lineWidth = "1";
    ctx.stroke();
}

//one smoke
function smoke() {
    ctx.beginPath();
    ctx.arc(64, 41, 8, 0, 2 * Math.PI);
    ctx.fillStyle = "gray";
    ctx.fill();
    ctx.arc(79, 41, 8, 0, 2 * Math.PI);
    ctx.fill();
    ctx.arc(72, 38, 9, 0, 2*Math.PI);
    ctx.fill();
    ctx.closePath();
    
}

//different size and position of smoke
function movedSmoke() {
    ctx.beginPath();
    ctx.arc(109, 29, 12, 0, 2 * Math.PI);
    ctx.fillStyle = "#ACACAC";
    ctx.fill();
    ctx.arc(124, 29, 12, 0, 2 * Math.PI);
    ctx.fill();
    ctx.arc(117, 26, 13, 0, 2 * Math.PI);
    ctx.fill();
    ctx.closePath();
}

//farther smoke with bigger size 
function movedSmokeAgain() {
    ctx.beginPath();
    ctx.arc(168, 22, 15, 0, 2 * Math.PI);
    ctx.fillStyle = "#ACACAC";
    ctx.fill();
    ctx.arc(183, 22, 15, 0, 2 * Math.PI);
    ctx.fill();
    ctx.arc(176, 19, 16, 0, 2 * Math.PI);
    ctx.fill();
    ctx.closePath();
}

//set to show one of the somke
function movingSmoke() {
    ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
    if (change == 0) {
        draw();
        smoke();
        change += 1;
    } else if(change == 1) {
        draw();
        movedSmoke();
        change += 1;
    } else if(change == 2){
        draw();
        movedSmokeAgain();
        change = 0;
    }
}

//main function 
function draw() {
    ground();
    background();
    yellowSun();
    chimney();
    wall();
    vertical_frame();
    buttom_frame();
    roof();
    garage();
    door();  
    windows();
}

//set inerval to call movingSmoke function every 500ms
var interval = setInterval(movingSmoke, 700);
