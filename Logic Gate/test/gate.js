class AndGate{
    constructor(inputA, inputB){
        this.inputA = inputA;
        this.inputB = inputB;
        this.x = 10
        this.y = 10
        this.width = 100;
        this.height = 100;
    }

    update(){

        ctx.beginPath()
        ctx.rect(this.x, this.y, this.width,this.height);
        ctx.fillStyle = 'black'
        ctx.fill();

        //NodeA
        ctx.beginPath()
        ctx.arc(this.x, this.y + 20, 10, 0, 2 * Math.PI)
        ctx.fillStyle = (this.inputA == 1 ) ? 'green' : 'red' ;
        ctx.fill();

        //NodeB
        ctx.beginPath()
        ctx.arc(this.x, this.y + 80, 10, 0, 2 * Math.PI)
        ctx.fillStyle = (this.inputB == 1 ) ? 'green' : 'red' ;
        ctx.fill();

        //NodeReturn
        ctx.beginPath()
        ctx.arc(this.x + 100, this.y + 50, 10, 0, 2 * Math.PI)
        ctx.fillStyle = (this.inputA && this.inputB) ? 'green' : 'red' ;
        ctx.fill(); 

    }

    set_nodeA_val(val){
        this.inputA = val
    }

    set_nodeB_val(val){
        this.inputA = val
    }

    get_nodeC_val(){
        return(this.inputA && this.inputB)
    }

    posX(){
        return(this.x)
    }

    setX(pos){
        this.x = pos 
    }
    posY(){
        return(this.y)
    }

    setY(pos){
        this.y = pos 
    }

    is_click(x,y){
        if(  
            x <= this.x + this.width &&
            x >= this.x && 
            y <= this.y + this.height &&
            y >= this.y 
            ){
                return(true)
            }
    }

    nodeA_is_click(x,y){
        let dx = this.x - x;
        let dy = (this.y + 40) - y;

        let dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 10){
            return(true)
        }

        return(false)
            
    }

    nodeB_is_click(x,y){
        let dx = this.x - x;
        let dy = (this.y + 100) - y;

        let dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 10){
            return(true)
        }

        return(false)
            
    }

    nodeC_is_click(x,y){
        let dx = (this.x + 100) - x;
        let dy = (this.y + 70) - y;

        let dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 10){
            return(true)
        }

        return(false)
            
    }

    connected_to_nodeA(g2){
        ctx.beginPath()
        ctx.moveTo(this.x + 100, this.y + 50);
        ctx.lineTo(g2.posX(), g2.posY() + 20);
        ctx.stroke()
        ctx.closePath()
    }

    connected_to_nodeB(g2){
        ctx.beginPath()
        ctx.moveTo(this.x + 100, this.y + 50);
        ctx.lineTo(g2.posX(), g2.posY() + 80);
        ctx.stroke()
        ctx.closePath()
    }
   



}