var canvas = document.getElementById('canvas'),
    ctx = canvas.getContext('2d'),
    width = canvas.width = window.innerWidth -30,
    height = canvas.height = window.innerHeight -30;

var gate = []

gate[0] = new Gate(1,0, 100, 10)
gate[1] = new Gate(1,1, 350, 10)



window.onload = () => {
    console.log('test');
    draw()


}

function draw(){
    gate[0].update()
    gate[1].update()
    connectDots()

}


canvas.addEventListener('mousedown', nodeClicked)

let draw_line = false,
    d1x, d1y,
    d2x, d2y;
function nodeClicked(e){
   for (let i = 0; i < gate.length; i++) {
    // if(gate[i].nodeA_is_collide(e.clientX, e.clientY)){
    //     if(!draw_line){
    //         d1x = gate[i].nodeA_posX();
    //         d1y = gate[i].nodeA_posY();
    //         draw()
    //         console.log('startA');
    //         draw_line = true;
    //     }else{
    //         d2x = gate[i].nodeA_posX();
    //         d2y = gate[i].nodeA_posY()
    //         draw()
    //         draw_line = false;
    //         console.log('endA');

    //     }
    // }

    // if(gate[i].nodeB_is_collide(e.clientX, e.clientY)){
    //     if(!draw_line){
    //         d1x = gate[i].nodeB_posX();
    //         d1y = gate[i].nodeB_posY();
    //         draw()
    //         draw_line = true;
    //         console.log('startB');
    //     }else{
    //         d1x = gate[i].nodeB_posX();
    //         d1y = gate[i].nodeB_posY();
    //         draw()
    //         draw_line = false;
    //         console.log('endB');
    //     }
    // }

    // if(gate[i].nodeC_is_collide(e.clientX, e.clientY)){
    //     if(!draw_line){
    //         d1x = gate[i].nodeC_posX();
    //         d1y = gate[i].nodeC_posY();
    //         draw()
    //         draw_line = true;
    //         console.log('startC');
    //     }else{
    //         d1x = gate[i].nodeC_posX();
    //         d1y = gate[i].nodeC_posY();
    //         draw()
    //         draw_line = false;
    //         console.log('endC');
    //     }
    // }

    if(gate[i].nodeC_is_collide(e.clientX, e.clientY)){
        d1x = gate[i].nodeC_posX();
        d1y = gate[i].nodeC_posY();
        console.log("C");
    }

    if(gate[i].nodeA_is_collide(e.clientX, e.clientY)){
        d2x = gate[i].nodeA_posX();
        d2y = gate[i].nodeA_posY();
        console.log("A");
        draw()
    }

    if(gate[i].nodeB_is_collide(e.clientX, e.clientY)){
        d2x = gate[i].nodeB_posX();
        d2y = gate[i].nodeB_posY();
        console.log("B");
        draw()
    }
    
   }
}

function connectDots(){
    ctx.beginPath();
    ctx.moveTo(d1x, d1y)
    ctx.lineTo(d2x, d2y)
    ctx.lineWidth = 5;
    ctx.strokeStyle = '#777'
    ctx.stroke();
    ctx.closePath()

}

