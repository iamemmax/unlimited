import React from 'react';
import "../component/home.css"
import {Link} from 'react-router-dom'



const DisplayImg = ({img, userImg, name, likes, download}) => {
    const handeleForm = (e) =>{
        e.preventDefault()
    }
    return (
            // <Router>
        <div className="img-box">
            <div className="img">
                <img src={img}  alt=""/>
            </div>
            
            <div className="userInfo">
                <div className="userImg">
                    <img src={userImg} alt=""/>
                </div>
                <div className="userText">
                    <p>{name}</p>
                <span> <i className="fa fa-thumbs-up"></i> {likes}</span>
                </div>

                {/* <div className="likes">
                </div> */}
            </div>
                <div className="download">
                    <form action="" onClick={handeleForm}>
                    <button type="submit">    
                   <li> <Link to={`/unsplash.com/photos/${download}/download?force=true`}>
               <i className="fas fa-download"></i>
                    </Link></li>
                   <li>
          </li>
                    </button>
                    </form>


              </div>
      

    
        </div>


        
    );
}
  


  



  


export default DisplayImg;
