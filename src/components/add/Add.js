import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { addPhoto } from '../../JS/ACTIONS/actionsPhotos'

const Add = () => {
    const dispatch = useDispatch()
    const [newPhoto, setNewPhoto] = useState({title:"",url:""})
    const handleChange=(e)=>{
        setNewPhoto({...newPhoto,[e.target.name]:e.target.value})
    }

    const navigate=useNavigate()
    return (
        <div>
            <input type="text" name="title" placeholder='title' onChange={handleChange} />
            <input type="url" name="url" placeholder='url photo' onChange={handleChange} />
            <button onClick={()=>{dispatch(addPhoto(newPhoto));navigate("/")}}> save </button>
        </div>
    )
}

export default Add
