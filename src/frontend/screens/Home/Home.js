import React from "react";
import "./Home.css"

// COMPONENTS
import Navbar from '../../components/Navbar/Navbar'
import Search from "../../components/Search/Search";

const Home = (props) => {

	return (
		<div className='home-container'>
			<div className=' h-screen flex flex-col'>
				<Navbar />
				<Search />
			</div>
			<div className='h-screen'>
				sncd slide
			</div>

		</div>
	)
};

export default Home;
