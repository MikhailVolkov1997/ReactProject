const ADD_MESSAGE = 'ADD-MESSAGE';

let initialReducer = {
    arrayMessages: [
        { message: "Hello" },
        { message: "Bay" },
        { message: "Learn react" }
    ],
    arrayDialogs: [
        { name: "Mikhail", id: 1 },
        { name: "Sergei", id: 2 },
        { name: "Olga", id: 3 },
        { name: "Anya", id: 4 },
        { name: "Danil", id: 5 },
        { name: "Vadim", id: 6 }

    ],
}

const messagesReducer = (state = initialReducer, action) => {

    switch (action.type) {
        case ADD_MESSAGE:
            let add = {
                message: action.addMessageOnDialogs
            }

            return {
                ...state,
                arrayMessages: [...state.arrayMessages, add]
            }

        default: return state;
    }
}
export const AddMessegeActionCreate = (addMessageOnDialogs) => {
    return {
        type: ADD_MESSAGE,
        addMessageOnDialogs
    }
}

export default messagesReducer;