class Rope{
    constructor(bodyA, pointB){

        var options={
            bodyA:bodyA,
            pointB:pointB,
        length:50,
    stiffness:0.2}
            this.pointB=pointB;
            this.rope=Constraint.create(options);
            World.add(world , this.rope);}

      release(){
this.rope.bodyA=null;
}

    display(){
  
        if(this.rope.bodyA){
            var pointA=this.rope.bodyA.position;
            var pointB =this.pointB;
            strokeWeight(5);
            stroke("black");
            fill("black");
            line(pointA.x , pointA.y , pointB.x , pointB.y);
        }

    }
}