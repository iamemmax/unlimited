import React, {useState} from 'react'
import {Link} from 'react-router-dom'


function TagInfo() {
const [tag, setTags] = useState('')
const [imgTag, setImgTag] = useState(false)
let tags = (e) =>{
    e.preventDefault()
    const inputTag = e.target.getAttribute('data-target');
    setTags(inputTag)

}
const fixedTagOnStroll = () =>{
    if(window.pageYOffset > 100){
        setImgTag(true)
    }else{
        setImgTag(false)

    }
}

window.addEventListener("scroll", fixedTagOnStroll)

    return (
        <>
            <div className={imgTag ? "tags fixedTag" : "tags"} onClick={tags} >
                         <Link to={`${tag}`}>  <span data-target="nature">Nature</span>
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
                                <span data-target="current event">current event</span> 
                                <span data-target="interior">interior</span> 
                                <span data-target="history">history</span> 
                                {/* <span data-target="currency">currency</span>  */}
                         </Link> 
                </div>
        </>
    )
}

export default TagInfo
