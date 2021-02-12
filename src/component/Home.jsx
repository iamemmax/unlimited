import React, {useEffect, useState} from 'react';
import Axios from "axios"
import DisplayImg from "../component/DisplayImg"
import Banner from "../component/Banner"
import Tag from "../component/Tag"
import "../component/home.css"
import {Link} from 'react-router-dom'




const Home = () => {

 const accessKey = process.env.accessKey || "nMXzCXR6ruc3Nz9gx43xYl_FEteUcl9jGXo_lV7_xic"

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
        
    }, [query]);

 const response =  async () =>{
     const getImg =  await fetch(`https://api.unsplash.com/search/photos?query=${input}&client_id=${accessKey}&per_page=400`)
     const data =  await getImg.json()
     console.log(data.results);
     setImg(data.results)

 }

//  const response = await fetch(``)



    return (
        <div>
            <Banner handleForm={handleForm}  HandleInput={HandleInput}  />
                 <Tag/>
                <div className="img-container">
                        {myImg.map(data => <DisplayImg img={data.urls.small} key={data.id} />)}
                        
                </div>
           
        </div>
    );
}

export default Home;
