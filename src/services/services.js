import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://65afdb1e2f26c3f2139be845.mockapi.io',
});

export const fetchAllContacts = async () => {
  const response = await instance.get('/contacts');
  return response;
};

export const addContactData = async ({ name, number }) => {
  const response = await instance.post('/contacts', { name, number });
  return response;
};

export const deleteContactData = async ({ contactId }) => {
  const response = await instance.delete(`/contacts/${contactId}`);
  return response;
};
