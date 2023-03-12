class Connect{

    constructor(x1, y1, x2, y2){
        this.x1 = x1;
        this.x2 = x2;
        this.y1 = y1;
        this.y2 = y2; 
    }

    draw(){
        ctx.beginPath();
        ctx.moveTo(this.x1, this.y1);
        ctx.lineTo(this.x2, this.y2);
        ctx.stroke();
        ctx.closePath();
    }

    set_X1(pos){
        this.x1 = pos;
    }
    
    set_X2(pos){
        this.x2 = pos;
    }

    set_Y1(pos){
        this.y1 = pos;
    }

    set_Y2(pos){
        this.y2 = pos;
    }
}