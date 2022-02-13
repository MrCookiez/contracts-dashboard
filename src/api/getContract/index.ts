import axios from 'axios';
import { url } from '../config';

export const getContract = async (id: number) => {
    let loading = true, error = { message: '' };

    const response = await axios.get(`${url}/${id}`).then(res => {
        loading = false;
        return res;
    }).catch(err => {
        error.message = `Opps..., ${err.message}`;
        return null;
    });

    const data = await response?.data;

    return { data, loading, error };
};
