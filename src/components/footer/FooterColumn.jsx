const FooterColumn = (props) => {
    const { item } = props;

    const renderItems = () => {
        return item.items.map((link) => {
            return (
                <p key={link.item_content}>
                    <a href={link.url} className="text-white text-decoration-none">
                        {link.item_content}
                    </a>
                </p>
            );
        });
    };

    return (
        <>
            <h4 className="text-white">{item.title}</h4>
            {renderItems()}
        </>
    );
}

export default FooterColumn
