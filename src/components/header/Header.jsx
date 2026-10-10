import React, { useState } from 'react'
import BrandIcon from '../common/icons/BrandIcon'
import NavBar1 from './NavBar1'
import IconHeaderRight from '../common/icons/IconHeaderRight'
import MenuIcon from '../common/icons/MenuIcon'
import MobileMenuModal from './MobileMenuModal'
const data = {
    Movies: [
        {
            ID: 0,
            Title: "Mr.",
            Description: "DefaultStringValue",
            Image: "0.20",
            GenreName: "Comedy",
            Director: "DefaultStringValue",
            Writer: "DefaultStringValue",
            Producer: "DefaultStringValue",
            ReleaseDate: "1967-01-01T00:00:00",
            Rating: 1,
            TrailerURI: "https://example.com",
            Genre: "Comedy"
        },
        {
            ID: 1,
            Title: "@@E5PrP",
            Description: "DefaultStringValue",
            Image: "1.20",
            GenreName: "Comedy",
            Director: "DefaultStringValue",
            Writer: "DefaultStringValue",
            Producer: "DefaultStringValue",
            ReleaseDate: "1967-01-01T00:00:00",
            Rating: 1,
            TrailerURI: "https://example.com",
            Genre: "Comedy"
        },
        {
            ID: 2,
            Title: "Ted 2",
            Description: "Newlywed couple Ted and Tami-Lynn want to have a baby.",
            Image: "ted2.jpg",
            GenreName: "Comedy",
            Director: "Seth MacFarlane",
            Writer: "Seth MacFarlane",
            Producer: "Jason Clark",
            ReleaseDate: "2015-06-27T00:00:00",
            Rating: 4,
            TrailerURI: "https://www.youtube.com/watch?v=S3AVcCggRnU",
            Genre: "Comedy"
        }
    ]
}



const Header = () => {
    const renderNavbar = () => {
        const arrNavbar = data.Movies.map((item) => {
            return (
                <NavBar1 key={item.id} item={item} />
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
