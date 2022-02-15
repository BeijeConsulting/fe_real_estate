import React from "react";
// Components
import Illustrations from '../../components/Illustrations/Illustrations';
import Carousel2 from "../../components/Carousel/Carousel2";


// CSS
import './Home.css'

const Homepage = (props) => {
	return (
		<>

            <div className="fixed-background">

			<div>Homepage</div>


			<Illustrations
				className='illustrations-container' />

			<Carousel2 />
			
			
        

            </div>
		</>

	);
};

export default Homepage;
