import { ADD_TODO, DELETE_TODO, TOGGLE_TODO } from "./todoTypes"

const initialState = [
    {
        id: 1,
        task: 'Learn Redux',
        done: false
    },
    {
        id: 2,
        task: 'Learn Tailwind',
        done: false
    },
    {
        id: 3,
        task: 'Learn Next js',
        done: false
    },
    {
        id: 4,
        task: 'Learn TypeScript',
        done: false
    }
]
// asdad

export const todoReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_TODO:
            return [
                ...state,
                {
                    id: Math.floor(Math.random() * 5000),
                    task: action.payload,
                    done: false
                }
            ]
        case DELETE_TODO:
            return state.filter(todo => todo.id !== action.payload)
        case TOGGLE_TODO:
            return state.map(todo => todo.id === action.payload ? {...todo, done: !todo.done} : todo)
        default: return state
    }
}