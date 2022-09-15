import http from "./http.js";
export default {

  getDetail (id) {
    return http({
      url: `/api/mockGetList`,
      method: "get",
      params: { id }
    });
  },
}