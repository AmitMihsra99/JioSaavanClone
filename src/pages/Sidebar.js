import "./pagecss.css";
import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div>
    <div className="drawer">
    <div className="section">
      <h3 className="head">BROWSE</h3>
      <ul>
        <li>
          <Link className="linksbar"  to="/podcast">New Releases</Link>
        </li>
        <li>
          <Link className="linksbar" to="/podcast">Top Charts</Link>
        </li>
        <li>
          <Link className="linksbar" to="/podcast">Top Playlist</Link>
        </li>
        <li>
          <Link className="linksbar" to="/podcast">Podcasts</Link>
        </li>
        <li>
          <Link className="linksbar" to="/podcast">Top Artists</Link>
        </li>
        {/* Add more links as needed */}
      </ul>
    </div>
    <div className="section">
      <h3 className="head">LIBRARY</h3>
      <ul>
        <li>
        🕐 <Link className="linksbar" to="/podcast">Histroy</Link>
        </li>
        <li>
        ♬ <Link className="linksbar" to="/podcast">Songs</Link>
        </li>
        <li>
        ♪♪ <Link className="linksbar" to="/podcast">Albums</Link>
      </li>
      <li>
      𝄞 <Link className="linksbar" to="/podcast">Podcast</Link>
    </li>
    <li>
    𝄡 <Link className="linksbar" to="/podcast">Artists</Link>
    </li>
        {/* Add more links as needed */}
      </ul>
    </div>
    <button className="sidebarbtn">+New Playlist</button>
  </div>
     
    </div>
  )
}

export default Sidebar
