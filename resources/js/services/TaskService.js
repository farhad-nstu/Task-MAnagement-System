import Axios from "axios";

export const getTaskList = () => {};

/**
 * storeNewTask()
 *
 * @param {object} data
 */
export const storeNewTask = async (data) => {
  data.project_id = parseInt(data.project_id);

  return await Axios.post("http://localhost:8000/api/tasks", data).then(
    (res) => {
      return res.data;
    }
  );
};