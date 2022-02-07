import axios from 'axios';
import { url } from '../config';

export const getContract = async (id: number) => {
    let loading = true, error = false;

    const response = await axios.get(`${url}/${id}`).then(res => {
        loading = false;
        return res;
    }).catch(err => { error = true });

    const data = await response?.data;

    return { data, loading, error };
};
