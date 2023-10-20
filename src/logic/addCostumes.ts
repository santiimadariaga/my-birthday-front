import { axiosDb } from '../helpers/axios';

export const addCostume = async (costumeInput: string | undefined) => {
  const costume = await axiosDb.post('/createCostume', {
    name: costumeInput,
  });

  const result = costume.data;
  console.log(result);
  return result;
};
