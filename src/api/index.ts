import axios from "axios";
const apiClient = axios.create({
  baseURL: "https://g1api.finlogix.com/v1",
  headers: {
      "Content-type": "application/json",
      "Authorization":`Bearer ${localStorage.getItem("token")}`
  },
});

// yuntest@mailinator.com 
// A123456

apiClient.interceptors.request.use(
  function (config) {
    return {
      ...config,
      headers: {
        authorization:`Bearer ${localStorage.getItem("token")}`
      }
    }
  }
)

// apiClient.interceptors.response.use(
//   function (response) {
//     const {data,status} = response;
//     return {
//       data,
//       status
//     }
//   },
//   function (err) {
//     const {response:{data:{errors},status}} = err;
//     return{
//       data:errors,
//       status
//     }
//   }
// )

export const getPost = () => apiClient.get("/post/analysis?per_page=12&page=1")
export const getPostList = () => apiClient.get("/me/user/favourite/post-analysis")
export const favoritePost = (postId: string) => apiClient.post(`/me/user/favourite/post-analysis/${postId}`)
export const unFavoritePost = (postId: string) => apiClient.delete(`/me/user/favourite/post-analysis/${postId}`)
export const userLogin = (email: string, password: string) => apiClient.post("/auth/login/email", { email, password })
export const userLogout = () => apiClient.post("/me/user/logout")
export const checkUserToken = () => apiClient.get("/me/user/info")

