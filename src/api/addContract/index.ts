import axios from 'axios';

import { url } from '../config';

type params = {
    firstName: string;
    lastName: string;
    email: string;
    status?: string;
    startDate?: string;
    cancellationDate?: string;
}

export const isValidParams = (params: params) => {
    if (!params?.firstName || !params?.lastName || !params?.email) return false;
    return true;
}

export const addContract = async (params: params) => {
    let loading = true, error = { message: '' };

    if (!isValidParams(params)) return {
        data: null,
        loading: false,
        error: { message:'invalid params' }
    }

    const response = await axios.post(url, params)
        .then(res => {
            loading = false;
            return res;
        }).catch(err => {
            loading = false;
            error.message = `Opps..., ${err.message}`;
            return null;
        });

    const data = await response?.data;

    return { data, loading, error };
};
