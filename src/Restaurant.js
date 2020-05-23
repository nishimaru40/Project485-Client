import React from 'react'
const Restaurant = ({ match }) => {
    return (
        <div>
            <h1>ร้าน</h1>
            <p>{match.params.id}</p>
        </div>
    )
}

export default Restaurant; 