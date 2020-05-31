import React from "react";
import {
  grass,
  road,
  roadGrassAbove,
  roadGrassBelow,
  water,
  waterGrassAbove,
  waterGrassBelow,
} from "../images";
import { WORLD_SIZE, TILE_ASPECT_RATIO } from "../constants";
import Tile from "./Tile";
import Frog from "./Frog";
import MovingObject from "./MovingObject";

function Landscape({ frog, boats, trucks }) {
  const yOffset = ((100 / WORLD_SIZE) * TILE_ASPECT_RATIO) / 1.8;
  const tiles = [];
  let z = 0;
  for (let i = WORLD_SIZE; i > 0; i--) {
    if (i === 1 || i === 6 || i === 9) {
      tiles.push(Array(WORLD_SIZE).fill("grass"));
    } else if (i === 2) {
      tiles.push(Array(WORLD_SIZE).fill("roadGrassBelow"));
    } else if (i === 3 || i === 4) {
      tiles.push(Array(WORLD_SIZE).fill("road"));
    } else if (i === 5) {
      tiles.push(Array(WORLD_SIZE).fill("roadGrassAbove"));
    } else if (i === 7) {
      tiles.push(Array(WORLD_SIZE).fill("waterGrassBelow"));
    } else if (i === 8) {
      tiles.push(Array(WORLD_SIZE).fill("waterGrassAbove"));
    }
  }
  return (
    <div className="landscape">
      {tiles.map((row, y) => {
        const yBase = y === 2 ? yOffset * (1 / 0.8) * y : yOffset * y;
        const xBase = 50 - (100 / 18) * y;
        return row.map((tile, x) => {
          const xAbs = xBase + (50 / 9) * x;
          const yAbs = yBase + yOffset * x;
          z++;
          if (tile === "grass") {
            return (
              <Tile key={`${x}${y}`} src={grass} x={xAbs} y={yAbs} z={z} />
            );
          } else if (tile === "road") {
            return <Tile key={`${x}${y}`} src={road} x={xAbs} y={yAbs} z={z} />;
          } else if (tile === "water") {
            return (
              <Tile key={`${x}${y}`} src={water} x={xAbs} y={yAbs} z={z} />
            );
          } else if (tile === "roadGrassAbove") {
            return (
              <Tile
                key={`${x}${y}`}
                src={roadGrassAbove}
                x={xAbs}
                y={yAbs}
                z={z}
              />
            );
          } else if (tile === "roadGrassBelow") {
            return (
              <Tile
                key={`${x}${y}`}
                src={roadGrassBelow}
                x={xAbs}
                y={yAbs}
                z={z}
              />
            );
          } else if (tile === "waterGrassAbove") {
            return (
              <Tile
                key={`${x}${y}`}
                src={waterGrassAbove}
                x={xAbs}
                y={yAbs}
                z={z}
              />
            );
          } else if (tile === "waterGrassBelow") {
            return (
              <Tile
                key={`${x}${y}`}
                src={waterGrassBelow}
                x={xAbs}
                y={yAbs}
                z={z}
              />
            );
          }
        });
      })}
      {boats.map((boat) => {
        return (
          <MovingObject
            key={boat.id}
            x={boat.x}
            y={boat.y}
            direction={boat.direction}
            type="boat"
          />
        );
      })}
      {trucks.map((truck) => {
        return (
          <MovingObject
            key={truck.id}
            x={truck.x}
            y={truck.y}
            direction={truck.direction}
            type="truck"
          />
        );
      })}

      <Frog x={frog.x} y={frog.y} direction={frog.direction} />
      {/* <Frog x={0} y={0} />
      <Frog x={1} y={1} />
      <Frog x={2} y={2} />
      <Frog x={3} y={3} />
      <Frog x={4} y={4} />
      <Frog x={5} y={5} />
      <Frog x={6} y={6} />
      <Frog x={7} y={7} />
      <Frog x={8} y={8} />
      <Frog x={0} y={1} />
      <Frog x={0} y={2} />
      <Frog x={0} y={3} />
      <Frog x={0} y={4} />
      <Frog x={0} y={5} />
      <Frog x={0} y={6} />
      <Frog x={0} y={7} />
      <Frog x={0} y={8} />
      <Frog x={1} y={0} />
      <Frog x={2} y={0} />
      <Frog x={3} y={0} />
      <Frog x={4} y={0} />
      <Frog x={5} y={0} />
      <Frog x={6} y={0} />
      <Frog x={7} y={0} />
      <Frog x={8} y={0} /> */}
    </div>
  );
}

export default Landscape;