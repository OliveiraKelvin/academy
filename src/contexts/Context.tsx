import { ReactNode, createContext, useReducer } from "react";

import { UserType, userInitialState, userReducer} from '../reducer/userReducer';
import { reducerActionType } from "../types/reducerActiontype";

type initialStateType = {
    user: UserType;    
}

type ContextType = {
    state: initialStateType,
    dispatch: React.Dispatch<any>,
}

const initalState = {
    user: userInitialState
}

export const Context = createContext<ContextType>({
    state: initalState,
    dispatch: () => null
});

const mainReducer = (state: initialStateType, action: reducerActionType) =>({
    user: userReducer(state.user, action)
})


interface Props {
    children?: React.ReactNode;
  }

export const ContextProvider: React.FC<Props> = ({ children }) => {
    const [state, dispatch] = useReducer(mainReducer, initalState);

    return (
        <Context.Provider value={{state, dispatch}}>
           { children }
        </Context.Provider>
    )
}
