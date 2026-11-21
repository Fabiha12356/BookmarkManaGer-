import React from 'react'
import { Link  } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import Verify from './Verify'

import "./Hero.css"
const Hero = () => {
const navigate = useNavigate("")

const move = ()=>{
navigate("/Verify" ,{
    state: {condition : true}
})
}

const nextMove = ()=>{
  navigate("/bookmarks");
}

  return (
  <section className="hero">

      <div className="hero-content">
        <span className="hero-tag">
          ✦ Your Personal Bookmark Space
        </span>

        <h1>
          Save Your Links.
          <span> Find Them Anytime.</span>
        </h1>

        <p>
          Keep all your favorite websites in one place.
          Organize, manage and access your bookmarks
          whenever you need them.
        </p>

        <div className="hero-buttons">
          {/* <Link to={'/started'} className="get-started">
            Get Started →
          </Link> */}

          <button onClick={move} className='get-started'>  Get Started →</button>

          {/* <Link to='/explore' className="explore-btn">
            Explore Bookmarks
          </Link> */}

          <button onClick={nextMove} className="explore-btn"> Explore Bookmarks</button>
        </div>

        <div className="hero-bottom">
          <span>✦ Easy to Organize</span>
          <span>✦ Quick Access</span>
          <span>✦ Save Favorites</span>
        </div>
      </div>

      <div className="hero-visual">
        <div className="visual-heading">
          <span>My Collection</span>
          <span>•••</span>
        </div>

        <div className="bookmark-item">
          <div className="site-icon purple">G</div>
          <div>
            <h4>Google</h4>
            <small>google.com</small>
          </div>
          <span className="heart">♥</span>
        </div>

        <div className="bookmark-item">
          <div className="site-icon dark">⌘</div>
          <div>
            <h4>GitHub</h4>
            <small>github.com</small>
          </div>
          <span className="heart">♥</span>
        </div>

        <div className="bookmark-item">
          <div className="site-icon pink">▶</div>
          <div>
            <h4>YouTube</h4>
            <small>youtube.com</small>
          </div>
          <span className="heart">♥</span>
        </div>

        <div className="bookmark-item">
          <div className="site-icon blue">✦</div>
          <div>
            <h4>Stack Overflow</h4>
            <small>stackoverflow.com</small>
          </div>
          <span className="heart">♥</span>
        </div>

        <div className="visual-footer">
          <span>✦ Your links, all in one place</span>
        </div>
      </div>

    </section>
  )
}

export default Hero