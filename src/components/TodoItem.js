import React from "react";
import Button from "./Button";
import { useSelector, useDispatch } from "react-redux";
import { confirmation, edit } from "../store/actions/lists";

const TodoItem = () => {
    const todos = useSelector(state => state.lists.todos);
    const dispatch = useDispatch()
    const openConfirmation = id => {
        dispatch(confirmation(id))
    }

    const open = ( id, title ) => {
        dispatch(edit(id, title))
    }

    return (
        <div>
            {todos.map(item => 
                <div style={todoItem} key={item.id}>
                    <p>{item.title}</p>
                    <div>
                        <Button text="edit" variant="success" action={ () => open(item.id, item.title) }/>
                        <Button text="delete" variant="warning" action={ () => openConfirmation(item.id) }/>
                    </div>
                </div>
            )}
        </div>
    )
}

export default TodoItem;

const todoItem = {
    background: "#2da4f8",
    color: "#fff",
    display: "flex",
    alignItems: "center",
    height: "3rem",
    padding: "0 1rem",
    justifyContent: "space-between",
    margin: "0.5rem 0"
}