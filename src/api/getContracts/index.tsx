import { url } from '../config';

export const getContracts = async () => {
  let loading = true, error = { message: '' };

  // Note: Axios or other fetching library could be used for fetching to make it simple
  const response = await fetch(url).then(res => {
    loading = false;
    return res;
  });

  const data = await response.json();

  return { data, loading, error };
};
