import axios from 'axios';
import { url } from '../config';

export const getContracts = async () => {
  let loading = true, error = { message: '' };

  const response = await axios.get(url).then(res => {
    loading = false;
    return res;
  });

  const data = await response?.data;

  return { data, loading, error };
};
