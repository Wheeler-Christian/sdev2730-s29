import { createContext, useReducer } from "react";

export const UserContext = createContext({
  firstName: "",
  lastName: "",
  phoneNum: "",
  email: "",
  addFirstName: (newFirstName) => {},
  addLastName: (newLastName) => {},
  addPhoneNum: (newPhoneNum) => {},
  addEmail: (newEmail) => {},
});

function reducer(state, action) {
  switch (action.type) {
    case "FIRST_NAME":
      return { ...state, firstName: action.payload };
    case "LAST_NAME":
      return { ...state, lastName: action.payload };
    case "PHONE_NUM":
      return { ...state, phoneNum: action.payload };
    case "EMAIL_ADDR":
      return { ...state, email: action.payload };
    default:
      return state;
  }
}

function UserContextProvider({ children }) {
  // use reducer hook
  const [state, dispatch] = useReducer(reducer, {
    firstName: "",
    lastName: "",
    phoneNum: "",
    email: "",
  });

  function addFirstName(newFirstName) {
    dispatch({ type: "FIRST_NAME", payload: newFirstName });
  }

  function addLastName(newLastName) {
    dispatch({ type: "LAST_NAME", payload: newLastName });
  }

  function addPhoneNum(newPhoneNum) {
    dispatch({ type: "PHONE_NUM", payload: newPhoneNum });
  }

  function addEmail(newEmail) {
    dispatch({ type: "EMAIL_ADDR", payload: newEmail });
  }

  const value = {
    firstName: state.firstName,
    lastName: state.lastName,
    phoneNum: state.phoneNum,
    email: state.email,
    addFirstName: addFirstName,
    addLastName: addLastName,
    addPhoneNum: addPhoneNum,
    addEmail: addEmail,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

export default UserContextProvider;
