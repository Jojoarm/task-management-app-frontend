import axios from 'axios';

export const callCreateUserApi = async (formData) => {
  const response = await axios.post(
    'http://localhost:5000/api/user/register',
    formData,
    { withCredentials: true }
  );
  return response?.data;
};

export const callLoginUserApi = async (formData) => {
  const response = await axios.post(
    'http://localhost:5000/api/user/login',
    formData,
    { withCredentials: true }
  );
  return response?.data;
};

export const callUserAuthApi = async () => {
  const response = await axios.post(
    'http://localhost:5000/api/user/auth',
    {},
    { withCredentials: true }
  );

  // console.log(response, 'response');

  return response?.data;
};

export const callUserLogoutApi = async () => {
  const response = await axios.post(
    'http://localhost:5000/api/user/logout',
    {},
    { withCredentials: true }
  );
  return response?.data;
};

export const addNewTaskApi = async (formData) => {
  const response = await axios.post(
    'http://localhost:5000/api/task/create-task',
    formData
  );
  return response?.data;
};

export const getAllTaskApi = async (userId) => {
  const response = await axios.get(
    `http://localhost:5000/api/task/tasks/${userId}`
  );
  return response?.data;
};

export const updateTaskApi = async (formData) => {
  const response = await axios.put(
    `http://localhost:5000/api/task/update-task`,
    formData
  );
  return response?.data;
};

export const deleteTaskApi = async (taskId) => {
  const response = await axios.delete(
    `http://localhost:5000/api/task/delete-task/${taskId}`
  );
  return response?.data;
};
