import React, { useContext, useReducer } from 'react';
import { CLEAR_ALERT, DISPLAY_ALERT } from './action';
import reducer from './reducer';
const AppContext = React.createContext();
const initialState = {
  isLoading: false,
  showAlert: false,
  alertText: '',
  alertType: '',
};
const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const displayAlert = () => {
    dispatch({ type: DISPLAY_ALERT });
    clearAlert();
  };

  const clearAlert = () => {
    setTimeout(() => {
      dispatch({ type: CLEAR_ALERT });
    }, 3000);
  };
  return (
    <AppContext.Provider value={{ ...state, displayAlert }}>
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = () => {
  return useContext(AppContext);
};
export { AppProvider, useAppContext };
