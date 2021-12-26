import axios from "axios";

export async function getAxios(URL) {
  const sendURL = URL;
  try {
    const response = await axios({
      url: sendURL,
      method: "GET",
    });
    const { data } = response;
    return data;
  } catch (error) {
    console.log("Error in get axios", error);
  }
}
