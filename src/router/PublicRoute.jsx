import { useContext } from "react";
import { AuthContext } from "../context/types/AuthContext";
import { Navigate } from "react-router-dom";

export const PublicRoute = ({ children }) => {
  const { logged } = useContext(AuthContext);
  return (
    !logged
      ? (
        children
      )
      : (
        <Navigate to ="/marvel"/>

      )
  );
};