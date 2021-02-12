import React from 'react';
import "../component/banner.css"

const Banner = ({handleForm, HandleInput}) => {

    
    return (
        <div className="banner-wrapper">
       <h2>Search from our unlimited image gallery </h2>
        <div className="search">
       <form action=""  onSubmit={handleForm}>
           <input type="text" onChange={HandleInput} id="input" placeholder="search Anything"/>
           <button type="submit"><i className="fas fa-search" ></i></button>

          
       </form>
      
       </div>
     </div>

    );
}

export default Banner;
