import React from "react";
import { PokeProperties } from "./PokeProperties";

const PokeDetails = ({ detail }: PokeDetailsProps) => {
  const poke = detail.data;
  return (
    <div>
      <img
        className="poke-image img-fluid"
        alt=""
        src={poke.sprites.other.dream_world.front_default}
      />
      <h1 className="fw-bold my-4">{poke.name.toUpperCase()}</h1>
      {poke.types.map((item: any, index: number) => {
        return (
          <p key={index} className="badge text-bg-warning m-1 p-2">
            {item.type.name.toUpperCase()}
          </p>
        );
      })}
      <h5 className="fw-bold mt-5 mb-4">Abilities</h5>
      <div className="d-flex justify-content-center">
        {poke.abilities.map((item: any, index: number) => {
          return (
            <p className="badge text-bg-primary m-1 p-2">
              {item.ability.name.toUpperCase()}
            </p>
          );
        })}
      </div>
      <div className="d-flex flex-wrap justify-content-center">
        <PokeProperties
          title="HEIGHT"
          details={poke.height.toFixed(2) + " m"}
        />
        <PokeProperties
          title="WEIGHT"
          details={poke.weight.toFixed(2) + " KG"}
        />
        <PokeProperties
          title="BASE EXP"
          details={poke.base_experience.toFixed(2) + "m"}
        />
      </div>
    </div>
  );
};

type PokeDetailsProps = {
  detail: any;
};

export default PokeDetails;
