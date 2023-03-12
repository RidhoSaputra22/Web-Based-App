var canvas = document.getElementById('canvas'),
    ctx = canvas.getContext('2d'),
    width = canvas.width = window.innerWidth -30 ,
    height = canvas.height = window.innerHeight - 20;


var gate = [];
gate[0] = new AndGate(1,1);
gate[1] = new AndGate(0,1);
gate[2] = new AndGate(1,1);
gate[3] = new AndGate(0,1);

var connection = [],
    n = 0,
    connections = [[]],
    connections_not_empty = false,
    nodeA_clicked = false,
    nodeB_clicked = false;

window.onload = draw()

// setInterval(draw(), 24)

function draw(){
    ctx.clearRect(0,0, width, height)
    gate[0].update()
    gate[1].update()
    gate[2].update()
    gate[3].update()

    ctx.beginPath()
    ctx.font = "30px Arial";
    ctx.fillText("0", gate[0].posX() + 30, gate[0].posY() + 49);
    ctx.font = "30px Arial";
    ctx.fillText("1", gate[1].posX() + 30, gate[1].posY() + 49);
    ctx.font = "30px Arial";
    ctx.fillText("2", gate[2].posX() + 30, gate[2].posY() + 49);
    ctx.font = "30px Arial";
    ctx.fillText("3", gate[3].posX() + 30, gate[3].posY() + 49);

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
let clickId = 0;
canvas.addEventListener('mousedown', e =>{
    if(gate[0].is_click(e.clientX, e.clientY)){
        canvas.addEventListener('mousemove', onMouseMove);
        canvas.addEventListener('mouseup', onMouseUp);
        clickId = 0
    }
    if(gate[1].is_click(e.clientX, e.clientY)){
        canvas.addEventListener('mousemove', onMouseMove);
        canvas.addEventListener('mouseup', onMouseUp);
        clickId = 1;
    }
    if(gate[2].is_click(e.clientX, e.clientY)){
        canvas.addEventListener('mousemove', onMouseMove);
        canvas.addEventListener('mouseup', onMouseUp);
        clickId = 2
    }
    if(gate[3].is_click(e.clientX, e.clientY)){
        canvas.addEventListener('mousemove', onMouseMove);
        canvas.addEventListener('mouseup', onMouseUp);
        clickId = 3;
    }
    

});

function onMouseMove(e){
    gate[clickId].setX(e.clientX);
    gate[clickId].setY(e.clientY);
    gate[clickId].setX(e.clientX);
    gate[clickId].setY(e.clientY);
    gate[clickId].setX(e.clientX);
    gate[clickId].setY(e.clientY);
    gate[clickId].setX(e.clientX);
    gate[clickId].setY(e.clientY);
    
    draw()

}

function onMouseUp(e){
    canvas.removeEventListener('mousemove', onMouseMove);
    canvas.removeEventListener('mouseup', onMouseUp);

}
canvas.addEventListener('click', pickNode)
let k = 0;
function pickNode(e){
    for (let i = 0; i < gate.length; i++) {
        if (gate[i].nodeA_is_click(e.clientX, e.clientY)){
            console.log('NodeA', i);
            connection[n] = i
            console.log(connection);
            n += 1;
            connection[n] = 0

            nodeA_clicked = true;
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