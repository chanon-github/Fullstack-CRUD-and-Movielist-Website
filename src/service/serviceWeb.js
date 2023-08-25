export const API_URL = process.env.NEXT_PUBLIC_API_URL;;
import Cookies from "js-cookie";
export const getToken = () => {
  const token = localStorage.getItem("token");
  // const token = Cookies.get('token') // => 'value'
  return token;
};

export const register = async (parameter) => {
  let response = null;
  try {
    response = await fetch(`${API_URL}/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(parameter),
    });
  } catch (err) {
    console.log("Request rejected of fetchGetGIS : ", err);
  }
  return response;
};

export const login = async (parameter) => {
  let response = null;
  try {
    response = await fetch(`${API_URL}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(parameter),
    });
  } catch (err) {
    console.log("Request rejected of fetchGetGIS : ", err);
  }
  return response;
};

export const sendResetToken = async (parameter) => {
  let response = null;
  try {
    response = await fetch(`${API_URL}/send-token`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(parameter),
    });
  } catch (err) {
    console.log("Request rejected of fetchGetGIS : ", err);
  }
  return response;
};

export const resetPassword = async (parameter) => {
  let response = null;
  try {
    response = await fetch(`${API_URL}/reset-password`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(parameter),
    });
  } catch (err) {
    console.log("Request rejected of fetchGetGIS : ", err);
  }
  return response;
};


export const getAllCustomers = async (id=null) => {
  const token = getToken();
  let url = ``
  url = id ? `${API_URL}/customers?id=${id}` :`${API_URL}/customers`
  let response = null;
  try {
    response = await (
      await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
          Authorization: `Bearer ${token}`,
        },
      })
    ).json();
  } catch (err) {
    console.log("Request rejected of fetchGetGIS : ", err);
  }
  return response;
};

export const addCustomer = async (data) => {
const token = getToken();
  let response = null;
  try {
    response = await fetch(`${API_URL}/customers`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    });
  } catch (err) {
    console.log("Request rejected of fetchGetGIS : ", err);
  }
  return response;
};

export const editCustomer = async (data) => {
  const token = getToken();

  let response = null
  try{
   response = await fetch(`${API_URL}/customers`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
        Authorization: `Bearer ${token}`,

      },
      body: JSON.stringify(data),
    });
  }
  catch(err){
      console.log('Request rejected of fetchGetGIS : ', err);
  }
  return response;
};

export const deleteCustomer = async (id) => {
    const token = getToken();

  let response = null
  try{
   response = await fetch(`${API_URL}/customers`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({id:id}),
    });
  }
  catch(err){
      console.log('Request rejected of fetchGetGIS : ', err);
  }
  return response;
};

// ########### TMDB API ################

// export const getMovie = async (id=null) => {
//   // const token = getToken();
//   let url = ``
//   url = id ? `${API_URL}/movie?id=${id}` :`${API_URL}/movie`
//   let response = null;
//   try {
//     response = await (
//       await fetch(url, {
//         method: "GET",
//         headers: {
//           "Content-Type": "application/json;charset=utf-8",
//           Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwiaWF0IjoxNjkxNDExOTUwfQ.irMGCz5pewIj70tEqvO3_AIuf_NPdKOB5IftzTHETgc`,
//         },
//       })
//     ).json();
//   } catch (err) {
//     console.log("Request rejected of fetchGetGIS : ", err);
//   }
//   return response;
// };

export const tmdbApiKey = process.env.NEXT_PUBLIC_API_KEY;
export const nowPlayingListAPI = `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.NEXT_PUBLIC_API_KEY}`
export const movieDetailAPI = `https://api.themoviedb.org/3/movie`


export const tmdbImgDomain = 'https://image.tmdb.org/t/p/original'