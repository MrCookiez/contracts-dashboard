// eslint-disable-next-line import/no-anonymous-default-export
export default {
  get: jest.fn(() => Promise.resolve({ data: {
    id: '1',
    firstName: "John",
    lastName: "Doe",
    email: "jd@imail.com",
    status: "ok",
    startDate: "",
    cancellationDate: ""
  } })),
}