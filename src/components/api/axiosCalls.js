import axios from "axios";

export async function getAxios(URL) {
  const sendURL = `https://swapi.dev/api/${URL}`;
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
