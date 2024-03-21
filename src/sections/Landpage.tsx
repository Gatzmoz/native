import "./Landpage.css";
import image1 from "../assets/img/destinations/image-1.jpg";
import image2 from "../assets/img/destinations/image-2.jpg";
import image3 from "../assets/img/destinations/image-3.jpg";
import image4 from "../assets/img/destinations/image-4.jpg";

const Landpage = () => {
	return (
		<>
			<section className="welcome-sect">
				<div className="welcome-text">
					<h1>Explore and Travel</h1>
					<h1>Indonesia</h1>
				</div>
				<div className="welcome-picts">
					<img src={image1} alt="" className="welcome-pict" />
					<img src={image2} alt="" className="welcome-pict" />
					<img src={image3} alt="" className="welcome-pict" />
					<img src={image4} alt="" className="welcome-pict" />
				</div>
			</section>
		</>
	);
};

export default Landpage;
