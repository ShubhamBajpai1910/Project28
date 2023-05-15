class Paper{

constructor(x,y,radius){
    
var options={isStatic:false,restituion:0.5,friction:0.5,density:1}
this.body=Bodies.circle(x,y,radius,options);
this.radius=radius;
World.add(world , this.body);}

display(){
var pos = this.body.position;
push();
translate(pos.x , pos.y);
fill("cyan");
ellipseMode(RADIUS);
ellipse(0,0,this.radius,this.radius);
pop();}}