class Gate{
    constructor(type){
        this.inputA = 1;
        this.inputB = 0;
        this.type = type;
        this.x = 10
        this.y = 10
        this.width = 130;
        this.height = 100;
    }

    update(){
        if(this.type == 'and') this.type_and();
        if(this.type == 'or') this.type_or();
        if(this.type == 'not')this.type_not();
        if(this.type == 'input') this.type_input();
        if(this.type == 'output') this.type_output();

        
    }

    type_and(){
        ctx.beginPath()
        ctx.rect(this.x, this.y, this.width,this.height);
        ctx.fillStyle = 'black'
        ctx.fill();
        ctx.closePath()


        ctx.beginPath();
        ctx.font = this.width/5 + "px Arial";
        ctx.fillStyle = 'red'
        ctx.fillText("AND",this.x + 60, this.y + 70);
        ctx.fill()
        ctx.closePath()

        //NodeA
        ctx.beginPath()
        ctx.arc(this.x, this.y + 20, 10, 0, 2 * Math.PI)
        ctx.fillStyle = (this.inputA == 1 ) ? 'green' : 'red' ;
        ctx.fill();
        ctx.closePath()


        //NodeB
        ctx.beginPath()
        ctx.arc(this.x, this.y + 80, 10, 0, 2 * Math.PI)
        ctx.fillStyle = (this.inputB == 1 ) ? 'green' : 'red' ;
        ctx.fill();
        ctx.closePath()


        //NodeReturn
        ctx.beginPath()
        ctx.arc(this.x + this.width, this.y + 50, 10, 0, 2 * Math.PI)
        ctx.fillStyle = (this.inputA && this.inputB) ? 'green' : 'red' ;
        ctx.fill(); 
        ctx.closePath()


    }
    type_or(){
        ctx.beginPath()
        ctx.rect(this.x, this.y, this.width,this.height);
        ctx.fillStyle = 'black'
        ctx.fill();
        ctx.closePath()

        ctx.beginPath();
        ctx.font = this.width/5+"px Arial";
        ctx.fillStyle = 'red'
        ctx.fillText("OR",this.x + 60, this.y + 70);
        ctx.fill()
        ctx.closePath()

        //NodeA
        ctx.beginPath()
        ctx.arc(this.x, this.y + 20, 10, 0, 2 * Math.PI)
        ctx.fillStyle = (this.inputA == 1 ) ? 'green' : 'red' ;
        ctx.fill();
        ctx.closePath()


        //NodeB
        ctx.beginPath()
        ctx.arc(this.x, this.y + 80, 10, 0, 2 * Math.PI)
        ctx.fillStyle = (this.inputB == 1 ) ? 'green' : 'red' ;
        ctx.fill();
        ctx.closePath()


        //NodeReturn
        ctx.beginPath()
        ctx.arc(this.x + this.width, this.y + 50, 10, 0, 2 * Math.PI)
        ctx.fillStyle = (this.inputA || this.inputB) ? 'green' : 'red' ;
        ctx.fill(); 
        ctx.closePath()

    }
    type_not(){
        ctx.beginPath()
       ctx.rect(this.x, this.y, this.width,this.height);
       ctx.fillStyle = 'black'
       ctx.fill();
       ctx.closePath()

       ctx.beginPath();
       ctx.font = this.width/5+"px Arial";
       ctx.fillStyle = 'red'
       ctx.fillText("NOT",this.x + 60, this.y + 70);
       ctx.fill()
       ctx.closePath()

       //NodeA
       ctx.beginPath()
       ctx.arc(this.x, this.y + 50, 10, 0, 2 * Math.PI)
       ctx.fillStyle = (this.inputA == 1 ) ? 'green' : 'red' ;
       ctx.fill();
       ctx.closePath()

       //NodeReturn
       ctx.beginPath()
       ctx.arc(this.x + this.width, this.y + 50, 10, 0, 2 * Math.PI)
       ctx.fillStyle = (!this.inputA) ? 'green' : 'red' ;
       ctx.fill(); 
       ctx.closePath()

    }
    type_input(){
        ctx.beginPath();
        ctx.rect(this.x , this.y, 50, 50)
        ctx.fillStyle = 'blue';
        ctx.fill();
        ctx.closePath()

        //Switch
        ctx.beginPath();
        ctx.rect(this.x + 11 ,this.y + 15, 20, 20)
        ctx.fillStyle = 'yellow';
        ctx.fill();
        ctx.closePath()

        //Main Node
        ctx.beginPath();
        ctx.arc(this.x + 50, this.y + 25, 10, 0 ,Math.PI * 2)
        ctx.fillStyle = (this.inputA == 1) ? 'green' : 'red';
        ctx.fill();
        ctx.closePath()
    }
    type_output(){
        ctx.beginPath();
        ctx.rect(this.x , this.y, 50, 50)
        ctx.fillStyle = 'red';
        ctx.fill();
        ctx.closePath()

        //NodeA
        ctx.beginPath();
        ctx.arc(this.x, this.y + 25, 10, 0 ,Math.PI * 2)
        ctx.fillStyle = (this.inputA == 1) ? 'green' : 'red';
        ctx.fill();
        ctx.closePath()
  

        //NodeC
        ctx.beginPath();
        ctx.arc(this.x + 50, this.y + 25, 10, 0 ,Math.PI * 2)
        ctx.fillStyle = (this.inputA == 1) ? 'green' : 'red';
        ctx.fill();
        ctx.closePath()

    }

