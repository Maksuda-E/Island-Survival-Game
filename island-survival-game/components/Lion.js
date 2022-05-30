import { Image } from "react-native";
import Matter from "matter-js";


const Lion = (props) => {
  
  const width = props.size.width;
  const height = props.size.height;
  const xPos = props.body.position.x - width / 2;
  const yPos = props.body.position.y - height / 2;

 
  
  return (
    <Image
      style={{
        width: props.size.width,
        height: props.size.height,
        left: xPos,
        top: yPos,
        position: "absolute",
        //backgroundColor: props.color,
      }}
      resizeMode="stretch"
      source={props.extraOptions.image}
    />
  );
};

export default (world, color, pos, size, extraOptions) => {
  const theLion = Matter.Bodies.rectangle(
    pos.x,
    pos.y,
    size.width,
    size.height,
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
  Matter.World.add(world, theLion);
  return { body: theLion, color, pos, size, extraOptions, renderer: <Lion /> };
};
