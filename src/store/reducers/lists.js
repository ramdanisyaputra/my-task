const initialState = {
    todos: [
        {
            id: 1,
            title: "reading a book"
        },
        {
            id: 2,
            title: "workout training"
        }
    ],
    isEdit: false,
    isDelete: false,
    editData: [
        {
            id:"",
            title: ""
        }
    ],
    deleteData: {
        id: ""
    }
}
const listReducer = (state = initialState, action) => {
    const {type, payload} = action
    switch(type){
        case "ADD":
            const newItem = {
                id: state.todos.length + 1,
                title: payload
            }
            return{
                ...state,
                todos: [...state.todos, newItem]
            }
        case "CONFIRMATION":
            return{
                ...state,
                isDelete: true,
                deleteData: {
                    id: payload
                }
            }
        case "CANCELDELETE":
            return{
                ...state,
                isDelete: false
            }
        case "DEL":
            return{
                ...state,
                todos: state.todos.filter(item => item.id !== payload),
                isDelete: false
            }
        case "EDIT":
            return{
                ...state,
                isEdit: true,
                editData: {
                    id: payload.id,
                    title: payload.title,
                }
            }
        case "CANCEL":
            return{
                ...state,
                isEdit: false
            }
        case "CHANGE":
            return{
                ...state,
                editData: {
                    ...state.editData,
                    title: payload
                }
            }
        case "UPDATE":
            const newData = {
                id: state.editData.id,
                title: state.editData.title,
            };
            const newTodos = state.todos.map((item) =>
                item.id === newData.id ? newData : item
            );
            
            return {
                ...state,
                todos: newTodos,
                isEdit: false,
                editData: {
                    id: "",
                    title: "",
                },
            };
            
        default:
            return state
    }
}

export default listReducer