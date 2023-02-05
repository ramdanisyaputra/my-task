import React from "react";
import Button from "./Button";
import "../styles/EditModal.css";
import PropTypes from 'prop-types';

class DeleteModal extends React.Component {
    render(){
        const { isDelete, close, data, del } = this.props;
        if(isDelete){
            return(
                <div className="modal-container">
                    <div className="modal-box">
                        <h3>Delete Task</h3>
                        <div className="btn-group" style={{marginTop: '1rem'}}>
                            <Button text="ok" variant="primary" action={ () => del(data.id) }/>
                            <Button text="cancel" variant="warning" action={close}/>
                        </div>
                    </div>
                </div>
            )
        }else{
            return null;
        }
    }
}

DeleteModal.propTypes = {
    isDelete: PropTypes.bool.isRequired,
    close: PropTypes.func.isRequired,
    data: PropTypes.object.isRequired,
    del: PropTypes.func.isRequired,
}

export default DeleteModal