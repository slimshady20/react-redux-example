import {createAction, handleAction} from "redux-actions";
// CHANGE_INPUT, INSERT, TOGGLE, REMOVE
const CHANGE_INPUT = 'todos/CHANGE_INPUT'
const INSERT = 'todos/INSERT'
const TOGGLE = 'todos/TOGGLE'
const REMOVE = 'todos/REMOVE'

export const change_input = createAction(CHANGE_INPUT)
export const insert= createAction(INSERT)
export const toggle = createAction(TOGGLE)
export const remove = createAction(REMOVE)

const initialState = {}

const todosReducer= handleAction(
    {
        [CHANGE_INPUT]:(state,action)=>({}),
        [INSERT]:(state,action)=>({}),
        [TOGGLE]:(state,action)=>({}),
        [REMOVE]:(state,action)=>({}),
    },
    initialState
)
export default todosReducer