import { useReducer } from "react";
import { AuthContext } from "./AuthContext";
import { AuthReducer } from "./AuthReducer";
import { types } from "./types";

const init = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  return {
    logged: !!user,
    user,
  };
};
export const AuthProvider = (
  { children },
) => {
  const [authState, dispatch] = useReducer(AuthReducer, {}, init);
  
  const login = (name = '') => {
    const user = {
      id: '32423',
      name,
    };
    const action = {
      type: types.login,
      payload: user,
    };

    localStorage.setItem('user', JSON.stringify(user));
    dispatch(action);
  };

  const loggout = () => {
    const action = {
      type: types.logout,
    };
    localStorage.removeItem('user');
    dispatch(action);

  };
  return (
    <AuthContext.Provider
      value={{
        ...authState,
        login,
        loggout,
      }}
    >
      {
        children
      }
    </AuthContext.Provider>
  );
};