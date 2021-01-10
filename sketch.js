const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint= Matter.Constraint
const Body= Matter.Body

var engine, world;

var ground1,ground2,ground3;

var box1,box2,box3,box4,box5,box6,box7;
var box01,box02,box03,box04,box05;
var box001,box002,box003;
var box0001;

var box11,box12,box13,box14,box15;
var box101,box102,box103;
var box1001;

var polygon,polygon_img;
var sling;


function preload(){
    polygon_img=loadImage("polygon.png")
}


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    polygon=Bodies.circle(100,200,20)
    World.add(world,polygon);

    sling=new SlingShot(this.polygon,{x:100, y:200})
    
    ground1 = new Ground(600,height,1200,20)
    ground2 = new Ground(500,450,350,10)
    ground3 = new Ground(900,300,250,10)

    //first level 2ground
    box1=new Box(380,420,40,60)
    box2=new Box(420,420,40,60)
    box3=new Box(460,420,40,60)
    box4=new Box(500,420,40,60)
    box5=new Box(540,420,40,60)
    box6=new Box(580,420,40,60)
    box7=new Box(620,420,40,60)

    //second level 2ground
    box01=new Box(420,360,40,60)
    box02=new Box(460,360,40,60)
    box03=new Box(500,360,40,60)
    box04=new Box(540,360,40,60)
    box05=new Box(580,360,40,60)

    //third level 2ground
    box001=new Box(460,300,40,60)
    box002=new Box(500,300,40,60)
    box003=new Box(540,300,40,60)

    //fourth level 2ground
    box0001=new Box(500,260,40,60)

    //first level 3ground
    box11=new Box(820,240,40,60)
    box12=new Box(860,240,40,60)
    box13=new Box(900,240,40,60)
    box14=new Box(940,240,40,60)
    box15=new Box(980,240,40,60)

    //second level 3ground
    box101=new Box(860,180,40,60)
    box102=new Box(900,180,40,60)
    box103=new Box(940,180,40,60)

    //thirdlevel 3ground
    box1001=new Box(900,120,40,60)

}


function draw(){
    background(0);
    Engine.update(engine);
    
    ground1.display();
    ground2.display();
    ground3.display();

    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();

    box01.display();
    box02.display();
    box03.display();
    box04.display();
    box05.display();

    box001.display();
    box002.display();
    box003.display();

    box0001.display();

    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();

    box101.display();
    box102.display();
    box103.display();

    box1001.display();

    imageMode(CENTER);
    image(polygon_img,polygon.position.x,polygon.position.y,50,50)

    sling.display();

}


function mouseDragged(){
    Matter.Body.setPosition(polygon,{x:mouseX, y:mouseY})
}


function mouseReleased(){
    sling.fly();
}

function keyPressed(){
    if(keyCode===32){
        sling.attach(polygon)
    }
}

