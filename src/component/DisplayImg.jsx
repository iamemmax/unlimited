import React from 'react';
import "../component/home.css"
import {Link} from 'react-router-dom'



const DisplayImg = ({img, userImg, name, likes, download, id}) => {
    const handeleForm = (e) =>{
        e.preventDefault()
    }
    return (
            // <Router>
        <div className="img-box">
            <div className="img">
                <Link to={`/s/${id}`}>
                <img src={img}  alt=""/>
                </Link>
            </div>
            
            <div className="userInfo">
                <div className="userImg">
                    <img src={userImg} alt=""/>
                </div>
                <div className="userText">
                    <p>{name.substr(0,10)}</p>
                <span> <i className="fa fa-thumbs-up"></i> {likes} </span>
                </div>
                
                <div className="download">
                    
             <a rel="nofollow" href={`https://unsplash.com/photos/${download}/download?force=true&w=2400`} target="_blank"> <i className="fa fa-download"></i> </a>
              </div>
            </div>
      

    
        </div>


        
    );
}
  


  



  


export default DisplayImg;
