import React from 'react';
import "../component/home.css"


const DisplayImg = ({img}) => {
    return (
        <div className="img-box">
            <div className="img">
                <img src={img}  alt=""/>
            </div>
            
        </div>
    );
}

export default DisplayImg;
