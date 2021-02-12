import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom'


const Tag = () => {

const [tag, setTags] = useState('')
let tags = (e) =>{
  
    
   const inputTag = e.target.getAttribute('data-target');
   setTags(inputTag)
//    console.log(tag);
}
  

    return (
        <div>
            <div className="tags"onClick={tags} >
                
                         <Link to={`/${tag}`}>  
                                <span data-target="nature">Nature</span>
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
                         </Link> 
                   
                </div>
        </div>
    );
}

export default Tag;
