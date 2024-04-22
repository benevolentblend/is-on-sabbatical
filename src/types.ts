export type Trip = {
  type: "sabbatical" | "vacation";
  person: string;
  start: string;
  end: string;
};

export type TripStatus = "before" | "active" | "after";
