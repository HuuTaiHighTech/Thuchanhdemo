import React from 'react'
import ArrowBelow from '../common/icons/ArrowBelow';

const NavBar1 = (props) => {
    const { item } = props;
  return (
    <ul className='list-unstyled d-inline mb-0'>
        <li className='d-inline' style={{padding: "20px 10px"}}>
            <a href={item.link} className='text-decoration-none text-black'>
                {item.name}
            </a>
            {item.dropdown && <ArrowBelow />}
        </li>
    </ul>
  )
}

export default NavBar1
