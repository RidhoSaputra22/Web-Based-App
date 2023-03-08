//var declaration
var canvas = document.getElementById('canvas'),
    ctx = canvas.getContext('2d'),
    width = canvas.width = window.innerWidth -30 ,
    height = canvas.height = window.innerHeight - 20;

var andBtn = document.getElementById('andBtn'),
    delBtn = document.getElementById('delBtn'),
    gate = [];
    // gateIdx = 0;

//buttons
andBtn.addEventListener('click', ()=>{
    let A = prompt('inputA')
    let B = prompt('inputB')

   gate.push(new AndGate(A,B))
   draw()
})



//draw
window.onload = draw()

function draw(){

    ctx.clearRect(0,0, width, height)
    for(let i = 0; i < gate.length; i++){
        gate[i].update();
    }
   
}

let click_idx = 0;
canvas.addEventListener('mousedown', e =>{
    for (let i = 0; i < gate.length; i++) {
        if(gate[i].is_click(e.clientX, e.clientY)){
            canvas.addEventListener('mousemove', onMouseMove);
            canvas.addEventListener('mouseup', onMouseUp);
            click_idx = i;
           

        }
        
    }
});

function onMouseMove(e){
    gate[click_idx].setX(e.clientX);
    gate[click_idx].setY(e.clientY);
    draw()

}

function onMouseUp(e){
    canvas.removeEventListener('mousemove', onMouseMove);
    canvas.removeEventListener('mouseup', onMouseUp);
}

let thing = true;
let idx;
canvas.addEventListener('click', e=>{
    for (let i = 0; i < gate.length; i++) {
        if (gate[i].nodeA_is_click(e.clientX, e.clientY)){
            console.log('NodeA', i);
            if(thing){
                gate[i].nodeGive_data(gate[i].nodeA_posX(), gate[i].nodeA_posY())
                thing = false;
            }else{
                gate[i].nodeGet_data(gate[i].nodeA_posX(), gate[i].nodeA_posY())
                gate[i].nodeA_set_value(gate[i-1].nodeC_value())

                
            }


        }
        if (gate[i].nodeB_is_click(e.clientX, e.clientY)){
            console.log('NodeB');
            if(thing){
                gate[i].nodeGive_data(gate[i].nodeB_posX(), gate[i].nodeB_posY())
                thing = false;
            }else{
                gate[i].nodeGet_data(gate[i].nodeB_posX(), gate[i].nodeB_posY())
            }
           

        }
        if (gate[i].nodeC_is_click(e.clientX, e.clientY)){
            console.log('NodeC');
            if(thing){
                gate[i].nodeGive_data(gate[i].nodeC_posX(), gate[i].nodeC_posY())
                thing = false;
            }else{
                gate[i].nodeGet_data(gate[i].nodeC_posX(), gate[i].nodeC_posY())
            }
           

        }
    }
})



// TODO:
// buat gerbang baru (OR,NOT, etc..)
// sambungkan antar node
// buat rangkaian flip-flop dan save dia 