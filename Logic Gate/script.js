var canvas = document.getElementById('canvas'),
    ctx = canvas.getContext('2d'),
    width = canvas.width = window.innerWidth -30 ,
    height = canvas.height = window.innerHeight - 20;

var andBtn = document.getElementById('andBtn'),
    gate = [],
    gateIdx = 0;


andBtn.addEventListener('click', ()=>{
    let A = prompt('inputA')
    let B = prompt('inputB')

    gate[gateIdx] = new GateAnd(A,B)
    gateIdx++;
})
   


window.onload = () => {
   refresh()
};

let is_Dragging = false;
let tempI = 0
function refresh(){
    ctx.clearRect(0,0, width, height)
    for(let i = 0; i < gate.length; i++){
        gate[i].update()
        canvas.addEventListener('mousedown', e => {
           if(gate[i].getClick(e.clientX, e.clientY)){
            tempI = i;
            is_Dragging = true;
           }
        })
        canvas.addEventListener('mouseup', e => {
            if (is_Dragging){
                gate[tempI].setX(e.clientX)
                gate[tempI].setY(e.clientY)
                is_Dragging = false
            }
        })
    }

requestAnimationFrame(refresh)
}

// TODO:
// buat gerbang baru (OR,NOT, etc..)
// sambungkan antar node
// buat rangkaian flip-flop dan save dia 