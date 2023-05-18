import React from 'react'

const Spinner = () => {
    return (
        <>
            <div className="container d-flex justify-content-center my-4">
                <div className="spinner-border text-primary " role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        </>
    )
}

export default Spinner
