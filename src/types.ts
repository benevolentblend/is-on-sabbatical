export type Itinerary = {
  start: string;
  end: string;
  location: string;
};

export type Trip = {
  type: "sabbatical" | "vacation";
  itinerary?: Itinerary[];
  person: string;
  start: string;
  end: string;
};

export type TripStatus = "before" | "active" | "after";
