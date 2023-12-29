// import axios from "axios";

// const axiosInstance = axios.create({
//   baseURL: import.meta.env.VITE_APP_SERVER_URL,
//   // timeout: 1000,
//   // headers: {'X-Custom-Header': 'foobar'}
// });

// // Add a request interceptor
// axiosInstance.interceptors.request.use(
//   function (config) {
//     // Do something before request is sent
//     const token = sessionStorage.getItem("access_token");
//     config.headers["Authorization"] = `Bearer ${JSON.parse(token!)}`;
//     return config;
//   },
//   function (error) {
//     // Do something with request error
//     return Promise.reject(error);
//   },
//   {
//     synchronous: true,
//     runWhen(config) {
//       // The interceptor will not be executed if and only if the return of runWhen is false
//       // console.log("runWhen config -------->", { config });
//       return !["login", "signup", "reset-password", "forget-password"].includes(
//         config.url!
//       );
//     },
//   }
// );

// // Add a response interceptor
// axiosInstance.interceptors.response.use(
//   function (response) {
//     // Any status code that lie within the range of 2xx cause this function to trigger
//     // Do something with response data
//     return response;
//   },
//   function (error) {
//     // Any status codes that falls outside the range of 2xx cause this function to trigger
//     // Do something with response error
//     return Promise.reject(error);
//   }
// );

// type IProps = {
//   url: string;
//   data?: any;
//   method?: "GET" | "PUT" | "PATCH" | "POST" | "DELETE";
//   content_type?: "application/json" | "multipart/form-data";
// };

// export const ApiCall = async ({
//   url,
//   data = null,
//   method = "GET",
//   content_type = "application/json",
// }: IProps) => {
//   // console.log({ url, method, content_type });

//   try {
//     const res = await axiosInstance({
//       method,
//       url,
//       data,
//       headers: { "Content-Type": [content_type] },
//       transformResponse: [
//         (data) => {
//           // console.log("transofrm response", { data });
//           return JSON.parse(data);
//         },
//       ],
//     });

//     return res?.data;
//   } catch (error: any) {
//     // console.log(error?.response?.data);
//     // console.log(error?.response?.status);
//     if (error.response) {
//       if (error.response.status === 401) {
//         sessionStorage.clear();

//         window.location.reload();
//         return Promise.reject(error);
//       }
//       // The request was made and the server responded with a status code
//       // that falls out of the range of 2xx
//       // console.log(error.response.headers);
//     } else if (error.request) {
//       // The request was made but no response was received
//       // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
//       // http.ClientRequest in node.js
//       console.log(error.request);
//     } else {
//       // Something happened in setting up the request that triggered an Error
//       console.log("Error", error);
//     }
//     console.log(error.config);
//     return Promise.reject(error);
//   }
// };
