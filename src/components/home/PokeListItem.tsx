import React from "react";
import "../../styles/home/home.scss";

interface PokeListProps {
  index: number;
  name: string;
  image: string;
  types: PokeTypeList[];
  onClick: (id: number) => void;
}

interface PokeTypeList {
  slot: number;
  type: PokeType;
}

interface PokeType {
  name: string;
  url: string;
}

export const PokeListItem = (props: PokeListProps) => {
  const { index, name, image, types } = props;
  return (
    <div
      className="col-sm-6 col-md-4 col-lg-3 h-100"
      onClick={() => props.onClick(index)}
    >
      <div className="item-base p-2">
        <img src={image} />
        <h5 className="hello">{name}</h5>
        {types.map((item, index) => {
          return (
            <p key={index} className="badge text-bg-warning m-1 p-2">
              {item.type.name}
            </p>
          );
        })}
      </div>
    </div>
  );
};
