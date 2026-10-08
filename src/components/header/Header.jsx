import React, { useState } from 'react'
import BrandIcon from '../common/icons/BrandIcon'
import NavBar1 from './NavBar1'
import IconHeaderRight from '../common/icons/IconHeaderRight'
import MenuIcon from '../common/icons/MenuIcon'
import MobileMenuModal from './MobileMenuModal'
const data = {
    navbarItems: [
        {
            id: 1,
            name: 'Shop',
            link: '#',
            dropdown: true,
            dropdownItems: [
                {
                    id: 1,
                    name: 'Men',
                    shoes: [
                        {
                            id: 101,
                            name: 'Air Runner',
                            brand: 'Nike',
                            shortDescription: 'Lightweight running shoes for everyday training.'
                        },
                        {
                            id: 102,
                            name: 'Ultraboost',
                            brand: 'Adidas',
                            shortDescription: 'Responsive cushioning for long-distance comfort.'
                        }
                    ]
                },
                {
                    id: 2,
                    name: 'Women',
                    shoes: [
                        {
                            id: 201,
                            name: 'Cloudswift',
                            brand: 'On',
                            shortDescription: 'A cushioned road shoe for daily runs.'
                        },
                        {
                            id: 202,
                            name: 'Fresh Foam 1080',
                            brand: 'New Balance',
                            shortDescription: 'Soft, supportive comfort for everyday wear.'
                        }
                    ]
                },
            ]
        },
        { id: 2, name: 'New Arrivals', link: '#', dropdown: false },
        { id: 3, name: 'Collections', link: '#', dropdown: false },
        { id: 4, name: 'About', link: '#', dropdown: false },
        { id: 5, name: 'Blog', link: '#', dropdown: false },
        { id: 6, name: 'Contact', link: '#', dropdown: false }
    ]
}



const Header = () => {
    const [isOpenDropdown, setIsOpenDropdown] = useState(false);
    const renderNavbar = () => {
    const arrNavbar = data.navbarItems.map((item) => {
        return (
            item.dropdown ? (
            <NavBar1 key={item.id} item={item} isOpen={isOpenDropdown} onMouseEnter={() => setIsOpenDropdown(true)}
  onMouseLeave={() => setIsOpenDropdown(false)}
                onToggle={() => setIsOpenDropdown((open) => !open)}
            />
            ) : (
            <NavBar1 key={item.id} item={item} />
            )
        )
    })
    return arrNavbar;
}
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
                    <div className='col-lg-7 d-none d-lg-flex justify-content-center gap-3'>
                        {renderNavbar()}
                    </div>
                    <div className='header_right col-lg-3 col-4 d-flex justify-content-end'>
                        <IconHeaderRight />
                    </div>
                </div>
                <div id="mobileMenuCollapse" className="collapse">
                    <MobileMenuModal renderNavbar={renderNavbar} />
                </div>
            </div>
        </header>
    )
}

export default Header
