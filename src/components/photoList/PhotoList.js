import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import PhotoCard from '../photoCard/PhotoCard'

const PhotoList = () => {
    const photoList = useSelector(state => state.photoList)
    return (
        <div style={{display:'flex',justifyContent:'space-evenly',flexWrap:"wrap"}}>
            <Link to="/add"><button>Add new Photo</button></Link>
            {photoList.map(el=><PhotoCard key={el.id} el={el}/>)}
        </div>
    )
}

export default PhotoList
