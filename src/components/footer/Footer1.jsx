import React from 'react'
import BrandIconFooter from '../common/icons/BrandIconFooter'
import FooterColumn1 from './FooterColumn1'
import FooterTitle from './FooterTitle'
import MethodCart from './MethodCart'
import SocialMedia from './SocialMedia'

const Footer1 = () => {
    const data = {
        socialMedia: [
            {
                id: 1,
                name: "Instagram",
                url: "https://cdn.simpleicons.org/instagram/ffffff",
                link: "https://www.instagram.com/"
            },
            {
                id: 2,
                name: "Facebook",
                url: "https://cdn.simpleicons.org/facebook/ffffff",
                link: "https://www.facebook.com/"
            },
            {
                id: 3,
                name: "GitHub",
                url: "https://cdn.simpleicons.org/github/ffffff",
                link: "/"
            },
            {
                id: 4,
                name: "TikTok",
                url: "https://cdn.simpleicons.org/tiktok/ffffff",
                link: "https://www.tiktok.com/"
            },
            {
                id: 5,
                name: "YouTube",
                url: "https://cdn.simpleicons.org/youtube/ffffff",
                link: "https://www.youtube.com/"
            }
        ],
        methodcart: [
            {
                id: 1,
                name: "VISA",
                url: "https://cdn.simpleicons.org/visa",
                link: "/linkdemo"
            },
            {
                id: 2,
                name: "Mastercard",
                url: "https://cdn.simpleicons.org/mastercard",
                link: "/linkdemo"
            },
            {
                id: 3,
                name: "PayPal",
                url: "https://cdn.simpleicons.org/paypal",
                link: "/linkdemo"
            },
            {
                id: 4,
                name: "Apple Pay",
                url: "https://cdn.simpleicons.org/applepay/ffffff",
                link: "/linkdemo"
            },
            {
                id: 5,
                name: "Google Pay",
                url: "https://cdn.simpleicons.org/googlepay",
                link: "/linkdemo"
            }
        ],
        title: [
            {
                id: 1,
                title: "Quick Links"
            },
            {
                id: 2,
                title: "Customer Care"
            },
            {
                id: 3,
                title: "Newsletter"
            }
        ],
        quickLink: [
            {
                id: 1,
                name: "Shop",
                url: "/"
            },
            {
                id: 2,
                name: "New Arrivals",
                url: "/"
            },
            {
                id: 3,
                name: "Collections",
                url: "/"
            },
            {
                id: 4,
                name: "About Us",
                url: "/"
            },
            {
                id: 5,
                name: "Blog",
                url: "/"
            },
            {
                id: 6,
                name: "Contact",
                url: "/"
            },
        ],
        customerCare: [
            {
                id: 1,
                name: "Shipping Policy",
                url: "/"
            },
            {
                id: 2,
                name: "Return & Refund",
                url: "/"
            },
            {
                id: 1,
                name: "Size Guide",
                url: "/"
            },
            {
                id: 1,
                name: "FAQs",
                url: "/"
            },
            {
                id: 1,
                name: "Term & Conditions",
                url: "/"
            },
            {
                id: 1,
                name: "Private & Policy",
                url: "/"
            },
        ]
    }
    const renderRow = () => {
        const arrRow = data.title.map((item) => {
            return (
                <div className='col-3'>
                    <FooterTitle key={item.id} item={item} />
                </div>
            )
        })
        return arrRow;
    }

    const renderColumn = (items) => {
        const arrColumn = items.map((item) => {
            return (
                <FooterColumn1 key={item.id} item={item} />
            )
        })
        return arrColumn;
    }
    const renderMethodCart = () => {
        const arrMethodCart = data.methodcart.map((item) => {
            return (
                <MethodCart key={item.id} item={item} />
            )
        })
        return arrMethodCart;
    }
    const renderSocialMedia = () => {
        const arrSocialMedia = data.socialMedia.map((item)=>{
            return (
                <SocialMedia key={item.id} item={item}/>
            )
        })
        return arrSocialMedia;
    }
    return (
        <footer style={{ background: "#0e1b1f" }}>
            <div className='container'>
                <div className='row footer_title' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <div className='col-3 p-3'>
                        <a href='/'>
                            <BrandIconFooter />
                        </a>
                    </div>
                    {renderRow(data.title)}
                </div>
                <div className='row footer_content'>
                    <div className='col-3'>
                        <p className="text-white">My journey, my choices.
                            Follow your passion, stay strong through hard times.
                            Keep trying today, and thank yourself tomorrow.
                        </p>
                        <div className='socal_media d-flex'>
                            {renderSocialMedia()}
                        </div>
                    </div>
                    <div className='col-3'>
                        {renderColumn(data.quickLink)}
                    </div>
                    <div className='col-3'>
                        {renderColumn(data.customerCare)}
                    </div>
                    <div className='col-3'>
                        <p className="text-white text-decoration-none">Subscribe to get special offers, free giveaways and once-in-a-lifetime deals.</p>
                        <form style={{ position: "relative" }}>
                            <input
                                type="email"
                                name="email"
                                placeholder="Enter your email address"
                                required
                                style={{ borderRadius: "8px" }}
                                className='w-100 p-3 border-0'
                            />
                            <button type="submit" aria-label="Subscribe" className='border-0' style={{ background: "#f55f8d", position: "absolute", right: "8px", top: "50%", transform: "translateY(-50%)", width: "40px", height: "40px", borderRadius: "6px" }}>
                                <i className="fa-solid fa-arrow-right"></i>
                            </button>
                        </form>
                        <div className='method_cart d-flex gap-3 p-3'>
                            {renderMethodCart()}
                        </div>

                    </div>
                </div>
                <hr className="border-white opacity-25" />
                <div className='row' style={{ color: "white" }}>
                    <div className='col-6'>
                        © 2026 TrendSol. All rights reserved.
                    </div>
                    <div className='col-6 text-end'>
                        <span>Style</span>
                        <span className='p-3'>/</span>
                        <span>Comfort</span>
                        <span className='p-3'>/</span>
                        <span>Confidence</span>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer1
