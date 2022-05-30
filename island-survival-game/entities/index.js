import Player from "../components/Player";
import Monster from "../components/Monster";
import Lion from "../components/Lion";
import Points from "../components/Points";
import Boundary from "../components/Boundary";
import Obstacle from "../components/Obstacle";
import Constants from "../Constants";
import Matter from "matter-js";
import Images from "../Images";

export default () => {
  let engine = Matter.Engine.create({ enableSleeping: false });
  let world = engine.world;
  engine.gravity.y = 0;

  return {
    physics: { engine, world },
    GamePlayer: Player(
      world, "white",
      { x: Constants.SCREEN_WIDTH - 320, y: Constants.SCREEN_HEIGHT/4 + 330 }, 
      30,
      20,
      { 
        isStatic: false, 
        label: "GamePlayer",
        image: Images.player,
        restitution: 1, 
      }
  ),
  EnemyOne: Monster(
    world, "white",
    { x: Constants.SCREEN_WIDTH - 320 , y: Constants.SCREEN_HEIGHT/2 - 180 }, 
    30,
    10,
    { 
      isStatic: false, 
      label: "EnemyOne",
      image: Images.monster,
      restitution: 1, 
    }
 ),
 EnemyTwo: Monster(
  world, "white",
  { x: Constants.SCREEN_WIDTH - 100 , y: Constants.SCREEN_HEIGHT/2 - 180  }, 
  30,
  10,
  { 
    isStatic: false, 
    label: "EnemyTwo",
    image: Images.monster,
    restitution: 1, 
  }
),
AnimalOne: Lion(
  world, "white",
  {x: Constants.SCREEN_WIDTH - 80, y:Constants.SCREEN_HEIGHT - 490 }, 
  { width: 70, height: 50 },
  {
      isStatic: true,
      label: "AnimalOne",
      image: Images.lion,
      restitution: 1,
    }
),

Animaltwo: Lion(
  world, "white",
  {x: Constants.SCREEN_WIDTH - 300, y:Constants.SCREEN_HEIGHT - 490 }, 
  { width: 70, height: 50 },
  {
      isStatic: true,
      label: "AnimalTwo",
      image: Images.lion,
      restitution: 1,
    }
),
Food: Points(
  world,
      "blue",
      { x: Constants.WINDOW_WIDTH - 200, y: Constants.WINDOW_HEIGHT - 500 },
      20,
    {
      isStatic: false,
      label: "Food",
      image: Images.food,
      restitution: 1,
    }
),
SecondFood: Points(
  world,
      "blue",
      { x: Constants.WINDOW_WIDTH - 100, y: Constants.WINDOW_HEIGHT - 250 },
      20,
    {
      isStatic: false,
      label: "Food",
      image: Images.orange,
      restitution: 1,
    }
),
Coin: Points(
  world,
      "blue",
      { x: Constants.WINDOW_WIDTH - 200, y: Constants.WINDOW_HEIGHT - 350 },
      15,
    {
      isStatic: false,
      label: "Coin",
      image: Images.coin,
      restitution: 1,
    }
),
SecondCoin: Points(
  world,
      "blue",
      { x: Constants.WINDOW_WIDTH - 200, y: Constants.WINDOW_HEIGHT - 650 },
      15,
    {
      isStatic: false,
      label: "Coin",
      image: Images.coin,
      restitution: 1,
    }
),
  ObstacleOne: Obstacle(
      world, "white",
        {x: Constants.SCREEN_WIDTH - 100, y:Constants.SCREEN_HEIGHT - 400 }, 
        { width: 80, height: 40 },
        {
            isStatic: true,
            label: "BottomrightObstacle",
            image: Images.obstacles,
            restitution: 1,
          }
    ),
    ObstacleTwo: Obstacle(
      world, "white",
      {x: Constants.SCREEN_WIDTH - 300, y:Constants.SCREEN_HEIGHT - 400 }, 
      { width: 60, height: 30 },
      {
          isStatic: true,
          label: "BottomleftObstacle",
          image: Images.obstacles,
          restitution: 1,
        }
  ),
  ObstacleThree: Obstacle(
    world, "white",
    {x: Constants.SCREEN_WIDTH - 100, y:Constants.SCREEN_HEIGHT - 710 }, 
    { width: 100, height: 30 },
    {
        isStatic: true,
        label: "RightObstacle",
        image: Images.obstacles,
        restitution: 1,
      }
),
ObstacleFour: Obstacle(
  world, "white",
  {x: Constants.SCREEN_WIDTH - 300, y:Constants.SCREEN_HEIGHT - 710 }, 
  { width: 100, height: 30 },
  {
      isStatic: true,
      label: "LeftObstacle",
      image: Images.obstacles,
      restitution: 1,
    }
),
 BottomBoundary: Boundary(
  world,
  "red",
  { x: Constants.WINDOW_WIDTH / 2, y: Constants.WINDOW_HEIGHT/2 + 210 },
  { height: 20, width: Constants.WINDOW_WIDTH },
  { isStatic: true, label: "Boundary", image: Images.boundary }
),     
RightBoundary: Boundary(
  world,
  "red",
  { x: Constants.WINDOW_WIDTH, y: Constants.WINDOW_HEIGHT/4 },
  { height: Constants.WINDOW_HEIGHT + 45, width: 30 },
  { isStatic: true, label: "Boundary", image: Images.boundary }
),      
LeftBoundary: Boundary(
  world,
  "red",
  {x:0, y: Constants.WINDOW_HEIGHT/4},
  { height: Constants.WINDOW_HEIGHT + 45, width: 30 },
  { isStatic: true, label: "Boundary", image: Images.boundary }
),
TopBoundary: Boundary(
  world,
  "red",
  {x:Constants.WINDOW_WIDTH/2, y:12 },
  { height: 20, width: 700},
  { isStatic: true, label: "Boundary", image: Images.boundary }
),  
  };
};
