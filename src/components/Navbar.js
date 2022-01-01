import { Link } from "react-router-dom";
import './Navbar.css'
const Navbar = () => {
  return (

    <nav class="nav-container">
  <ul class="nav-list">
		<li class="nav-item">
      <a href="/">
			home
			<span></span>
			<span></span>
			<span></span>
			<span></span>
		</a></li>

		<li class="nav-item"><a href="/about">
			about
			<span></span>
			<span></span>
			<span></span>
			<span></span>
		</a></li>

		<li class="nav-item"><a href="/singleshow">
			services
			<span></span>
			<span></span>
			<span></span>
			<span></span>
		</a></li>

		
	</ul>
</nav>


    
  );
};

export default Navbar;



{/* <div className="navbar">
      <div className="container">
        <nav className="navbar__nav">
          <h3 className="nav__brand">
            <Link to="/">
              <i className="fas fa-video"></i> TV SHOW SEARCH
            </Link>
          </h3>
          <ul className="nav__links">
            <li className="links__link">
              <Link to="/">HOME</Link>
            </li>
            <li className="links__link">
              <Link to="/about">ABOUT</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div> */}