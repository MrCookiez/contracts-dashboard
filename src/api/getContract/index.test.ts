import { getContract } from '.';
import { mockResponse } from './mockResponse';

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

describe('getContract with async/await', () => {
    beforeEach(() => jest.clearAllMocks());

    describe('when id is valid', () => {
        it('should retrive the contract with the given id', async () => {
            // @ts-ignore
            fetch.mockImplementationOnce(() => Promise.resolve(mockResponse));

            const received = await getContract(1);
            const receivedContract = await received?.data;

            expect(receivedContract).toStrictEqual(mockResponse);
            expect(fetch).toHaveBeenCalledTimes(1);
        });
    });

    describe('when id is missing', () => {
        it('should retrive the contract with the given id', async () => {
            // @ts-ignore
            fetch.mockImplementationOnce(() => Promise.resolve({}));

            const received = await getContract(2);
            const receivedContract = await received?.data;

            expect(receivedContract).toStrictEqual({});
        })
    });
});
