import React, { useState, useEffect } from 'react';

const StatusComponentWithHooks = (props) => {

    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    useEffect(() => {
        setStatus(props.status)
    }, [props.status]);


    const activateEdit = () => {
        setEditMode(!editMode);
        props.updateStatusThunkCreate(status);
    }

    const onStatusChange = (e) => {

        let value = e.currentTarget.value;
        setStatus(value);

    }



    return <div>
        {!editMode &&
            <div onDoubleClick={activateEdit}>{status || "please enter status"}</div>
        }
        {
            editMode &&
            <input onBlur={activateEdit} autoFocus={true} onChange={onStatusChange} value={status}></input>
        }


    </div>
}

export default StatusComponentWithHooks