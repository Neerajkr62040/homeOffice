import { Navigate } from "react-router-dom";

export const RequireAuth = ({ children }) => {
  let user = sessionStorage.getItem("user");  

  if (user === null) {
    return <Navigate to="/" />;
  }


  return children;
};