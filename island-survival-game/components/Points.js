import { Image } from "react-native";
import Matter from "matter-js";

const Points = (props) => {
  const width = props.radius * 2;

  const x = props.body.position.x - width / 2;
  const y = props.body.position.y - width / 2;

  return (
    <Image
      style={{
        position: "absolute",
        left: x,
        top: y,
        width: width,
        height: width,
        borderRadius: props.radius,
        //backgroundColor: props.color,
      }}
      resizeMode="stretch"
      source={props.extraOptions.image}
    />
  );
};

export default (world, color, pos, radius, extraOptions) => {
  const thePoints = Matter.Bodies.circle(pos.x, pos.y, radius, {
    label: extraOptions.label,
    isStatic: extraOptions.isStatic,
    restitution: extraOptions.restitution,
  });
  Matter.World.add(world, thePoints);
  return { body: thePoints, color, radius, extraOptions, renderer: <Points /> };
};
1;
