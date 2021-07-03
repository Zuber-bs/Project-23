const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;


// Bases
var computerBase;
var playerBase;

// Players
var computerPlayer;
var player;

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);

   //Initialising Engine
  engine = Engine.create();
  world = engine.world;

   //Create Player Base and Computer Base Object
  computerBase = new ComputerBase(200, 300, 150, 144);
  playerBase = new PlayerBase(800, 300, 155, 123)
  computerPlayer = new ComputerPlayer(240, 175, 66, 138);
  player = new Player(840, 175, 66, 138);


 }

function draw() {

  background(180);

  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);

   //Display Playerbase and computer base
  computerBase.display();
  playerBase.display();

   //display Player and computerplayer
   computerPlayer.display();
   player.display();


}
