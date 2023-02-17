import React from 'react'

const Card = ({ name, email, id }) => {
    return (
        <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img src={`https://robohash.org/${id}?200x200`} alt="hello" />
            <div>
                <h2>{name}
                </h2>
            </div>
            <p>{email}</p>
        </div>
    )
}

export default Card
