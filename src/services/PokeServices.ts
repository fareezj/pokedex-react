import axios from "axios";

export const GetPokeList = async ({ limit }: { limit: number }) => {
  try {
    const response = await axios.get(
      `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${
        limit > 10 ? limit : 0
      }`
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const GetPokeDetails = async (pokeList: any) => {
  try {
    const result = [];
    for (let index = 0; index < pokeList.length; index++) {
      const obj: any = {};
      const response = await axios.get(pokeList[index].url);
      obj["data"] = response.data;
      result.push(obj);
    }

    return result;
  } catch (error) {
    console.log(error);
  }
};
