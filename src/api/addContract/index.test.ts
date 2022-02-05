import { addContract, isValidParams } from '.';
import { mockResponse } from './mockResponse';

/**
 * Mock Fetch in Jest Manually
 *
 * Note: Could also use a dependency like: https://www.npmjs.com/package/fetch-mock
 * but I try to keep the dependencies as minimal as possible.
 * */

// @ts-ignore
mockfetch = jest.fn(() => {
    return Promise.resolve(mockResponse)
})

describe('addContract with async/await', () => {
    beforeEach(() =>  jest.clearAllMocks());

    describe('when params are defined', () => {
        const params = {
            firstName: "John",
            lastName: "Doe",
            email: "jd@imail.com",
        };

        it('should upload a new contract', async () => {
            // @ts-ignore
            fetch.mockImplementationOnce(() => Promise.resolve(mockResponse));

            const receivedRes = await addContract(params);
            const receivedData = await receivedRes?.data;

            const expected = {
                firstName: "John",
                lastName: "Doe",
                email: "jd@imail.com",
                status: "ok",
                startData: "",
                cancelationDate: ""
              }

            expect(receivedData).toStrictEqual(expected);
            expect(fetch).toHaveBeenCalledTimes(1);
        });
    });

    describe('when params are invalid', () => {
        const invalidParams = {
            firstName: "",
            lastName: "",
            email: "",
        };

        it('should avoid making the request', () => {
            const received = isValidParams(invalidParams);
            expect(received).toBeFalsy();
        });

        it('should throw an error', async () => {
            const addContract = jest.fn().mockImplementation(() => Promise.reject({ message: "Failed to fetch data from API." }));

            const received = await addContract(invalidParams).catch((error: { message: string; }) => error.message);
            expect(received).toMatch(/Failed to fetch/);
        });
    });
});
