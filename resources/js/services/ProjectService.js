import Axios from "axios";

export const getProjectList = async () => {
  return await Axios.get("http://localhost:8000/api/projects").then(
    (res) => {
      return res.data;
    }
  );
}

/**
 * storeNewProject()
 *
 * @param {object} data
 */
export const storeNewProject = async (data) => {
  data.user_id = 1;
  return await Axios.post(
    "http://localhost:8000/api/projects",
    data
  ).then((res) => {
    return res.data;
  });
};

export const updateProject = async (id, data) => {
  data.user_id = 1;
  return await Axios.put(
    `http://localhost:8000/api/projects/${id}`,
    data
  ).then((res) => {
    return res.data;
  });
};

export const deleteProject = async (id) => {
  return await Axios.delete(
    `http://localhost:8000/api/projects/${id}`
  ).then((res) => {
    return res.data;
  });
};