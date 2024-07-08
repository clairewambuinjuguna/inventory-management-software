import toast from "react-hot-toast";

export async function makePostRequest(
  setLoading,
  endpoint,
  data,
  resourceName,
  reset
) {
  try {
    setLoading(true);
const baseUrl = "http://localhost:3000";
    const response = await fetch(`${baseUrl}/${endpoint}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (response.ok) {
      console.log(response);
      reset();
      setLoading(false);
      toast.success(`New ${resourceName} created successfully`);
    } else {
      setLoading(false);
      toast.error("Something Went Wrong");
    }
  } catch (error) {
    setLoading(false); //if there are errors,set loading to false
    console.log(error);
  }
}
