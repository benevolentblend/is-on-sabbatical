import { type Trip } from "~/types";

const formatStatusMessage = (
  status: "before" | "active" | "after",
  trip: Trip,
): [string, string] => {
  switch (status) {
    case "before":
      return ["No", `their ${trip.type} starts in `];
    case "active":
      return ["Yes", `they are on ${trip.type} for `];
    case "after":
      return ["No", `they have returned from their ${trip.type}.`];
  }
};

export default formatStatusMessage;
