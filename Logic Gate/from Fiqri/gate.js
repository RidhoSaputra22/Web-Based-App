class Gate{
    constructor(A,B,x,y){
        this.A = A;
        this.B = B;
        this.width = 100;
        this.height = 100;
        this.x = x;
        this.y = y;
        this.nodeAX = this.x;
        this.nodeAY = this.y + 17;
        this.nodeBX = this.x;
        this.nodeBY = this.y + 77;
        this.nodeCX = this.x + this.width;
        this.nodeCY = this.y + 47;

        
    }

    update(){
        ctx.beginPath();
        ctx.rect(this.x,this.y,this.width,this.height,)
        ctx.fillStyle = 'yellow';
        ctx.fill();

        ctx.beginPath();
        ctx.arc(this.x, this.nodeAY, 10, 0, 2 * Math.PI)
        ctx.fillStyle = 'red';
        ctx.fill();

        ctx.beginPath();
        ctx.arc(this.x, this.nodeBY, 10, 0, 2 * Math.PI)
        ctx.fillStyle = 'red';
        ctx.fill();

        ctx.beginPath();
        ctx.arc(this.nodeCX, this.nodeCY, 10, 0, 2 * Math.PI)
        ctx.fillStyle = 'red';
        ctx.fill();
    }

    //get pos
    nodeA_posX(){
        return(this.nodeAX)
    }

    nodeA_posY(){
        return(this.nodeAY)
    }

    nodeB_posX(){
        return(this.nodeBX)
    }

    nodeB_posY(){
        return(this.nodeBY)
    }

    nodeC_posX(){
        return(this.nodeCX)
    }

    nodeC_posY(){
        return(this.nodeCY)
    }

    //check collision

    nodeA_is_collide(x,y){
        let dx = this.nodeAX - x;
        let dy = this.nodeAY - y;

        let dist = Math.sqrt(dx * dx + dy * dy)
        if (dist <= 15){
            return(true);
        }
        return(false);
    }

    nodeB_is_collide(x,y){
        let dx = this.nodeBX - x;
        let dy = this.nodeBY - y;

        let dist = Math.sqrt(dx * dx + dy * dy)
        if (dist <= 15){
            return(true);
        }
        return(false);
    }

    nodeC_is_collide(x,y){
        let dx = this.nodeCX - x;
        let dy = this.nodeCY - y;

        let dist = Math.sqrt(dx * dx + dy * dy)
        if (dist <= 15){
            return(true);
        }
        return(false);
    }

    

    

}