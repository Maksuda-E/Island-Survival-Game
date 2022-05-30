import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, TouchableOpacity, Text, Image } from 'react-native';
import { GameEngine } from "react-native-game-engine";
import entities from "./entities";
import React, { useEffect, useState } from "react";
import Images from './Images';
import Constants from './Constants';
import Physics from './Physics';


export default function GameScreen() {

  const [gameEngine, setGameEngine] = useState(null);
  const [running, setRunning] = useState(false);
  const [score, setScore] = useState(0);

  useEffect(() => {
    setRunning(true);
  }, []);

  return (
    <View style={styles.container}>
     <Image
        source={Images.wall}
        style={styles.backgroundImage}
        resizeMode="stretch"
      />
      <Text
        style={{
          textAlign: "center",
          fontSize: 18,
          fontWeight: "bold",
          position: "absolute",
          right: 20,
          top: 30,
          backgroundColor: "white",
          padding: 2,
        }}
      >
        Score: {score}
      </Text>
      <GameEngine
       ref={(ref) => {
        setGameEngine(ref);
      }}
        systems={[Physics]}
        entities={entities()}
        running={running}
        onEvent={(e) => {
          if (e.type === "gameOver") {
            setRunning(false);
          }
          if (e.type === "updateFoodScore") {
            setScore(score + 1);
          }
          if (e.type === "updateCoinScore") {
            setScore(score + 2);
          }
        }}
        style={styles.gameContainer}
      >
        <StatusBar style="auto" hidden={true}/>
      </GameEngine>
      {!running ? (
        <View
          style={{ justifyContent: "center", alignItems: "center", marginTop: 90}}
        >
          <TouchableOpacity
            style={{
              backgroundColor: "#8b0000",
              padding: 15,
            }}
            onPress={() => {
              setScore(0);
              setRunning(true);
              gameEngine.swap(entities());
            }}
          >
            <Text style={{ fontWeight: "bold", color: "white", fontSize: 18 }}>
              GAME OVER: RESTART GAME
            </Text>
          </TouchableOpacity>
        </View>
      ) : null}
      <View>
      <View style={styles.controlRow}>
          <TouchableOpacity
           onPress={() => {
            gameEngine.dispatch({ type: "move-up" });
          }}
          >
            <View style={styles.controlsUp}>
              <Text style={styles.centerText}>Up</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
           onPress={() => {
            gameEngine.dispatch({ type: "move-right" });
          }}
        >
          <View style={styles.controls}>
              <Text style={styles.centerText}>Right</Text>
            </View>
          </TouchableOpacity>
         <TouchableOpacity
           onPress={() => {
            gameEngine.dispatch({ type: "move-down" });
          }}
        >
          <View style={styles.controls}>
              <Text style={styles.centerText}>Down</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
           onPress={() => {
            gameEngine.dispatch({ type: "move-left" });
          }}
        >
          <View style={styles.controls}>
              <Text style={styles.centerText}>Left</Text>
            </View>
          </TouchableOpacity>
          </View>
         </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  backgroundImage: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    width: Constants.SCREEN_WIDTH,
    height: Constants.SCREEN_HEIGHT,
  },
  gameContainer: {
    position: "absolute",
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
  },
  controlRow:{
    flexDirection: "row",
    justifyContent: "space-between",
    marginLeft: 20,
    marginTop: 645
   },
   controlsUp: {
    elevation: 8,
    backgroundColor: "white",
    borderRadius: 10, 
    borderColor: "blue",
    borderWidth: 3,
    width: 80,
    height: 60,
    paddingLeft: 25,
    paddingTop: 15,
  },
  controls: {
    elevation: 8,
    backgroundColor: "white",
    borderRadius: 10,
    borderColor: "blue", 
    borderWidth: 3,
    width: 80,
    height: 60,
    paddingLeft: 20,
    paddingTop: 15,
  },
  centerText: {
    color: "green",
    fontSize: 17,
    fontWeight: "bold",
  },
 
});