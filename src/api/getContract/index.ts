import { url } from '../config';

export const getContract = async (id: number) => {
    let loading = true, error = false;

    // Note: Axios or other fetching library could be used for fetching to make it simple
    try {
        const response = await fetch(`${url}/${id}`, { method: 'GET' })
        .then(res => {
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
