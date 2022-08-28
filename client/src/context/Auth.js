import { useReducer, createContext, useEffect } from "react";

let currentUser = localStorage.getItem("currentUser")
  ? JSON.parse(localStorage.getItem("currentUser")).user
  : "";

export const initialAuthState = {
  user: "" || currentUser,
  error: undefined,
  loading: false,
};

export const AuthContext = createContext(initialAuthState);

export const AuthReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN_SUCCESS":
      return {
        ...state,
        loading: false,
        user: action.payload,
      };
    case "LOGIN_FAILED":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case "LOGIN_PENDING":
      return {
        ...state,
        loading: true,
      };
    case "LOGOUT":
      return {
        loading: false,
        user: null,
        error: undefined,
      };
    default:
      return state;
  }
};

export const AuthContextProvider = ({ children }) => {
  const [state, setState] = useReducer(AuthReducer, initialAuthState);

  // User to localstorage
  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(state.user));
  }, [state.user]);

  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        loading: state.loading,
        error: state.error,
        setState,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
