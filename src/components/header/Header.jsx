import React from 'react'
import BrandIcon from '../common/icons/BrandIcon'
import SearchIcon from '../common/icons/SearchIcon'
import UserIcon from '../common/icons/UserIcon'
import HeartIcon from '../common/icons/HeartIcon'
import CartIcon from '../common/icons/CartIcon'
import NavBar1 from './NavBar1'
import IconHeaderRight from '../common/icons/IconHeaderRight'
import MenuIcon from '../common/icons/MenuIcon'
const data = {
    navbarItems: [
        {
            id: 1,
            name: 'Shop',
            link: '#',
            dropdown: true,
            dropdownItems: [
                { id: 1, name: 'Men', link: '#' },
                { id: 2, name: 'Women', link: '#' },
            ]
        },
        { id: 2, name: 'New Arrivals', link: '#', dropdown: false },
        { id: 3, name: 'Collections', link: '#', dropdown: false },
        { id: 4, name: 'About', link: '#', dropdown: false },
        { id: 5, name: 'Blog', link: '#', dropdown: false },
        { id: 6, name: 'Contact', link: '#', dropdown: false }
    ]
}

const renderNavbar = () => {
    const arrNavbar = data.navbarItems.map((item) => {
        return (
            <NavBar1 key={item.id} item={item} />
        )
    })

    return arrNavbar;
}

const Header = () => {
    return (
        <header className="header">
            <div className='container'>
                <div className='row align-items-center p-3'>
                    <div className='col-lg-2 col-8 px-2'>
                        <div className='d-flex align-items-center'>
                            <div className='d-block d-lg-none'>
                                <MenuIcon />
                            </div>
                            <BrandIcon />
                        </div>
                    </div>
                    <div className='col-lg-7 d-none d-lg-flex justify-content-center'>
                        {renderNavbar()}
                    </div>
                    <div className='header_right col-lg-3 col-4 d-flex justify-content-end'>
                        <IconHeaderRight />
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
