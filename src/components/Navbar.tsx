import { CiGlobe } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";
import "./Navbar.css";

const Navbar = () => {
	return (
		<nav className="navbar">
			<div className="navbar-brand text-4xl">
				<span>Native.</span>
			</div>
			<div className="navbar-links">
				<a href="" className="navbar-link active">
					Home
				</a>
				<a href="" className="navbar-link">
					Destinations
				</a>
				<a href="" className="navbar-link">
					Gallery
				</a>
				<a href="" className="navbar-link">
					Story
				</a>
				<a href="" className="navbar-link lang">
					<CiGlobe />
					<IoIosArrowDown />
				</a>
			</div>
		</nav>
	);
};

export default Navbar;
