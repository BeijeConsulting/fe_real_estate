import React from "react";

// Css
import "./Home.css"

// COMPONENTS
import Navbar from '../../components/Navbar/Navbar';
import Search from "../../components/Search/Search";
import Footer from '../../components/Footer/Footer';
import Illustrations from '../../components/Illustrations/Illustrations';
import Carousel2 from "../../components/Carousel/Carousel2";




const Home = (props) => {

	return (
		<div className="fixed-background">
		<div className='home-container'>
			<div className=' h-screen flex flex-col'>
				<Navbar fixed />
				<Search />
			</div>
			<Illustrations
				className='illustrations-container' />

			<Carousel2 />
			
			<div className='h-screen'>
				sncd slide
			</div>
			<Footer />
		</div>
		</div>
	)
};

export default Home;
