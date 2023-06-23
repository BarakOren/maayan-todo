import { useState } from "react";

const EditModal = (props) => {

    const {handleEditSubmit, setEditToggle, handleEditChange, editInput, setEditInput} = props
    
    return <div className="editModal">
        <div className="editModalCenterDiv">
     
        <input 
        type="text"
        value={editInput}
        onChange={handleEditChange}
        />

        <button onClick={() => handleEditSubmit()}>Edit</button>

        </div>
    </div>
}

export default EditModal