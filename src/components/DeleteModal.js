import React from "react";
import Button from "./Button";
import "../styles/EditModal.css";
import { useDispatch, useSelector } from "react-redux";
import { cancelModalDelete, del } from "../store/actions/lists";

const DeleteModal = () => {
    const isDelete = useSelector(state => state.lists.isDelete);
    const data = useSelector(state => state.lists.deleteData);
    const dispatch = useDispatch()
    const deleteData = id => {
        dispatch(del(id))
    }

    const cancel = id => {
        dispatch(cancelModalDelete(id))
    }

    if(isDelete){
        return(
            <div className="modal-container">
                <div className="modal-box">
                    <h3>Delete Task</h3>
                    <div className="btn-group" style={{marginTop: '1rem'}}>
                        <Button text="ok" variant="primary" action={ () => deleteData(data.id) }/>
                        <Button text="cancel" variant="warning" action={ () => cancel() }/>
                    </div>
                </div>
            </div>
        )
    }else{
        return null;
    }
}

export default DeleteModal