import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Button from "./Button";
import "../styles/FormInput.css"
import { add } from "../store/actions/lists";

const FormInput = () => {
    const [text, setText] = useState("");
    const dispatch = useDispatch()
    const handleChange = e => {
        setText(e.target.value)
    }
    
    const submit = (e) => {
        e.preventDefault()
        dispatch(add(text))
        setText("")
    }

    return (
        <form style={inputForm} onSubmit={submit}>
            <input 
                type="text"
                onChange={handleChange}
                value={text}
                style={input}
                placeholder="Add Task"
            />
            <Button text="add" variant="primary"/>
        </form>
    )
}

export default FormInput;

const inputForm = {
    background: "#fff",
    color: "#fff",
    display: "flex",
    alignItems: "center",
    height: "3rem",
    padding: "0 1rem",
    justifyContent: "space-between",
    margin: "0.5rem 0"
}

const input = {
    width: "70%",
    border: "none",
}