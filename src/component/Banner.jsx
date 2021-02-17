import React, {useState} from 'react';
import "../component/banner.css"

const Banner = ({handleForm, HandleInput}) => {

    const [bannerInput, setBannerInput] = useState(false)

    const fixedSearchBar = () =>{
        if(window.pageYOffset > 200){
            setBannerInput(true)
        }else{
            setBannerInput(false)

        }
    }

    window.addEventListener("scroll", fixedSearchBar)
    
    return (
        <div className={bannerInput ? 'banner-wrapper inputOnStroll' : "banner-wrapper"}>
       <h2>Search from our unlimited image gallery </h2>
        <div className="search ">
       <form  onSubmit={handleForm}>
           <input type="text" onChange={HandleInput} id="input" placeholder="search Anything"/>
           <button type="submit"><i className="fas fa-search" ></i></button>

                
       </form>
      
       </div>
     </div>

    );
}

export default Banner;
