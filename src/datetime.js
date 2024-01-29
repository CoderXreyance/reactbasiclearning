import React from 'react'

const datetime = () => {

    const localDate = new Date().toLocaleDateString();
    const localTime = new Date().toLocaleTimeString();

    return (
        <>
            <h3>
                Date is {localDate} <br></br>
                Time is {localTime} <br></br>
            </h3>
        </>
    )
}

export default datetime;