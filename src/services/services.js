import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://65afdb1e2f26c3f2139be845.mockapi.io',
});

export const fetchAllContacts = async () => {
  try {
    const response = await instance.get('/contacts');
    const { data } = response;
    console.log({ data });
    return data;
  } catch (error) {
    console.error('Error fetching contacts:', error);
    throw error;
  }
};

export const addContactData = async ({ name, number }) => {
  try {
    const response = await instance.post('/contacts', { name, number });
    const { data } = response;
    console.log('Contact added:', data);
    return data;
  } catch (error) {
    console.error('Error adding contact:', error);
    throw error;
  }
};

export const deleteContactData = async ({ contactId }) => {
  try {
    const response = await instance.delete(`/contacts/${contactId}`);
    const { data } = response;
    console.log('Contact deleted:', data);
    return data;
  } catch (error) {
    console.error('Error deleting contact:', error);
    throw error;
  }
};
