import axios from 'axios';

const BASE_URL = 'https://rickandmortyapi.com/api/character/';

export interface Character {
  id: number;
  name: string;
  image: string;
  status: string;
  species: string;
  gender: string;
  location: {
    name: string;
  };
}

export const fetchCharacters = async (page: number = 1, name: string = ''): Promise<{ results: Character[] }> => {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        page,
        name,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching characters:', error);
    throw error;
  }
};
