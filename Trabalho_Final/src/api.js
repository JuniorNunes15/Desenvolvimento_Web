import axios from 'axios';
const API_URL = 'http://localhost:3001';

export const getAnimais = async () => {
  const res = await axios.get(`${API_URL}/animais`);
  return res.data;
};

export const getAnimalPorId = async (id) => {
  const res = await axios.get(`${API_URL}/animais/${id}`);
  return res.data;
};

export const getEventos = async () => {
  const res = await axios.get(`${API_URL}/eventos`);
  return res.data;
};
