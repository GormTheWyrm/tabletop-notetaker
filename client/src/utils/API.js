import axios from 'axios';

export const getAllcharacters = function () {
    return axios.get('/api/characters');
  };

  