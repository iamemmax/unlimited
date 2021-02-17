import React, {useState, useEffect} from 'react'
import Banner from '../component/Banner'
import TagInfo from "../component/TagInfo"
import "../component/home.css"
import {Link} from 'react-router-dom'



function SingleImg({match}) {
    const [single, setSingle] = useState("")
 const accessKey = process.env.accessKey || "nMXzCXR6ruc3Nz9gx43xYl_FEteUcl9jGXo_lV7_xic"

 useEffect(() =>{
     response()
 }, [])
 const response = async () =>{
    const getImg =  await fetch(`https://api.unsplash.com/photos/${match.params.id}?client_id=${accessKey}`)
    const data = await getImg.json()
    setSingle(data)
    console.log(data);

}


    return (
        <div>
            <Banner />

                <div className="single">

              <img src={single ? single.urls.regular : ""} alt=""/>
                </div>
                <div className="download">
                       <p>Download</p>
                       <form action="">
                       <button> <a rel="nofollow" href={`https://unsplash.com/photos/${single.id}/download?force=true&w=640`} target="_blank">Small</a></button>
                       <button> <a rel="nofollow" href={`https://unsplash.com/photos/${single.id}/download?force=true&w=1920`} target="_blank">Medium</a></button>
                       
                       <button> <a rel="nofollow" href={`https://unsplash.com/photos/${single.id}/download?force=true&w=2400`} target="_blank">Large</a></button>
                    </form>
                    
                   

                </div>
            <TagInfo />
        </div>
    )
}

export default SingleImg
