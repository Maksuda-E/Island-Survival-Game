import { Image } from "react-native";
import Matter from "matter-js";


const Player = (props) => {
  
  const width = props.radius * 2;
  const height = props.sides * 2;

  const xPos = props.body.position.x - width / 2;
  const yPos = props.body.position.y - height / 2;

 
  
  return (
    <Image
      style={{
        width: width,
        height: height,
        left: xPos,
        top: yPos,
        position: "absolute",
        borderRadius: props.radius,
        borderWidth: props.sides,
       // backgroundColor: props.color,
      }}
      resizeMode="stretch"
      source={props.extraOptions.image}
    />
  );
};

export default (world, color, pos, sides, radius, extraOptions) => {
  const thePlayer = Matter.Bodies.polygon(
    pos.x,
    pos.y,
    sides,
    radius,
    {
      label: extraOptions.label,
      frictionAir: 0,
      angularVelocity: 0,
      restitution: extraOptions.restitution,
      mass: 1,
      friction: 0,
      frictionStatic: 0,
      isStatic: extraOptions.isStatic,
    }
  );
  Matter.World.add(world, thePlayer);
  return { body: thePlayer, color, pos, sides, radius, extraOptions, renderer: <Player /> };
};
