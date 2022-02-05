import { getContracts } from '.';
import { mockResponse, mockResponseError } from './mockResponse';

/**
 * Mock Fetch in Jest Manually
 *
 * Note: Could also use a dependency like: https://www.npmjs.com/package/fetch-mock
 * but I try to keep the dependencies as minimal as possible.
 * */

// @ts-ignore
global.fetch = jest.fn(() => {
    return Promise.resolve({ msg: 'mock response' });
})

beforeAll(() => jest.spyOn(window, 'fetch'))

describe('getContracts with async/await', () => {
    beforeEach(() => jest.clearAllMocks());

    it('should retrive all contracts', async () => {
        // @ts-ignore
        fetch.mockImplementationOnce(() => Promise.resolve(mockResponse));

        const received = await getContracts();
        const receivedContracts = await received?.data;

        expect(receivedContracts).toStrictEqual(mockResponse);
        expect(fetch).toHaveBeenCalledTimes(1);
    });

    it('should throw an error message', async () => {
        // @ts-ignore
        fetch.mockImplementationOnce(() => Promise.reject(mockResponseError));

        const received = await getContracts();
        const receivedErrorMessage = await received?.error?.message;
        const receivedData = await received?.data;

        expect(receivedErrorMessage).toMatch(/Failed to fetch data/);
        expect(receivedData).toBeNull();
        expect(fetch).toHaveBeenCalledTimes(1);

    })
});
