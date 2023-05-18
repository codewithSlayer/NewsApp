import React from 'react'

const Dark = (props) => {
    return (
        <>
            <div className="form-check form-switch mx-3 fixed-top" style={{ float: "right", marginTop:"70px" }} >
                <input className="form-check-input" style={{ cursor: "pointer" }} onClick={props.lightToDark} type="checkbox" id="flexSwitchCheckDefault" />
                <label className="form-check-label" style={{ cursor: "pointer" }} htmlFor="flexSwitchCheckDefault">Dark</label>
            </div>
        </>
    )
}

export default Dark