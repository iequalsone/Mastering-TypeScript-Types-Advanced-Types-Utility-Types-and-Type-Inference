type APIResponse = {
  data: string[];
  error?: string;
};

type APIStatus = {
  status: "success" | "error";
};

type APIResult = APIResponse & APIStatus;

function handleApiResponse(response: APIResult) {
  if (response.status === "success") {
    console.log("Data:", response.data);
  } else {
    console.error("Error:", response.error);
  }
}
