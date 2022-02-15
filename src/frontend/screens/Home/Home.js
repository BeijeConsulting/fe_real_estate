import React from "react";
import "./Home.css"

// COMPONENTS
import Navbar from '../../components/Navbar/Navbar'
import Search from "../../components/Search/Search";
import Footer from '../../components/Footer/Footer'


const Home = (props) => {

	return (
		<div className='home-container'>
			<div className=' h-screen flex flex-col'>
				<Navbar fixed />
				<Search />
			</div>
			<div className='h-screen'>
				sncd slide
			</div>
			<Footer />
		</div>
	)
};

export default Home;
