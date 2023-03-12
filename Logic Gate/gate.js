class AndGate{
    constructor(inputA, inputB){
        this.inputA = inputA;
        this.inputB = inputB;
        this.x = 0;
        this.y = 0;
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

        //NodeC
        ctx.beginPath()
        ctx.arc(this.x + 100, this.y + 50, 10, 0, 2 * Math.PI)
        ctx.fillStyle = (this.inputA && this.inputB) ? 'green' : 'red' ;
        ctx.fill(); 

      

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

    nodeA_X(){
        return(this.x)
    }

    nodeA_Y(){
        return(this.y + 40)
    }

    nodeB_X(){
        return(this.x)
    }

    nodeB_Y(){
        return(this.y + 100)
    }

    nodeC_X(){
        return(this.x + 100)
    }

    nodeC_Y(){
        return(this.y + 70)
    }
    
    nodeA_value(){
        return(this.inputA)
    }

    nodeB_value(){
        return(this.inputB)
    }

    nodeC_value(){
        return(this.inputA && this.inputB)
    }

    nodeA_set_value(val){
        this.inputA = val;
    }

    nodeB_set_value(val){
        this.inputB = val;
    }

    nodeGet_data(x,y){
        ctx.lineTo(x,y)
        ctx.stroke()
    }

    nodeGive_data(x,y){
        ctx.beginPath();
        ctx.moveTo(x,y)
    }

    to_nodeA(x,y){
        ctx.beginPath()
        ctx.moveTo(x,y)
        ctx.lineTo(this.nodeA_X(), this.nodeA_Y())
        ctx.closePath()
    }

    to_nodeB(x,y){
        ctx.beginPath()
        ctx.moveTo(x,y)
        ctx.lineTo(this.nodeB_X(), this.nodeB_Y())
        ctx.closePath()
    }
   



}