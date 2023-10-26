import { reducerActionType } from '../../src/types/reducerActiontype'

export type UserType = {
    name: string;
    email: string;
    password: string;
}

export const userInitialState: UserType = {
    name: '',
    email: '',
    password: ''
}

export const userReducer = (state: UserType, action: reducerActionType) => {
    switch(action.type) {
        case'CHANGE_NAME': 
            return {...state, name: action.payload.name};
        break
        case'CHANGE_EMAIL': 
            return {...state, email: action.payload.email};
        break
        case'CHANGE_NAME': 
            return {...state, password: action.payload.password};
        break
    }

    return state;
}