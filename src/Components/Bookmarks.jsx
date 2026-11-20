import React from 'react'
import "./Bookmark.css"
const Bookmarks = () => {
  return (
    <div className="bookmarks-page">

      <div className="bookmark-header">
        <div>
          <span className="bookmark-tag">✦ YOUR COLLECTION</span>
          <h1>My Bookmarks</h1>
          <p>All your favorite websites, saved in one place.</p>
        </div>

        <button className="add-bookmark-btn">
          + Add Bookmark
        </button>
      </div>

      <div className="bookmark-tools">

        <input
          type="text"
          placeholder="🔍 Search your bookmarks..."
          className="bookmark-search"
        />

        <select className="category-select">
          <option>All Categories</option>
          <option>Development</option>
          <option>Education</option>
          <option>Entertainment</option>
          <option>Design</option>
          <option>Other</option>
        </select>

      </div>

      <div className="bookmark-empty">

        <div className="empty-icon">🔖</div>

        <h2>No Bookmarks Yet!</h2>

        <p>
          Start saving your favorite websites and
          keep everything organized in one place.
        </p>

        <button className="empty-add-btn">
          + Add Your First Bookmark
        </button>

      </div>

    </div>
  )
}

export default Bookmarks