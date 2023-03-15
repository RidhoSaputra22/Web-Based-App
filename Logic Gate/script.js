// Main Script
var canvas = document.getElementById('canvas'),
    ctx = canvas.getContext('2d'),
    width = canvas.width = window.innerWidth -30 ,
    height = canvas.height = window.innerHeight - 20;

var andBtn = document.getElementById('andBtn'),
    delBtn = document.getElementById('delBtn'),
    inputBtn = document.getElementById('inputBtn');
    outputBtn = document.getElementById('outputBtn');


var gate = [],
    connection = [],
    connections = [[]],
    connections_not_empty = false,
    n = 0;

//buttons
andBtn.addEventListener('click', ()=>{
    gate.push(new Gate('and'))
    connection[n] = 0;
    draw()
})

inputBtn.addEventListener('click', ()=>{
    gate.push(new Gate('input'))
    connection[n] = 0;
    draw()
})

outputBtn.addEventListener('click', ()=>{
    gate.push(new Gate('output'))
    connection[n] = 0;
    draw()
})

//Gate Test
gate.push(new Gate('and'))
gate.push(new Gate('or'))


//draw
window.onload = draw()                                                                    
function draw(){
    // Update every gate
    ctx.clearRect(0,0, width, height)
    for(let i = 0; i < gate.length; i++){
        gate[i].update();
    }

    // Show the index for every gate
    for(let i = 0; i < gate.length ; i++){
        ctx.beginPath()
        ctx.font = "30px Arial";
        ctx.fillStyle = 'yellow'
        ctx.fillText(i, gate[i].posX() + 30, gate[i].posY() + 49);        
    }

    // this code make share data between gate possible (Dont Interupt This!!)
    if(connections_not_empty){
        for(let i = 0; i < connections.length; i++){
            for(let j = 0; j < 1 ; j++){
                if(connections[i][2] == 0){
                    gate[connections[i][j]].connected_to_nodeA(gate[connections[i][j+1]])
                gate[connections[i][j + 1]].set_nodeA_val(gate[connections[i][j]].get_nodeC_val())
                }else{
                    gate[connections[i][j]].connected_to_nodeB(gate[connections[i][j+1]])
                gate[connections[i][j + 1]].set_nodeB_val(gate[connections[i][j]].get_nodeC_val())
                    
                }

                
            }
        }
    }
}

// Check every gate if it get clicked
let clickId = 0;
canvas.addEventListener('mousedown', e =>{
    for (let i = 0; i < gate.length; i++) {
        if(gate[i].is_click(e.clientX, e.clientY)){
            canvas.addEventListener('mousemove', onMouseMove);
            canvas.addEventListener('mouseup', onMouseUp);
            clickId = i;
        }
    }
});

function onMouseMove(e){
    gate[clickId].setX(e.clientX);
    gate[clickId].setY(e.clientY);
    draw()

}

function onMouseUp(e){
    canvas.removeEventListener('mousemove', onMouseMove);
    canvas.removeEventListener('mouseup', onMouseUp);
}

// Check every node if it get clicked
canvas.addEventListener('click', pickNode)
let k = 0;
let s = 0;
function pickNode(e){
    for (let i = 0; i < gate.length; i++) {
        if (gate[i].nodeA_is_click(e.clientX, e.clientY)){
            console.log('NodeA', i);
            if(gate[i].get_type() == 'input'){
                gate[i].set_nodeA_val(s)
                if(s == 0){ s = 1} else { s = 0 }
                draw()
            }else{
                connection[n] = i
                console.log(connection);
                n += 1;
                connection[n] = 0
    
                nodeA_clicked = true;
            }
            draw()
        }
        if (gate[i].nodeB_is_click(e.clientX, e.clientY)){
            console.log('NodeB', i);
            connection[n] = i
            console.log(connection);
            n += 1;
            connection[n] = 1

            //nodeB_clicked = true;
            draw()

        }
        if (gate[i].nodeC_is_click(e.clientX, e.clientY)){
            console.log('NodeC', i);
            connection[n] = i
            console.log(connection);
            n += 1;

            
        } 

    }

    if (n == 2 ){
        connections[k] = connection
        console.log(connections);
        k += 1;
        n = 0;
        connection = []
        connections_not_empty = true;
        draw()
    }
}



// TODO:
// Buat Sebuah logika sederhana lalu save di local file 