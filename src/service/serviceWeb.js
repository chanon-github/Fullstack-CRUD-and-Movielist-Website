const API_PORT = "8080";
const API_URL = `http://localhost:${API_PORT}/portfolio`;
// const API_URL = `https://cha-new-api-1864e99d2038.herokuapp.com/bluestone`;

export const getToken = () => {
  const token = localStorage.getItem("token");

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



// export const login = async (userLogin) => {
//   let response = null;
//   try {
//     response = await fetch(`${API_URL}/gogoji/login`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json;charset=utf-8",
//       },
//       body: JSON.stringify(userLogin),
//     });
//   } catch (err) {
//     console.log("Request rejected of fetchGetGIS : ", err);
//   }
//   return response;
// };

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

