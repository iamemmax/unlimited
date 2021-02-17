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
// const [loadmore, setLoadmore] = useState(15)
const [page, setPage] = useState(1)
const [loading, setPageLoading] = useState(true)
const [sort, setSort] = useState("relevance")
const [order, setOrder] = useState("latest")
const [orientation, setOrientation] = useState("landscape")
const [Color, setColor] = useState("black")
  
const handleForm =(e) =>{
  e.preventDefault()
  setQuery(input)

}

// pagination

const loadmore = (e) =>{
    // setPageLoading(true)
    setPage(page+1)
}
window.onscroll = function(){
    if(window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight){
        // console.log("innerHeight", window.innerHeight);
        // console.log("documentElement", window.documentElement);
        // console.log("scrollTop", window.scrollTop);
        loadmore()
    }
}


const HandleInput =(e) =>{
    const input = document.getElementById("input").value
  setInput(input);
  setPageLoading(true)

}



const handleOrder = (e) =>{
    setOrder(e.target.value)
}

const handleSort = (e) =>{
    setSort(e.target.value)
}

const handleOrientation = (e) =>{
    setOrientation(e.target.value)
}
const handleColor = (e) =>{
    setColor(e.target.value)
}
  useEffect(() => {
        response()
        setPageLoading(false)
        // console.log(match);
    }, [query, sort, order, orientation, Color, page]);

 const response =  async () =>{
     const getImg =  await fetch(`https://api.unsplash.com/search/photos?query=${input}&secret=${SecretKey}&per_page=200&client_id=${accessKey}&per_page=100&sort_by=${sort}&order_by=${order}&orientation=${orientation}&color=${Color}&page=${page}`)
     const data =  await getImg.json()
    //  console.log(data.results);
     setImg(data.results)

 }



    return (
        <div>
            
            <Banner handleForm={handleForm}  HandleInput={HandleInput}  />
            <div className="realInfo">
                
                    <div className="sort">
                        <select onChange={handleSort}>
                            <option value="relevance">relevance</option>
                            <option value="Newest">Newest</option>
                        </select>
                    </div>
                    {/* orderby */}
                    <div className="orderBy" onChange={handleOrder}>
                        <select id="">
                        <option default disabled>Order By</option>
                        <option value="oldest">Oldest</option>
                        <option value="popular">Popular</option>
                        <option value="latest">latest</option>
                        
                        </select>
                    </div>

                    <div className="orderBy" onChange={handleOrientation}>
                        <select id="">
                        
                        <option default disabled>Orientation</option>
                        <option value="landscape">landscape</option>
                        <option value="portrait">portrait</option>
                        <option value="squarish">squarish</option>
                        
                        </select>
                    </div>

                    {/* color */}
                    <div className="orderBy" onChange={handleColor}>
                        <select id="">
                        <option value="black_and_white">black_and_white</option>
                        <option default disabled>Color</option>
                        <option value="black">black</option>
                        <option value="yellow">yellow</option>
                        <option value="white">white</option>
                        <option value="orange">orange</option>
                        <option value="red">red</option>
                        <option value="purple">purple</option>
                        <option value="magenta">magenta</option>
                        <option value="green">green</option>
                        <option value="teal">teal</option>
                        <option value="blue">blue</option>
                        
                        </select>
                    </div>

                </div>
            <TagInfo />
            
            <div className="loading">
               {loading && <p>Loading ......</p>}
            </div>
                <div className="img-container">
                        {myImg.map(data => <DisplayImg img={data.urls.small} userImg={data.user.profile_image.small} key={data.id} name={data.user.username} likes={data.likes} download={data.id}/>)}
                        
           
        </div>

                       
                </div>
    );
}

export default Home;
