import axios from "axios";

export default {
  fetchProjects: function () {
    return axios.get("./Projects");
  },
};
