import { url } from '../config';

type params = {
    firstName: string;
    lastName: string;
    email: string;
    status?: string;
    startData?: string;
    cancelationDate?: string;
}

export const isValidParams = (params: params) => {
    if (!params?.firstName || !params?.lastName || !params?.email) return false;
    return true;
}

export const addContract = async (params: params) => {
    let loading = true, error = false;

    if (!isValidParams(params)) return {
        data: null,
        loading: false,
        error: { message:'invalid params' }
    }

    let searchParams = new URLSearchParams(params);
    searchParams.toString();

    // Note: Axios or other fetching library could be used for fetching to make it simple
    try {
        const response = await fetch(url, {
            method: 'POST',
            body: searchParams
        }).then(res => {
            if (res.status > 199 && res.status < 299) loading = false;
            return { data: res, loading, error};
        })

        return await response;
    } catch (error) {
        return {
            data: null,
            loading: false,
            error: {
                message: `Failed to fetch data from API, ${error}`
            }
        }
    }
};
