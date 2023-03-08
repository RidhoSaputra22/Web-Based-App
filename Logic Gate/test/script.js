var canvas = document.getElementById('canvas'),
    ctx = canvas.getContext('2d'),
    width = canvas.width = window.innerWidth -30 ,
    height = canvas.height = window.innerHeight - 20;


var gate = [];
gate[0] = new AndGate(1,1);

window.onload = draw()

function draw(){
    ctx.clearRect(0,0, width, height)
    gate[0].update()
}

canvas.addEventListener('mousedown', e =>{
    if(gate[0].is_click(e.clientX, e.clientY)){
        canvas.addEventListener('mousemove', onMouseMove);
        canvas.addEventListener('mouseup', onMouseUp);
    }
});

function onMouseMove(e){
    gate[0].setX(e.clientX);
    gate[0].setY(e.clientY);
    draw()

}

function onMouseUp(e){
    canvas.removeEventListener('mousemove', onMouseMove);
    canvas.removeEventListener('mouseup', onMouseUp);

}