import { LEADERS } from "../shared/Leaders";

export const Leaders = (state = LEADERS, action) => {
  console.log("inside the leaders reducer");
  switch (action.type) {
    default:
      return state;
  }
};
