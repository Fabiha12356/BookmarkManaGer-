import React from 'react'


const Favorite = ({show,showSet,favrt,setFavrt}) => {
  return (
  <div className="saved-bookmarks">

  <div className="saved-heading">
    <div>
      <h2>My Bookmarks</h2>
      <p>All your saved websites in one place.</p>
    </div>
  </div>

  <div className="bookmark-grid">

    {favrt.map((item) => (

      <div className="saved-card" key={item.id}>

        <div className="saved-card-top">
          <span className="category-tag">
            {item.category}
          </span>

        
          {/* <button className='bookmark-icon light' onClick={()=> favIcon(item)}>
            <i  className={  `fa solid fa-heart
         ${favrt.some((card)=> card.id === item.id ) ? "dark" : "light"}`
            }></i>
          </button> */}
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

          <div className="bookmark-actions">

            {/* <button type="button" onClick={()=> editBTn(item)} className="edit-btn">
              ✎ Edit
            </button>

            <button type="button" onClick={()=> deleteBtn(item)} className="delete-btn">
              🗑 Delete
            </button> */}

          </div>

        </div>

      </div>

    ))}

  </div>

</div>
   
  )
}

export default Favorite