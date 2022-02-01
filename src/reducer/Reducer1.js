const initialstate = o;
const changeTheHandler = (state = initialstate, action) => {
  switch (action.type) {
    case "INCREAMENT":
      return state + 1;
    default:
      return state;
  }
};
export default changeTheHandler;
