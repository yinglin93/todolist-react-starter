import axios from 'axios';

const authURL = 'https://todo-list.alphacamp.io/api/auth';

export const login = async ({ username, password }) => {
  try {
    const { data } = await axios.post(`${authURL}/login`, {
      username,
      password,
    });

    const { authToken } = data;
    if (authToken) {
        return { success: true, ...data };
      }
    return data;
  } catch (error) {
    console.error('[Login Failed]:', error);
  }
};

export const signup = async ({ username, email, password }) => {
  try {
    const { data } = await axios.post(`${authURL}/register`, {
      username,
      email,
      password,
    });

    console.log(data)

    const { authToken } = data;
     if (authToken) {
      return { success: true, ...data };
    } 
      return data;
  } catch(error) {
    console.error('[Signup Failed]:', error)
  }
  
}

