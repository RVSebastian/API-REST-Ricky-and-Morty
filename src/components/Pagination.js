import React from 'react'

const Pagination = ({onPrevious, onNext, prev, next}) => {

    const handlePrevious = () => {
        onPrevious();
    }
    const handleNext = () => {
        onNext();
    }
    return (
        <nav>
            <ul className='pagination justify-content-center'>
                {prev ? (
                    <li className='page-item'>
                        <button className='page-link bg-dark text-light' onClick={handlePrevious}>Previus Page</button>
                    </li>
                ) : null}
                {next ? (
                    <li className='pge-item'>
                        <button className='page-link bg-dark text-light' onClick={handleNext}>Next Page</button>
                    </li>
                ) : null}

            </ul>
        </nav>
    )
}

export default Pagination