export const add = (title) => {
    return{
        type: "ADD",
        payload: title
    }
}

export const del = (id) => {
    return{
        type: "DEL",
        payload: id
    }
}

export const confirmation = (id) => {
    return{
        type: "CONFIRMATION",
        payload: id
    }
}

export const cancelModalDelete = () => {
    return{
        type: "CANCELDELETE",
        payload: null
    }
}

export const edit = ( id, title ) => {
    return{
        type: "EDIT",
        payload: { id, title }
    }
}

export const cancelModal = () => {
    return{
        type: "CANCEL",
        payload: null
    }
}

export const changeTitle = (title) => {
    return{
        type: "CHANGE",
        payload: title
    }
}

export const updateData = () => {
    return{
        type: "UPDATE",
        payload: null
    }
}