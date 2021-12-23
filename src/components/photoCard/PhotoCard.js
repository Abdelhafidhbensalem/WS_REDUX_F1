import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { deletePhoto, EditPhoto } from '../../JS/ACTIONS/actionsPhotos'
import "./photoCard.css"
const PhotoCard = ({ el }) => {
    const [editTitle, setEditTitle] = useState(false)
    const [input, setInput] = useState(el.title)
    const dispatch = useDispatch()
    const handleClick=()=>{
        if(editTitle){
            setEditTitle(!editTitle)
            dispatch(EditPhoto(input,el.id))
        }
        setEditTitle(!editTitle)
    }
    return (
        <div>
            <div>
                <div>
                    <h1>Blog Card</h1>
                </div>
                <section>
                    {!editTitle ? <h3>{el.title}</h3> : <input type="text" value={input} onChange={(e)=>setInput(e.target.value)}></input>}
                    <img src={el.url} alt="" />
                    <p className="date">12th December, 2018</p>
                    <button onClick={() => dispatch(deletePhoto(el.id))}>delete</button>
                    <button onClick={handleClick}>{!editTitle ? "Edit" : "save"}</button>
                </section>
            </div>

        </div>
    )
}

export default PhotoCard
