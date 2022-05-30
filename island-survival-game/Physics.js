import Matter, { Sleeping } from "matter-js";
import Constants from "./Constants";


const randomBetween = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  
  const Physics = (entities, { touches, dispatch, events, time }) => {
    let engine = entities.physics.engine;

  //Movement of Monster
    touches
    .filter((t) => t.type === "press")
    .forEach((t) => {
      Matter.Body.setVelocity(entities.EnemyOne.body, {
       x: 0,
       y: -10,
      });
      Matter.Body.setVelocity(entities.EnemyTwo.body, {
        x: 0,
        y: -10,
       });
      
    });

   //Button control of player
    if (events.length) {
      Sleeping.set(entities.GamePlayer.body, false);
      for (let i = 0; i < events.length; i++) {
        if (events[i].type === "move-up") {
          Matter.Body.setVelocity(entities.GamePlayer.body, { x: 0, y: -6 });
        }
        if (events[i].type === "move-down") {
          Matter.Body.setVelocity(entities.GamePlayer.body, { x: 0, y: 6 });
        }
        if (events[i].type === "move-left") {
          Matter.Body.setVelocity(entities.GamePlayer.body, { x: -6, y: 0 });
        }
        if (events[i].type === "move-right") {
          Matter.Body.setVelocity(entities.GamePlayer.body, { x: 6, y: 0 });
        }
      }
    }
  
   
   
    Sleeping.set(entities.Food.body, false);
    Sleeping.set(entities.SecondFood.body, false);
    Sleeping.set(entities.Coin.body, false);
    Sleeping.set(entities.SecondCoin.body, false);

    Matter.Events.on(engine, "collisionStart", (event) => {
      var pairs = event.pairs;
      var objA = pairs[0].bodyA;
      var objB = pairs[0].bodyB;
      var objALabel = pairs[0].bodyA.label;
      var objBLabel = pairs[0].bodyB.label;

      //collision detection between player and food and earn score
      if (objALabel === "GamePlayer" && objBLabel === "Food") {
        Matter.Body.setPosition(entities.Food.body, {
          x: randomBetween(30, Constants.SCREEN_HEIGHT / 2 - 30),
          y: randomBetween(30, Constants.SCREEN_HEIGHT / 2 - 30),
        });
        Matter.Body.setPosition(entities.SecondFood.body, {
          x: randomBetween(30, Constants.SCREEN_HEIGHT / 2 - 30),
          y: randomBetween(30, Constants.SCREEN_HEIGHT / 2 - 30),
        });
        if (!objB.isSleeping) {
          dispatch({ type: "updateFoodScore" });
        }
        Sleeping.set(objB, true);
      }
      
      //collision detection between player and coin and earn score
      if (objALabel === "GamePlayer" && objBLabel === "Coin") {
        Matter.Body.setPosition(entities.Coin.body, {
          x: randomBetween(30, Constants.SCREEN_HEIGHT / 2 - 30),
          y: randomBetween(30, Constants.SCREEN_HEIGHT / 2 - 30),
        });
        Matter.Body.setPosition(entities.SecondCoin.body, {
          x: randomBetween(30, Constants.SCREEN_HEIGHT / 2 - 30),
          y: randomBetween(30, Constants.SCREEN_HEIGHT / 2 - 30),
        });
        if (!objB.isSleeping) {
          dispatch({ type: "updateCoinScore" });
        }
        Sleeping.set(objB, true);
      }

      //Collision detection between player and boundary and game over
      if (objALabel === "GamePlayer" && objBLabel === "Boundary") {
        dispatch({ type: "gameOver" });
      }

       //Collision detection between player and monster and game over
      if (objALabel === "GamePlayer" && objBLabel === "EnemyOne") {
        dispatch({ type: "gameOver" });
      }

       //Collision detection between player and boundary and game over
      if (objALabel === "GamePlayer" && objBLabel === "AnimalOne") {
        dispatch({ type: "gameOver" });
      }

      //Collision detection between player and lion and game over
      if (objALabel === "GamePlayer" && objBLabel === "AnimalTwo") {
        dispatch({ type: "gameOver" });
      }

      //Collision detection between player and fire obstacle and game over
      if (objALabel === "GamePlayer" && objBLabel === "LeftObstacle") {
        dispatch({ type: "gameOver" });
      }

      if (objALabel === "GamePlayer" && objBLabel === "RightObstacle") {
        dispatch({ type: "gameOver" });
      }

      if (objALabel === "GamePlayer" && objBLabel === "BottomleftObstacle") {
        dispatch({ type: "gameOver" });
      }

      if (objALabel === "GamePlayer" && objBLabel === "BottomrightObstacle") {
        dispatch({ type: "gameOver" });
      }

      //Collision detection between player and monster and game over
      if (objALabel === "GamePlayer" && objBLabel === "EnemyTwo") {
        dispatch({ type: "gameOver" });
      }

      //Collision detection between monster and obstacle and movement change of monster
      if (objALabel === "EnemyOne" && objBLabel === "LeftObstacle") {
        Matter.Body.setVelocity(entities.EnemyOne.body, {
          x: 0,
          y: 5,
        });
      }

      //Collision detection between monster and lion and movement change of monster
      if (objALabel === "EnemyOne" && objBLabel === "AnimalTwo") {
        Matter.Body.setVelocity(entities.EnemyOne.body, {
          x: 10,
          y: 0,
        });
      }
      if (objALabel === "EnemyOne" && objBLabel === "AnimalOne") {
        Matter.Body.setVelocity(entities.EnemyOne.body, {
          x: -10,
          y: 0,
        });
      }

      //Collision detection between monster and boundary and movement change of monster
      if (objALabel === "EnemyOne" && objBLabel === "Boundary") {
        Matter.Body.setVelocity(entities.EnemyOne.body, {
          x: -4,
          y: -10,
        });
      }

      if (objALabel === "EnemyTwo" && objBLabel === "RightObstacle") {
        Matter.Body.setVelocity(entities.EnemyTwo.body, {
          x: 0,
          y: 20,
        });
      }
      if (objALabel === "EnemyTwo" && objBLabel === "AnimalOne") {
        Matter.Body.setVelocity(entities.EnemyTwo.body, {
          x: -10,
          y: 0,
        });
      }
      if (objALabel === "EnemyTwo" && objBLabel === "AnimalTwo") {
        Matter.Body.setVelocity(entities.EnemyTwo.body, {
          x: 10,
          y: 0,
        });
      }
      if (objALabel === "EnemyTwo" && objBLabel === "Boundary") {
        Matter.Body.setVelocity(entities.EnemyTwo.body, {
          x: 7,
          y: -10,
        });
      }
      
      
    });
    Matter.Engine.update(engine, time.delta);
  
    return entities;
  };
  
  export default Physics;
  