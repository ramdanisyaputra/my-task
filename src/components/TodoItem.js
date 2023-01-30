import React from "react";
import Button from "./Button";

const TodoItem = () => {
    return (
        <div style={todoItem}>
            <p>title item</p>
            <div>
                <Button/>
                <Button/>
            </div>
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
    margin: "0.5 rem 0"
}