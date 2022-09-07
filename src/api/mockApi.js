import http from "./http.js";
export default {

  getDetail (id) {
    console.log(id, "idd");
    return http({
      url: `/api/mockGetList`,
      method: "get",
      params: { id }
    });
  },
}