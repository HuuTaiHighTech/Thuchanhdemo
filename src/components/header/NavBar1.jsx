import React, { useState } from 'react'
import ArrowBelow from '../common/icons/ArrowBelow';

const NavBar1 = (props) => {
    const {item} = props;
    return (
        <ul className='list-unstyled mb-0'>
            <li className='dropdown'>Thế loại phim
                <ul className='dropdown-content'>
                    <li>{item.Genre}</li>
                </ul>
            </li>
            <li>Lịch chiếu</li>
            <li>Rạp chiếu</li>
            <li>Khuyễn mãi</li>
        </ul>
    )
}

export default NavBar1
