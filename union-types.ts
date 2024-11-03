type Status = "success" | "error" | "loading";

function getStatusMessage(status: Status): string {
  switch (status) {
    case "success":
      return "Operation was successful!";
    case "error":
      return "There was an error.";
    case "loading":
      return "Loading...";
    default:
      return "Unknown status";
  }
}
