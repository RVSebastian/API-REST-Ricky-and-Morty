import React from 'react'

export function Characters({ characters = [] }) {
    return (
        <div className='row'>
            {
                characters.map((item, index) => (
                    <div key={index} className='col'>
                        <div className='card bg-dark mt-4 text-light border' style={{ minWidth: "200px" }}>
                            <img src={item.image} alt="" />
                            <div className='card-boby'>
                                <h5 className='card-title'>{item.name}</h5>
                            </div>
                            <h5 className='card-title' id={item.status} >{item.status}</h5>
                            <h5 className='card-title'>{item.origin.name}</h5>
                        </div>
                    </div>
                ))
            }

        </div>
    )
}
