import React from "react";

// Css
import "./Home.css"

// COMPONENTS
import Navbar from '../../components/Navbar/Navbar';
import Search from "../../components/Search/Search";
import Footer from '../../components/Footer/Footer';
import Illustrations from '../../components/Illustrations/Illustrations';
import Carousel2 from "../../components/Carousel/Carousel2";
import BlueSection from "../../components/BlueSection/BlueSection";



const Home = (props) => {

	return (
		<div className="fixed-background">
		<div className='home-container'>
			<Navbar fixed />

			<div className=' h-screen flex flex-col'>
				<Search />
			</div>
			<Illustrations
				className='illustrations-container' />

			<Carousel2 />
			
			<div className='h-screen'>
			
				
			</div>
			
			<BlueSection 
			className='bluesection-container'
			text='PUBBLICA ANNUNCI GRATUITAMENTE'
			subtext="Inserisci i tuoi annunci, fatti trovare da chi cerca casa!"
			/>
			
			<Footer />
		</div>
		</div>
	)
};

export default Home;
