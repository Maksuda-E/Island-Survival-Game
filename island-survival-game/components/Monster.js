import { Image } from "react-native";
import Matter from "matter-js";


const Monster = (props) => {
  
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
       //backgroundColor: props.color,
      }}
      resizeMode="stretch"
      source={props.extraOptions.image}
    />
  );
};

export default (world, color, pos, sides, radius, extraOptions) => {
  const theMonster = Matter.Bodies.polygon(
    pos.x,
    pos.y,
    sides,
    radius,
    {
      label: extraOptions.label,
      restitution: extraOptions.restitution,
      isStatic: extraOptions.isStatic,
    }
  );
  Matter.World.add(world, theMonster);
  return { body: theMonster, color, pos, sides, radius, extraOptions, renderer: <Monster /> };
};
