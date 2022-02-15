import React from 'react'

const BlueSection = (props) => {
    return (


        <div className={props.className}>
          
         {props.text} <br />
         
         {props.subtext} 
       
         <button class="text-base border-2 rounded-lg text-yellow-400 border-yellow-400 cursor: pointer; p-3 sm:mt-9"> PUBBLICA ANNUNCIO</button>
        
        </div>


    )
}

export default BlueSection
