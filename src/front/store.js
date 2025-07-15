import React from "react";
// import { useNavigate } from "react-router-dom";

export const initialStore = () => {
  return {
    token: null,
    user: null,
  };
};

export default function storeReducer(store, action = {}) {
  switch (action.type) {
    case "login_success":
      localStorage.setItem("token", action.payload.token);
      localStorage.setItem("user", JSON.stringify(action.payload.user));

      return {
        ...store,
        token: action.payload.token,
        user: action.payload.user,
        isAuthenticated: true,
      };

    case "logout":
      localStorage.removeItem("token");
      localStorage.removeItem("user");

      // const navigate = useNavigate();

      return {
        ...store,
        token: null,
        user: null,
        isAuthenticated: false,
      };
    // navigate("/login");

    default:
      throw Error("Unknown action.");
  }
}
