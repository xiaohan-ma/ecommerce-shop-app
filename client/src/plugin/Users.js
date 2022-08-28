import axios from "axios";

export async function userLogin(data) {
  try {
    const res = await axios.post("/auth/login", data);
    console.log(res.data);
    return res.data;
  } catch (error) {
    console.log(error);
  }
}
