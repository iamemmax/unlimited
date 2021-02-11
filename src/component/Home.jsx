import React, {useEffect, useState} from 'react';
import Axios from "axios"
import DisplayImg from "../component/DisplayImg"
import Banner from "../component/Banner"
import "../component/home.css"
import {Link} from 'react-router-dom'




const Home = () => {

 const accessKey = process.env.accessKey || "nMXzCXR6ruc3Nz9gx43xYl_FEteUcl9jGXo_lV7_xic"

const [myImg, setImg] = useState([])
const [input, setInput] = useState('rice')
const [query, setQuery] = useState("")
const [tag, setTags] = useState("")
  
const handleForm =(e) =>{
  e.preventDefault()
  setQuery(input)


}

const HandleInput =(e) =>{
  const input = document.getElementById("input").value
  
  setInput(input);
  console.log(input);
}

let tags = (e) =>{
    // const tag = document.querySelector(".tags")
    e.preventDefault()
   const inputTag = e.target.getAttribute('data-target');
   console.log(inputTag);
   setTags(inputTag)
}
    useEffect(() => {
        response()
        
    }, [query, tag]);

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
                 <div className="tags" >
                    <form action="" onClick={tags}>
                     <Link>  <span data-target="nature">Nature</span></Link> 
                        <span data-target="wallpaper">Wallpapers</span>
                        <span data-target="people">People</span>
                        <span data-target="fashion">Fashion</span>
                        <span data-target="health"> Health</span>
                        <span data-target="business & work">Business & work</span>
                        <span  data-target="travel">Travel</span>
                        <span data-target="technology">Technology</span>
                        <span data-target="animal">Animal</span>
                        <span data-target="developer">developer</span>
                        <span data-target="food & drink">Food & drink</span>
                    </form>
                </div>
                <div className="img-container">
                        {myImg.map(data => <DisplayImg img={data.urls.small} key={data.id} />)}
                        
                </div>
           
        </div>
    );
}

export default Home;
