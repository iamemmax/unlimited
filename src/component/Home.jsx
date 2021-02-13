import React, {useEffect, useState} from 'react';
// import Axios from "axios"
import DisplayImg from "../component/DisplayImg"
import Banner from "../component/Banner"
import TagInfo from "../component/TagInfo"
import "../component/home.css"
import {Link} from 'react-router-dom'




const Home = ({match}) => {

 const accessKey = process.env.accessKey || "nMXzCXR6ruc3Nz9gx43xYl_FEteUcl9jGXo_lV7_xic"
 const SecretKey = process.env.accessKey || "ygXaq3eg3RucAlFc7OH2pDYezpCIEzItX0c0_C9LPa0"
 const OAuth  = process.env.accessKey || "lNqDoGZyA8DSBFKEfc_1XFrL5sNV5d5Pw2V9N1-2ye0"
 

const [myImg, setImg] = useState([])
const [input, setInput] = useState('rice')
const [query, setQuery] = useState("")
  
const handleForm =(e) =>{
  e.preventDefault()
  setQuery(input)


}

const HandleInput =(e) =>{
    const input = document.getElementById("input").value
  
  setInput(input);
  console.log(input);
}

  useEffect(() => {
        response()
        console.log(match);
    }, [query]);

 const response =  async () =>{
     const getImg =  await fetch(`https://api.unsplash.com/search/photos?query=${input}&secret=${SecretKey }&client_id=${accessKey}&per_page=400`)
     const data =  await getImg.json()
     console.log(data.results);
     setImg(data.results)

 }



    return (
        <div>
            <Banner handleForm={handleForm}  HandleInput={HandleInput}  />
            <TagInfo />
            
                <div className="img-container">
                        {myImg.map(data => <DisplayImg img={data.urls.small} userImg={data.user.profile_image.small} key={data.id} name={data.user.username} likes={data.likes} download={data.id}/>)}
                        
                </div>
           
        </div>
    );
}

export default Home;
