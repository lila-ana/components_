import axios from "axios";

export async function getResource(
  url: string,
  onComplete: (data: any) => void
) {
  try {
    const response = await axios.get(url);
    onComplete(response.data);
  } catch (error) {
    console.error("Error fetching resource:", error);
    // Handle error or throw it to be caught elsewhere
    throw error;
  }
}
