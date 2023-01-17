var canvas = document.getElementById('gamefield');
var context = canvas.getContext('2d');
var fieldSize = 600;
var currentStep = [];
var stepNumber = 0;
var timer;

canvas.onclick = function(event){
    var x = event.offsetX;
    var y = event.offsetY;
    x = Math.floor(x/10);
    y = Math.floor(y/10);
    currentStep [y][x] = 1;
    drawField();
}

function goLife() {
    for (var i = 0; i < fieldSize/10; i++){
        currentStep [i] = [];
        for (var j = 0; j < fieldSize/10; j++){
            currentStep[i][j] = 0;
        }
    }
    drawGrid();
}

function drawField(){
    context.fillStyle="#3bed0e";
    for (var i = 0; i < fieldSize/10; i++){
        for (var j = 0; j < fieldSize/10; j++){
            if (currentStep[i][j] == 1){
                context.fillRect(j*10+1, i*10+1, 8, 8);
            }
        }
    }
}

//Here we coding drawing Grid
    for (var x = 10; x < fieldSize; x += 10) {
        context.moveTo(x, 0);
        context.lineTo(x, fieldSize);
      }
      
    for (var y = 10; y < fieldSize; y += 10) {
        context.moveTo(0, y);
        context.lineTo(fieldSize, y);
      }

function drawGrid(){     
      context.strokeStyle = "#a7ad9c";
      context.stroke();
}

function startLife(){
    var nextStep = [];
    for (var i = 0; i < fieldSize/10; i++){
        nextStep[i] = [];
        for (var j = 0; j < fieldSize/10; j++){
            var neighbors = 0;
            if (currentStep[fpm(i)-1][j] == 1) neighbors++;
            if (currentStep[i][fpp(j)+1] == 1) neighbors++;
            if (currentStep[fpp(i)+1][j] == 1) neighbors++;
            if (currentStep[i][fpm(j)-1] == 1) neighbors++;
            if (currentStep[fpm(i)-1][fpp(j)+1] == 1) neighbors++;
            if (currentStep[fpp(i)+1][fpp(j)+1] == 1) neighbors++;
            if (currentStep[fpp(i)+1][fpm(j)-1] == 1) neighbors++;
            if (currentStep[fpm(i)-1][fpm(j)-1] == 1) neighbors++;
            if (currentStep[i][j] == 1 && (neighbors == 2 || neighbors == 3)) {
                nextStep[i][j] = 1; 
            } else if (currentStep[i][j] == 1 && (neighbors < 2 || neighbors > 3)) {
                nextStep[i][j] = 0; 
            } else if (currentStep[i][j] == 0 && neighbors == 3) {
                nextStep[i][j] = 1;
            } else {
                nextStep[i][j] = 0;
            }
        }
    }
    currentStep = nextStep;
    context.clearRect(0, 0, fieldSize, fieldSize);
    drawGrid();
    drawField();   
    stepNumber++;
    document.getElementById('count').innerHTML = stepNumber;
    timer = setTimeout(startLife, 100);
}

function fpm(i){
    if(i == 0) return fieldSize/10;
    else return i;
}

function fpp(i){
    if(i == fieldSize/10-1) return -1;
    else return i;
}

goLife();

document.getElementById('start').onclick = startLife;
