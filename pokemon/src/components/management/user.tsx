// disinila wadah dari nilai global state
import { createContext } from "react";
import React, { useReducer,} from "react";
import { initialStateStore,Ipayload, user, detail, initialuser, initialdetail, initialState} from "./type";


const CONTEXT_CONSTANT = {
  ADD_PROFILE: "ADD_PROFILE",
  ADD_DETAIL: "ADD_DETAIL",
}

type dispacthProps = {
  type: keyof typeof CONTEXT_CONSTANT;
  payload?: Ipayload
};

type contexApp = {
  user: user,
  detail: detail
  dispatch: (action: any) => void
}
export const AppContext = createContext<contexApp>({
    user: initialuser,
    detail: initialdetail,
    dispatch: (user?:user, detail?:detail) =>  {} 
});

const reducer = (state: initialState, action: dispacthProps) : initialState => {
  switch (action.type) {
    case "ADD_PROFILE":
      //koondisi add multi
    return {
      ...state,
      user: [...state.user ,  action.payload]

    }
    case "ADD_DETAIL":
      // kondisi add singgle
    return {
      ...state,
      detail: {
        address: action.payload?.address,
        no: action.payload?.no,
      }
    }
    default:
      throw new Error("Invalid Token");
  }
};
type DataContextPorps = {
  children: React.ReactNode;
};
// pusat data
export const DataContext = ({ children }: DataContextPorps) => {
  const [state, dispatch] = useReducer(reducer, initialStateStore);

  return (
    <>
      <AppContext.Provider
        value={{
          user:state.user,
          detail:state.detail,
          dispatch: (action: dispacthProps) => dispatch(action)
        }}
      >
        {children}
      </AppContext.Provider> 
    </>
  );
};