   get_type(){
    return(this.type)
   }

    set_nodeA_val(val){
        this.inputA = val
    }

    set_nodeB_val(val){
        this.inputB = val
    }

    get_nodeC_val(){
        if(this.type == 'and')  return(this.inputA && this.inputB);
        if(this.type == 'or')  return(this.inputA || this.inputB);
        if(this.type == 'not')  return(!this.inputA);
        if(this.type == 'input') return(this.inputA);
        if(this.type == 'output') return(this)
 
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
        let dx;
        let dy;
        if(this.type == 'not'){
            dx = this.x - x;
            dy = (this.y + 70) - y;
        }else if(this.type == 'input'){
            if(
                x < (this.x + 5) + 20 &&
                x > (this.x + 5) &&
                y < (this.y + 29) + 20 &&
                y > (this.y + 29)
            ){
                return(true)
             }
        }else if(this.type == 'output'){
            dx = this.x - x ;
            dy = this.y + 46 - y ;
        }else{
            dx = this.x - x;
            dy = (this.y + 40) - y;
        }
        let dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 10){
            return(true);
        }

        return(false)
            
    }

    nodeB_is_click(x,y){
        let dx = this.x - x;
        let dy = (this.y + 100) - y;
        let dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 10){
          if(this.type != 'not' && this.type != 'input') return(true);
        }
        return(false)
            
    }

    nodeC_is_click(x,y){
        let dx;
        let dy;
        if(this.type == 'input'){
            dx = (this.x + 50) - x;
            dy = (this.y + 45) - y;

        }else{
            dx = (this.x + this.width) - x;
            dy = (this.y + 70) - y;
        }
        
        let dist = Math.sqrt(dx * dx + dy * dy);
        // console.log(dx, dy);

        if (dist < 10){
            return(true)
        }

        return(false)
            
    }

    connected_to_nodeA(g2){
        ctx.beginPath()
        if(this.type == 'input'){
        ctx.moveTo(this.x + 50, this.y + 25);
        }else{
        ctx.moveTo(this.x + this.width, this.y + 50);
        }
        if(g2.type == 'not'){
            ctx.lineTo(g2.posX(), g2.posY() + 50);
        }if(g2.type == 'output'){
            ctx.lineTo(g2.posX(), g2.posY() + 25);
        }else{
            ctx.lineTo(g2.posX(), g2.posY() + 20);
        }
        ctx.stroke()
        ctx.closePath()
    }

    connected_to_nodeB(g2){
        ctx.beginPath()
        if(this.type == 'input'){
        ctx.moveTo(this.x + 50, this.y + 25);
        }else{
        ctx.moveTo(this.x + this.width, this.y + 50);
        }
        ctx.lineTo(g2.posX(), g2.posY() + 80);
        ctx.stroke()
        ctx.closePath()
    }
   



}