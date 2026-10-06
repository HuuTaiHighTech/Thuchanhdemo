import React from 'react'

const FooterColumn1 = ({ item }) => {
  return (
    <p>
      <a href={item.url} className="text-white text-decoration-none">
        {item.name}
      </a>
    </p>
  )
}

export default FooterColumn1
