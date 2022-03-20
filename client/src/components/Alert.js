import React from 'react';
import { useAppContext } from '../context/appContext';

const Alert = ({ type, value }) => {
  const { alertType, alertText } = useAppContext();
  return <div className={`alert alert-${alertType}`}>{alertText}</div>;
};

export default Alert;
