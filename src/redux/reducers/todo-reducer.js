const initialState = {
    todos: [
        {id: 1, value: "belajar react"},
        {id: 2, value: "belajar redux"},
    ],
}

function todoReducer (state = initialState, action) {
    switch (action.type){
        default: return state
    }
}

export default todoReducer