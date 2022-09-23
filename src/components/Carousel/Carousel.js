import React from 'react';
import './Carousel.css';

const Carousel = (props) => {
    return (
        <div className='carousel' data-section={props.section}>
            <ul className='carousel__track'>
            {
                props.children.map((child, i) => {
                    return (
                        <li className='carousel__slide' key={i}>
                            {child}
                        </li>
                    )
                })
            }
            </ul>
        </div>
    )
}

export default Carousel