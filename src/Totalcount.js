import React, { Component } from 'react'

const Totalcount = (props) => {

    const styles = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }

    return (
        <div>
            <h3 style={styles} className="total-price">Total price : {props.total}</h3>

        </div>
    )
}
export default Totalcount;