import { Add_PHOTO, EDIT_PHOTO, DELETE_PHOTO } from "../constants/actionsTypes"

const initialState = {
    photoList: [{
        "albumId": 1,
        "id": 1,
        "title": "accusamus beatae ad facilis cum similique qui sunt",
        "url": "https://wxv73zw8wg-flywheel.netdna-ssl.com/wp-content/uploads/2018/11/Northern-Lights-Brandon-Born-01-1024x576.jpg",
        "thumbnailUrl": "https://via.placeholder.com/150/92c952"
    },
    {
        "albumId": 1,
        "id": 2,
        "title": "reprehenderit est deserunt velit ipsam",
        "url": "https://media.istockphoto.com/photos/canada-picture-id185311041?k=20&m=185311041&s=612x612&w=0&h=wB57FS-G7dNPmu2UMLArM78q4W-4pEbLu6NRUoDjCsA=",
        "thumbnailUrl": "https://via.placeholder.com/150/771796"
    },
    {
        "albumId": 1,
        "id": 3,
        "title": "officia porro iure quia iusto qui ipsa ut modi",
        "url": "https://www.voyageursdumonde.fr/voyage-sur-mesure/Img/voyages/Config/destination/LR-Destination-canada.jpg",
        "thumbnailUrl": "https://via.placeholder.com/150/24f355"
    },
    {
        "albumId": 1,
        "id": 4,
        "title": "culpa odio esse rerum omnis laboriosam voluptate repudiandae",
        "url": "https://via.placeholder.com/600/d32776",
        "thumbnailUrl": "https://via.placeholder.com/150/d32776"
    }],

}


export const photoReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case Add_PHOTO:
            return { ...state, photoList: [...state.photoList, { ...payload, id: state.photoList.length + 1 }] }
        case DELETE_PHOTO:
            return { ...state, photoList: state.photoList.filter(el => el.id != payload) }
        case EDIT_PHOTO:
            return { ...state, photoList: state.photoList.map(el => el.id == payload.id ? { ...el, title: payload.editedTitle } : el) }
        default:
            return state
    }
}