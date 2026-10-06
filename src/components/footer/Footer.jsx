import BrandIconFooter from '../common/icons/BrandIconFooter'
import FooterColumn from './FooterColumn'

const Footer = () => {
    const dataColumns = [
        {
            id: "our-links",
            title: "Our links",
            items: [
                {
                    item_content: "Home",
                    url: "/"
                },
                {
                    item_content: "Shop",
                    url: "/"
                },
                {
                    item_content: "New Arrival",
                    url: "/"
                },
                {
                    item_content: "Collection",
                    url: "/"
                },
                {
                    item_content: "About Us",
                    url: "/"
                },
                {
                    item_content: "Blog",
                    url: "/"
                },
                {
                    item_content: "Contact",
                    url: "/"
                }
            ]
        },
        {
            id: "customer-care",
            title: "Customer Care",
            items: [
                {
                    item_content: "Shipping Policy",
                    url: "/"
                },
                {
                    item_content: "Return & refund",
                    url: "/"
                },
                {
                    item_content: "Size Guide",
                    url: "/"
                },
                {
                    item_content: "FAQs",
                    url: "/"
                },
                {
                    item_content: "Term & Conditions",
                    url: "/"
                },
                {
                    item_content: "Privacy & policy",
                    url: "/"
                },
            ]
        },
    ]
    const renderColumn = () => {
        const footerColumn = dataColumns.map((item) => {
            return (
                <div className='col-3' key={item.id}>
                    <FooterColumn item={item} />
                </div>
            );
        });
        return footerColumn;
    }
    return (
        <footer style={{ background: "#0e1b1f" }}>
            <div className='container'>
                <div className='row'>
                    <div className='col-3'>
                        <a href="#">
                            <BrandIconFooter />
                        </a>
                        <p className="text-white">My journey, my choices.
                            Follow your passion, stay strong through hard times.
                            Keep trying today, and thank yourself tomorrow.
                        </p>
                        <div className='socal_media'>
                            <div className="text-white">
                                <i className="fa-brands fa-instagram" />
                                <i className="fa-brands fa-square-facebook" />
                                <i className="fa-brands fa-square-linkedin" />
                                <i className="fa-brands fa-tiktok" />
                                <i className="fa-brands fa-youtube" />
                            </div>
                        </div>
                    </div>
                    {renderColumn()}
                    <div className="col-3" style={{ color: "white" }}>
                        <h4>Newsletter</h4>
                        <p>Subscribe to get special offers, free giveaways and once-in-a-lifetime deals.</p>
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
                        <i className="fa-brands fa-cc-visa"></i>
                        <i className="fa-brands fa-cc-mastercard"></i>
                        <i className="fa-brands fa-cc-paypal"></i>
                        <i className="fa-brands fa-cc-apple-pay"></i>
                        <i className="fa-brands fa-google-pay"></i>
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

export default Footer
