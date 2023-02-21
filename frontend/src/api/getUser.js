import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

/**
 * Get a single user by UUID
 *
 * @param  UUID of the user to return
 */
const getUser = (uuid) => {
  try {
    const user = axios.get(process.env.BACKEND_URI + "/" + uuid);
    const data = user.data;
    if (!userExist) {
      throw {
        message: "User not found",
      };
    }
    console.log(data);
  } catch (error) {
    console.log(error);
  }
  return data;
};

export default getUser;
