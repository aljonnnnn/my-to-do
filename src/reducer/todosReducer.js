export const initalTodosState = [
    {
        id: 1,
        task: 'Learn Redux',
        complete: true
    },
    {
        id: 2,
        task: 'Learn Tailwind',
        complete: false
    },
    {
        id: 3,
        task: 'Learn Next js',
        complete: false
    },
    {
        id: 4,
        task: 'Learn TypeScript',
        complete: false
    }
]


export const todosReducer = (state, action) => {
    switch(action.type) {
        case 'ADD_TODO':
            return [
                ...state,
                {
                    id: Math.floor(Math.random() * 5000),
                    task: action.payload,
                    complete: false
                }
            ]
        case 'DELETE_TODO':
            return state.filter(todo => todo.id !== action.payload)
        case 'TOGGLE_TODO':
            return state.map(todo => todo.id === action.payload ? {...todo, complete: !todo.complete} : todo)
        default: return state
    }
}