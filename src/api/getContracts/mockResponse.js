export const mockResponse = [
  {
    "id": '1',
    "firstName": "John",
    "lastName": "Doe",
    "email": "jd@imail.com",
    "status": "ok",
    "startDate": "",
    "cancellationDate": ""
  },
  {
    "id": '2',
    "firstName": "John1",
    "lastName": "Doe2",
    "email": "jd@imail2.com",
    "status": "ok",
    "startDate": "",
    "cancellationDate": ""
  },
];

export const mockResponseError = {
  data: null,
  loading: false,
  error: {
      message: 'Failed to fetch data from API ...'
  }
}
