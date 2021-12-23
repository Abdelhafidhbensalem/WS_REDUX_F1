import {Add_PHOTO,EDIT_PHOTO,DELETE_PHOTO} from "../constants/actionsTypes"

export const addPhoto=(newPhoto)=>{
return {type:Add_PHOTO,payload:newPhoto}
}

export const deletePhoto=(idPhoto)=>{
    return {type:DELETE_PHOTO,payload:idPhoto}
}

export const EditPhoto=(editedTitle,id)=>{
    return{type:EDIT_PHOTO,payload:{editedTitle,id}}
}