import React from "react";
import Button from "./Button";
import "../styles/EditModal.css"
import { useDispatch, useSelector } from "react-redux";
import { cancelModal, changeTitle, updateData } from "../store/actions/lists";

const EditModal = () => {
    const edit = useSelector(state => state.lists.isEdit);
    const data = useSelector(state => state.lists.editData);
    const dispatch = useDispatch();
    const change = (e) => {
        dispatch(changeTitle(e.target.value))
    }

    const close = () => {
        dispatch(cancelModal())
    }

    const update = () => {
        dispatch(updateData());
    }

    if(edit){
        return(
            <div className="modal-container">
                <div className="modal-box">
                    <h3>Edit Task</h3>
                    <div className="input">
                        <input type="text" value={data.title} onChange={change}/>
                    </div>
                    <div className="btn-group">
                        <Button text="ok" variant="primary" action={update}/>
                        <Button text="cancel" variant="warning" action={ () => close() }/>
                    </div> 
                </div>
            </div>
        )
    } else {
        return null;
    }
}

export default EditModal