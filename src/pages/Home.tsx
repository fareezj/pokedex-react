import React, { useEffect, useState } from "react";
import PokeDetails from "../components/home/PokeDetails";
import { PokeListItem } from "../components/home/PokeListItem";
import { GetPokeDetails, GetPokeList } from "../services/PokeServices";
import { PokeListRes } from "../types/PokeListRes";

const Home = () => {
  const [pokeList, setPokeList] = useState<any[]>([]);
  const [viewPoke, setViewPoke] = useState();
  const [pokeLimit, setPokeLimit] = useState(10);

  useEffect(() => {
    fetchPoke();
  }, [pokeLimit]);

  const fetchPoke = async () => {
    await GetPokeList({ limit: pokeLimit }).then((res: PokeListRes) => {
      const pokeListUrl = res.results;
      GetPokeDetails(pokeListUrl).then((res: any) => {
        setPokeList((prevList) => {
          console.log("PREV LIST: " + prevList);
          return [...new Set([...prevList, ...res])];
        });
        setViewPoke(res[0]);
      });
    });
  };

  const onGetMorePoke = () => setPokeLimit(pokeLimit + 10);

  return (
    <div className="base">
      <div className="container-fluid min-vh-100 d-flex flex-column">
        <img src="../../poke-logo.svg" height={100} />
        <>{console.log(pokeList)}</>
        <div className="row flex-grow-1">
          <div className="col-md-8 col-sm-12">
            <div className="container">
              <div className="row gy-5">
                {pokeList.map((item, index) => {
                  return (
                    <PokeListItem
                      key={index}
                      index={index}
                      name={item.data.name}
                      image={item.data.sprites.front_default}
                      types={item.data.types}
                      onClick={(index: number) => setViewPoke(pokeList[index])}
                    />
                  );
                })}
                <button className="btn btn-primary" onClick={onGetMorePoke}>
                  See More
                </button>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-12 details-card">
            <div>
              <div className="flex-grow-1">
                {viewPoke != null && <PokeDetails detail={viewPoke} />}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
