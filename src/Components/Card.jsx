import React from 'react'
import { useState } from 'react'

import "./Card.css"

const Card = ({item}) => {
    let [show , setShow ] = useState([])

  return (
          <div className="saved-card" key={item.id}>

            <div className="saved-card-top">
              <span className="category-tag">
                {item.category}
              </span>

              <span className="bookmark-icon">✦</span>
            </div>

            <h3>{item.recipename}</h3>

            <p className="saved-description">
              {item.description}
            </p>

            <div className="saved-card-bottom">

              <a
                href={item.URL}
                target="_blank"
                rel="noreferrer"
              >
                Visit Website ↗
              </a>

            </div>

          </div>

        

    
  )
}

export default Card