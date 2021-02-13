import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom'
import DisplayImg from "../component/DisplayImg"
import "../component/home.css"
import Banner from "../component/Banner"
import TagInfo from "../component/TagInfo"



const Tag = ({match}) => {
const accessKey = process.env.accessKey || "nMXzCXR6ruc3Nz9gx43xYl_FEteUcl9jGXo_lV7_xic"

const [myImg, setImg] = useState([])
const [input, setInput] = useState('rice')


  
useEffect(() => {
    response()
    console.log(match);
}, []);

const response =  async () =>{
    const getImg =  await fetch(`https://api.unsplash.com/search/photos?query=${match.params.id}&client_id=${accessKey}&per_page=400`)
    const data =  await getImg.json()
    console.log(data.results);
    setImg(data.results)

}



  

    return (
        <div>
            <Banner />
            <TagInfo />

            <div className="img-container">
            {myImg.map(data => <DisplayImg img={data.urls.small} userImg={data.user.profile_image.small} key={data.id} name={data.user.username} likes={data.likes} download={data.id}/>)}
                        

                        
                </div>
        </div>
    );
}

export default Tag;
