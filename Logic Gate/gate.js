class GateAnd{
    constructor(inputA, inputB){
        this.inputA = inputA;
        this.inputB = inputB;
        this.x = Math.floor(Math.random() * 310);
        this.y =  Math.floor(Math.random() * 310);
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

    getClick(x,y){
        if(  
            x <= this.x + this.width &&
            x >= this.x && 
            y <= this.y + this.height &&
            y >= this.y 
            ){
                return(true)
            }
    }
   



}