//var declaration
var canvas = document.getElementById('canvas'),
    ctx = canvas.getContext('2d'),
    width = canvas.width = window.innerWidth -30 ,
    height = canvas.height = window.innerHeight - 20;

var andBtn = document.getElementById('andBtn'),
    delBtn = document.getElementById('delBtn'),
    gate = [],
    connection = [0,0],
    connect_to_nodeA = false,
    connect_to_nodeB = false;
    nodeC_click = false;

var id_form = 0,
    id_to = 0;

let n = 0;

//buttons
andBtn.addEventListener('click', ()=>{
    let A = prompt('inputA')
    let B = prompt('inputB')
    gate.push(new AndGate(A,B))
    connection[n] = 0;
    draw()
})

gate.push(new AndGate(1,0))
gate.push(new AndGate(0,1))


//draw
window.onload = draw()                                                                    
function draw(){
    ctx.clearRect(0,0, width, height)
    for(let i = 0; i < gate.length; i++){
        gate[i].update();
    }

    for(let i = 0; i < gate.length - 1; i++){
        ctx.beginPath();
        ctx.moveTo(gate[connection[i]].nodeC_X(), gate[connection[i]].nodeC_Y())
        ctx.lineTo(gate[connection[i+1]].nodeB_X(), gate[connection[i+1]].nodeB_Y())
        ctx.stroke();
        ctx.closePath()
        
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
// let ;
canvas.addEventListener('click', e=>{
    for (let i = 0; i < gate.length; i++) {
        if (gate[i].nodeA_is_click(e.clientX, e.clientY)){
            console.log('NodeA', i);
            id_to = i
            n += 1;
            draw()

            }


        
        if (gate[i].nodeB_is_click(e.clientX, e.clientY)){
            console.log('NodeB', i);
            connect_to_nodeB = true;
            connection[n] = i
            n += 1;
            draw()




        }
        if (gate[i].nodeC_is_click(e.clientX, e.clientY)){
            console.log('NodeC', i);
            nodeC_click = true;
            connection[n] = i
            n += 1;
            draw()


        }
        

    }
})



// TODO:
// buat gerbang baru (OR,NOT, etc..)
// sambungkan antar node
// buat rangkaian flip-flop dan save dia 