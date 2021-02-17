import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom'
import DisplayImg from "../component/DisplayImg"
import "../component/home.css"
import Banner from "../component/Banner"
import TagInfo from "../component/TagInfo"



const Tag = ({match}) => {
const accessKey = process.env.accessKey || "nMXzCXR6ruc3Nz9gx43xYl_FEteUcl9jGXo_lV7_xic"

const [myImg, setImg] = useState([])
// const [input, setInput] = useState('rice')
const [loadmore, setloadMore] = useState(1)
const [sort, setSort] = useState("relevance")
const [order, setOrder] = useState("latest")
const [orientation, setOrientation] = useState("portrait")
const [Color, setColor] = useState("black")





// pagination 
const scrollTop = (e) =>{
    setloadMore(loadmore +1)
}
window.onscroll = () =>{
    if(window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight){
        scrollTop()
    }
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
    // console.log(match);
}, [Color, orientation, order, sort, loadmore]);

const response =  async () =>{
    const getImg =  await fetch(`https://api.unsplash.com/search/photos?query=${match.params.id}&client_id=${accessKey}&sort_by=${sort}&order_by=${order}&orientation=${orientation}&color=${Color}&page=${loadmore}`)
    const data =  await getImg.json()
    console.log(data.results);
    setImg(data.results)

}



  

    return (
        <div>
            <Banner />
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

            <div className="img-container">
            {myImg.map(data => <DisplayImg img={data.urls.small} userImg={data.user.profile_image.small} key={data.id} name={data.user.username} likes={data.likes} download={data.id}/>)}
                        

                        
                </div>
                
        </div>
    );
}

export default Tag;
