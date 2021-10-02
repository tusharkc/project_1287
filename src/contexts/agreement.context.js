import React, { createContext,useReducer } from "react";
import { useLocalStorage } from "react-use";

const initialState={
  view: null,
  agreement:0
};
const AgreementContext = createContext(initialState);

const agreementReducer = (state, action) => {
  console.log('agreementReducer',state)
  switch (action.type) {
    case 'SET_AGREMENT_PAGE':
      return {...state,agreement: action.payload};
     
    default:
      return state;
     
  }
}
const AgreementContextProvider = ({ children }) => { 
  
  const [state, dispatch] = useReducer(agreementReducer, initialState);
  
  function addTransaction() {
    dispatch({
      type:'SET_AGREMENT_PAGE',
      payload: 1
    })
  }
  return (
    <AgreementContext.Provider
      value={{ state,dispatch,addTransaction }}
    >
      {children}
    </AgreementContext.Provider>
  );
};

export { AgreementContext, AgreementContextProvider };